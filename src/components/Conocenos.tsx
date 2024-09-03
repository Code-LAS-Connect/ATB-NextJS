import React from 'react';
import { Users, MapPin } from 'lucide-react';

export function Conocenos({ conocenosRef }:any) {
  return (
    <section id="conocenos" ref={conocenosRef} className="py-16 bg-white animate-fadeIn">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-12 text-blue-800">Conócenos</h2>
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/2">
            <img
              src="https://images.unsplash.com/photo-1539635278303-d4002c07eae3?w=800&h=600&fit=crop"
              alt="Equipo TravelDreams"
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="md:w-1/2">
            <p className="text-lg mb-4 text-gray-700">
              En TravelDreams, nos apasiona crear experiencias de viaje inolvidables...
            </p>
            <div className="flex space-x-4">
              <div className="flex items-center">
                <Users className="h-6 w-6 mr-2 text-blue-600" />
                <span className="text-gray-800">1000+ clientes felices</span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-6 w-6 mr-2 text-blue-600" />
                <span className="text-gray-800">50+ destinos</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
