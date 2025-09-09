import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';

const StaggeredGrid: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "center center"]
  });
  
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
    '_DSF0550.jpg',
    '_DSF0638.jpg',
    '_DSF0668.jpg',
    '_DSF0726.jpg'
  ];

  const columns = 7;
  const itemsPerColumn = Math.ceil(images.length / columns);
  
  const createColumns = () => {
    const cols = [];
    for (let i = 0; i < columns; i++) {
      const startIdx = i * itemsPerColumn;
      const columnImages = images.slice(startIdx, startIdx + itemsPerColumn);
      cols.push(columnImages);
    }
    return cols;
  };

  const imageColumns = createColumns();

  const getTriangleProgress = (columnIndex: number) => {
    const middle = Math.floor(columns / 2);
    const distance = Math.abs(columnIndex - middle);
    const delayFactor = distance * 0.05; // Reduced delay between layers
    const startProgress = delayFactor;
    const endProgress = Math.min(1, delayFactor + 0.7); // Longer overlap
    return { startProgress, endProgress };
  };

  return (
    <motion.div 
      ref={containerRef}
      className="w-full overflow-hidden relative"
    >
      <div className="flex gap-4 px-4" style={{ width: 'calc(100% + 400px)', marginLeft: '-200px' }}>
        {imageColumns.map((column, columnIndex) => {
          const { startProgress, endProgress } = getTriangleProgress(columnIndex);
          const y = useTransform(
            scrollYProgress,
            [startProgress, endProgress],
            [2000, 0]
          );

          return (
            <motion.div 
              key={columnIndex} 
              className={`flex flex-col gap-4 h-full flex-1 min-w-0 ${
                columnIndex === 0 || columnIndex === columns - 1 ? 'relative' : ''
              }`}
              style={{ y }}
            >
            {columnIndex === 0 && (
              <div className="absolute inset-0 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
            )}
            {columnIndex === columns - 1 && (
              <div className="absolute inset-0 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
            )}
            {column.map((imageName, imageIndex) => (
              <div key={imageIndex} className="relative overflow-hidden rounded-lg bg-gray-200 aspect-square">
                <img
                  src={`/src/assets/StaggeredGrid/${imageName}`}
                  alt={`Gallery image ${imageName}`}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  loading="lazy"
                />
              </div>
            ))}
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
};

export default StaggeredGrid;