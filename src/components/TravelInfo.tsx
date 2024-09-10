"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Plane, Briefcase, HelpCircle } from "lucide-react";

const tabData = [
  { id: "stats", label: "Estadísticas", icon: Plane },
  { id: "services", label: "Servicios", icon: Briefcase },
  { id: "faq", label: "FAQ", icon: HelpCircle },
];

const handleContactClick = (contactoRef: React.RefObject<HTMLDivElement>) => {
  if (contactoRef.current) {
    contactoRef.current.scrollIntoView({ behavior: "smooth" }); // Aquí deberías abrir el diálogo de contacto si es necesario
  }
};

interface TravelInfoProps {
  scrollToSection: (ref: React.RefObject<HTMLDivElement>) => void;
  contactoRef: React.RefObject<HTMLDivElement>;
}

export function TravelInfo(props: TravelInfoProps) {
  const { scrollToSection, contactoRef } = props;
  const [activeTab, setActiveTab] = useState("stats");

  const handleTabClick = (tabId: string) => {
    setActiveTab(tabId);
    let sectionRef: React.RefObject<HTMLDivElement> | null = null;
    switch (tabId) {
      case "stats":
        sectionRef = contactoRef;
        break;
      // Agrega más casos para otras pestañas si es necesario
      default:
        break;
    }
    if (sectionRef && sectionRef.current) {
      scrollToSection(sectionRef);
    }
  };

  return (
    <div className="w-full bg-gradient-to-r from-yellow-100 to-pink-100 rounded-lg shadow py-16">
      {/* Button for mobile devices */}
      <div className="sm:hidden">
        <select
          className="w-full p-2.5 text-gray-900 bg-white border border-yellow-500 rounded-md shadow-sm outline-none appearance-none focus:border-yellow-600"
          onChange={(e) => handleTabClick(e.target.value)}
          value={activeTab}
        >
          {tabData.map((tab) => (
            <option key={tab.id} value={tab.id}>
              {tab.label}
            </option>
          ))}
        </select>
      </div>

      {/* Tabs for desktop */}
      <ul className="hidden text-sm font-medium text-center text-gray-900 divide-x divide-gray-300 rounded-lg sm:flex">
        {tabData.map((tab) => (
          <li key={tab.id} className="w-full">
            <button
              onClick={() => handleTabClick(tab.id)}
              className={`inline-flex items-center justify-center w-full p-4 border rounded-lg ${
                activeTab === tab.id
                  ? "text-yellow-600 bg-white border-yellow-500"
                  : "text-gray-900 border-transparent hover:text-yellow-600 hover:bg-yellow-50 hover:border-yellow-500"
              } focus:outline-none transition-colors`}
              aria-selected={activeTab === tab.id}
              aria-controls={tab.id}
            >
              <tab.icon className="w-5 h-5 mr-2" />
              {tab.label}
            </button>
          </li>
        ))}
      </ul>

      <div className="border-t border-gray-300">
        {activeTab === "stats" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="p-6 bg-gradient-to-r from-yellow-100 to-pink-100 rounded-lg md:p-12 shadow-lg"
          >
            <h2 className="mb-8 text-3xl font-extrabold text-gray-900 text-center">
              Nuestras Estadísticas
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Estadísticas */}
              {/* ... (tu contenido aquí) */}
            </div>
          </motion.div>
        )}

        {activeTab === "services" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="p-6 bg-gradient-to-r from-yellow-100 to-pink-100 rounded-lg md:p-12 shadow-lg"
          >
            <h2 className="mb-6 text-3xl font-extrabold tracking-tight text-gray-900">
              Nuestros servicios de viaje
            </h2>

            <div className="flex flex-col md:flex-row md:space-x-6">
              {/* Servicios */}
              {/* ... (tu contenido aquí) */}
            </div>
            <div className="mt-8 text-center">
              <a
                href="#"
                className="inline-block px-6 py-3 text-lg font-semibold text-white bg-yellow-500 rounded-lg hover:bg-yellow-600 transition-colors"
              >
                Contáctanos para más detalles
              </a>
            </div>
          </motion.div>
        )}

        {activeTab === "faq" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="p-6 bg-gradient-to-r from-yellow-100 to-pink-100 rounded-lg md:p-12 shadow-lg"
          >
            <h2 className="mb-6 text-3xl font-extrabold tracking-tight text-gray-900">
              Preguntas Frecuentes
            </h2>
            <div className="space-y-4">
              {/* Preguntas frecuentes */}
              {/* ... (tu contenido aquí) */}
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}
