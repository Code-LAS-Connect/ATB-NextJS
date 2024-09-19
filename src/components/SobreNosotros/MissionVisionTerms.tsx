'use client'

import React, { useEffect, useState } from "react"
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

// Definir tipos para las secciones
interface Section {
  title: string;
  content: string;
}

const fadeInScale = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { duration: 0.8, ease: "easeOut" }
  }
}

const stagger = {
  visible: {
    transition: {
      staggerChildren: 0.3
    }
  }
}

export function MissionVisionTerms() {
  const [sections, setSections] = useState<Section[]>([]); // Estado para almacenar las secciones
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  // Fetch para obtener los datos del archivo JSON desde la carpeta public
  useEffect(() => {
    const fetchSections = async () => {
      const response = await fetch('/sobreNosotros/visionMision.json'); // URL relativa al archivo en la carpeta public
      const data = await response.json();
      setSections(data.sections); // Actualiza el estado con las secciones
    };
    
    fetchSections();
  }, []); // Ejecuta el fetch una sola vez al montar el componente

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    } else {
      controls.start("hidden")
    }
  }, [controls, inView]);

  return (
    <section className="py-20 bg-gradient-to-r from-yellow-100 to-pink-100">
      <motion.div
        className="container mx-auto px-4"
        initial="hidden"
        animate={controls}
        variants={stagger}
        ref={ref}
      >
        <motion.h2
          className="text-5xl font-bold text-center mb-16 text-amber-800 relative"
          variants={fadeInScale}
        >
          Misión, Visión y Términos
          <span className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-amber-500"></span>
        </motion.h2>

        <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-8" variants={stagger}>
          {sections.map((section, index) => (
            <motion.div 
              key={section.title} 
              variants={fadeInScale}
              whileHover={{ y: -10 }}
            >
              <Card className="h-full bg-white bg-opacity-80 backdrop-blur-sm hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="text-2xl font-semibold text-amber-700 flex items-center">
                    <span className="mr-2 text-3xl">{['🎯', '👁️', '📜'][index]}</span>
                    {section.title}
                  </CardTitle>
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
