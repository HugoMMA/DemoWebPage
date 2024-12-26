import React from 'react';
import { Check } from 'lucide-react';
import { buttonStyles } from '../../styles/common';

interface ProgramFeature {
  text: string;
}

interface ProgramCardProps {
  title: string;
  description: string;
  image: string;
  features: ProgramFeature[];
  price: string;
}

const ProgramCard = ({ title, description, image, features, price }: ProgramCardProps) => {
  return (
    <div className="bg-[#2C2C2C] rounded-2xl overflow-hidden transition-transform hover:scale-[1.02]">
      <div className="h-48 overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-6 space-y-4">
        <h3 className="text-2xl font-bold text-[#E0FFFF]">{title}</h3>
        <p className="text-[#E0FFFF]/80">{description}</p>
        <div className="space-y-2">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center gap-2">
              <Check size={18} className="text-[#00FFFF]" />
              <span className="text-[#E0FFFF]/80">{feature.text}</span>
            </div>
          ))}
        </div>
        <div className="pt-4">
          <p className="text-[#00FFFF] text-2xl font-bold mb-4">{price}</p>
          <button className={`${buttonStyles.primary} rounded-md w-full`}>
            Choose Plan
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProgramCard;