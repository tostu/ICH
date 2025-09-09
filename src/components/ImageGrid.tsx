import React, { useState } from 'react';
import { motion } from 'motion/react';

const ImageGrid: React.FC = () => {
  const [isInView, setIsInView] = useState(false);
  
  const images = [
    '_DSF0072.jpg',
    '_DSF0086.jpg',
    '_DSF0093.jpg',
    '_DSF0154.jpg',
    '_DSF0175.jpg',
    '_DSF0200.jpg',
    '_DSF0228.jpg',
    '_DSF0264.jpg',
    '_DSF0270.jpg',
    '_DSF0333.jpg',
    '_DSF0350.jpg',
    '_DSF0373.jpg',
    '_DSF0437.jpg',
    '_DSF0453.jpg',
    '_DSF0476.jpg',
    '_DSF0487.jpg',
    '_DSF0521.jpg',
    '_DSF0550.jpg'
  ];

  const getWaveDelay = (index: number, columns: number) => {
    const row = Math.floor(index / columns);
    const col = index % columns;
    return (row + col) * 0.1;
  };

  return (
    <motion.div 
      className="w-full max-w-7xl mx-auto px-4"
      onViewportEnter={() => setIsInView(true)}
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {images.map((imageName, index) => (
          <motion.div 
            key={index}
            className="relative overflow-hidden rounded-lg bg-gray-200 aspect-square"
            initial={{ 
              scale: 0,
              rotate: 180,
              opacity: 0
            }}
            animate={isInView ? { 
              scale: 1,
              rotate: 0,
              opacity: 1
            } : { 
              scale: 0,
              rotate: 180,
              opacity: 0
            }}
            transition={{
              type: 'spring',
              stiffness: 300,
              damping: 25,
              mass: 0.8,
              delay: getWaveDelay(index, 6)
            }}
            whileHover={{
              scale: 1.05,
              rotate: 5,
              transition: { duration: 0.2 }
            }}
          >
            <img
              src={`/src/assets/StaggeredGrid/${imageName}`}
              alt={`Gallery image ${imageName}`}
              className="absolute inset-0 w-full h-full object-cover"
              loading="lazy"
            />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default ImageGrid;