import React from 'react';
import { container } from '../../styles/common';
import ProgramCard from './ProgramCard';
import { programsData } from './programsData';
import GridBackground from '../common/GridBackground';

const Programs = () => {
  return (
    <GridBackground className="py-24 bg-[#020202]">
      <section id="programs">
        <div className={`${container} px-4 sm:px-6 lg:px-8`}>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#E0FFFF] mb-4">
              Training Programs
            </h2>
            <p className="text-xl text-[#E0FFFF]/80 max-w-2xl mx-auto">
              Choose the perfect program that matches your goals and experience level
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programsData.map((program, index) => (
              <ProgramCard key={index} {...program} />
            ))}
          </div>
        </div>
      </section>
    </GridBackground>
  );
};

export default Programs;