// src/components/WhatsappButton.tsx

import React from 'react';
import { MessageCircle } from 'lucide-react';
import { Button } from "@/components/ui/button"; // Ajusta la ruta según tu estructura

interface WhatsappButtonProps {
  onClick?: () => void;
}

const WhatsappButton: React.FC<WhatsappButtonProps> = ({ onClick }) => {
  return (
    <div className="fixed bottom-4 right-4 z-50">
      <Button 
        onClick={onClick} 
        className="bg-green-500 hover:bg-green-600 rounded-full w-16 h-16 flex items-center justify-center shadow-lg"
      >
        <MessageCircle size={32} />
      </Button>
    </div>
  );
};

export default WhatsappButton;
