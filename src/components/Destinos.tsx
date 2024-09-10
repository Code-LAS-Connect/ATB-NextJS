'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import destinosBD from '../api/destinos/imgs.json'
import Image from 'next/image'
import Carousel from "@/components/ui/carrousel"
import Costos from '@/components/ui/costos'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100
    }
  }
}

export function Destinos({ destinosRef }: { destinosRef: React.RefObject<HTMLElement> }) {
  const destinos = destinosBD

  return (
    <motion.section
      id="destinos"
      ref={destinosRef}
      className="ct py-16 bg-gradient-to-r from-yellow-100 to-pink-100"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      <div className="container">
        <motion.h2
          className="text-3xl font-bold text-center mb-12 text-[#6b4226]"
          variants={itemVariants}
        >
          Nuestros Destinos
        </motion.h2>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
        >
          {destinos.map((destino) => (
            <motion.div key={destino.id} variants={itemVariants}>
              <Dialog>
                <DialogTrigger asChild>
                  <Card className="overflow-hidden transition-transform hover:scale-105 cursor-pointer bg-[#f5f2e9]">
                    <CardHeader className="bg-gradient-to-r from-[#6b4226] to-[#8b5d3e]">
                      <CardTitle className="text-[#f5f2e9]">{destino.name}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <Image
                        src={destino.image}
                        alt={destino.name}
                        width={500}
                        height={300}
                        className="rounded-md"
                      />
                    </CardContent>
                  </Card>
                </DialogTrigger>
                <DialogContent
                  className="bg-[#f0e3d1] text-[#4a3c31] overflow-y-auto"
                  style={{ width: '90vw', height: '90vh' }}
                >
                  <DialogHeader>
                    <DialogTitle>{destino.name}</DialogTitle>
                  </DialogHeader>
                  <div className="relative">
                    <Carousel
                      images={[
                        {
                          img: destino.image,
                          title: destino.name,
                          description: `Vista panorámica de ${destino.name}`,
                        },
                        {
                          img: destino.image,
                          title: destino.name,
                          description: `Vista panorámica de ${destino.name}`,
                        },
                        {
                          img: destino.image,
                          title: destino.name,
                          description: `Vista panorámica de ${destino.name}`,
                        }
                      ]}
                    />
                  </div>
                  <Costos />
                </DialogContent>
              </Dialog>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  )
}