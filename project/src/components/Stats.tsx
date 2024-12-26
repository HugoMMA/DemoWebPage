import React from 'react';
import { Dumbbell, Zap, Trophy } from 'lucide-react';

const Stats = () => {
  return (
    <div className="grid grid-cols-3 gap-8 pt-8">
      <StatItem
        icon={<Trophy className="text-[#00FFFF]" size={24} />}
        value="10+ Years"
        label="Experience"
      />
      <StatItem
        icon={<Zap className="text-[#00FFFF]" size={24} />}
        value="500+"
        label="Students"
      />
      <StatItem
        icon={<Dumbbell className="text-[#00FFFF]" size={24} />}
        value="20+"
        label="Programs"
      />
    </div>
  );
};

interface StatItemProps {
  icon: React.ReactNode;
  value: string;
  label: string;
}

const StatItem = ({ icon, value, label }: StatItemProps) => (
  <div className="text-center">
    <div className="bg-[#2C2C2C] p-3 rounded-full w-12 h-12 mx-auto mb-2 flex items-center justify-center">
      {icon}
    </div>
    <p className="text-[#E0FFFF] font-semibold">{value}</p>
    <p className="text-[#E0FFFF]/60 text-sm">{label}</p>
  </div>
);

export default Stats;