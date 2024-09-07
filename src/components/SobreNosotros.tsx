'use client'

import React, { useEffect } from "react"
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"
import textosData from "../api/sobreNosotros/SobreNosotros.json"
import personasData from "../api/sobreNosotros/equipoTrabajo.json"
import sectionsData from "../api/sobreNosotros/visionMision.json"
import "../app/styles/sobreNosotros.css";

const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6 }
  }
}

const stagger = {
  visible: {
    transition: {
      staggerChildren: 0.1
    }
  }
}

export function SobreNosotros({ sobreNosotrosRef }: { sobreNosotrosRef: React.RefObject<HTMLElement> }) {
  const { sections } = sectionsData
  const { texts } = textosData
  const personas = personasData

  const controls = useAnimation()
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  })

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    } else {
      controls.start("hidden")
    }
  }, [controls, inView])

  return (
    <section
      id="sobre-nosotros"
      ref={sobreNosotrosRef}
      className="ct py-16 bg-gradient-to-r from-yellow-100 to-pink-100 animate-fadeIn"
    >
      <motion.div
        className="container mx-auto px-4"
        initial="hidden"
        animate={controls}
        variants={stagger}
        ref={ref}
      >
        <motion.h2
          className="text-4xl font-bold text-center mb-16 text-amber-800"
          variants={fadeInUp}
        >
          Sobre Nosotros
        </motion.h2>

        <motion.div className="space-y-8 mb-16" variants={fadeInUp}>
          {texts.map((texto) => (
            <motion.p key={texto.id} className="text-gray-700 text-lg leading-relaxed" variants={fadeInUp}>
              {texto.texto1}
              {texto.texto2 && <br />}
              {texto.texto2}
              {texto.texto3 && <br />}
              {texto.texto3}
            </motion.p>
          ))}
        </motion.div>

        <motion.h2
          className="text-4xl font-bold text-center mb-16 text-amber-800"
          variants={fadeInUp}
        >
          Nuestro Equipo
        </motion.h2>

        <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-16" variants={stagger}>
          {personas.map((persona) => (
            <motion.div key={persona.id} className="flex flex-col items-center" variants={fadeInUp}>
              <div className="w-48 h-48 perspective">
                <div className="relative w-full h-full transition-transform duration-500 transform-style-3d hover:rotate-y-180">
                  <div className="absolute w-full h-full backface-hidden">
                    <Image
                      src={persona["url?"]}
                      alt={persona["name?"]}
                      width={192}
                      height={192}
                      className="rounded-full object-cover w-full h-full"
                    />
                  </div>
                  <div className="back">
                    <p className="text-amber-800 text-center">{persona["info?"]}</p>
                  </div>
                </div>
              </div>
              <h3 className="text-2xl font-semibold text-amber-800 mb-2 mt-4">{persona["name?"]}</h3>
            </motion.div>
          ))}
        </motion.div>

        <motion.h2
          className="text-4xl font-bold text-center mb-16 text-amber-800"
          variants={fadeInUp}
        >
          Misión, Visión y Términos
        </motion.h2>

        <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-8" variants={stagger}>
          {sections.map((section) => (
            <motion.div key={section.title} variants={fadeInUp}>
              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="text-2xl font-semibold text-amber-700">{section.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">{section.content}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}