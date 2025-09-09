import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";

const StaggeredGrid: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 150%", "center center"],
  });

  const images = [
    "_DSF0072.jpg",
    "_DSF0086.jpg",
    "_DSF0093.jpg",
    "_DSF0154.jpg",
    "_DSF0175.jpg",
    "_DSF0200.jpg",
    "_DSF0228.jpg",
    "_DSF0264.jpg",
    "_DSF0270.jpg",
    "_DSF0333.jpg",
    "_DSF0350.jpg",
    "_DSF0373.jpg",
    "_DSF0437.jpg",
    "_DSF0453.jpg",
    "_DSF0487.jpg",
  ];

  const columns = 5;
  const rows = 3;

  const createColumns = () => {
    const cols = [];
    for (let i = 0; i < columns; i++) {
      const columnImages = [];
      for (let j = 0; j < rows; j++) {
        const imageIndex = j * columns + i;
        if (imageIndex < images.length) {
          columnImages.push(images[imageIndex]);
        }
      }
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
    <motion.div ref={containerRef} className="w-full relative">
      <div className="flex gap-4 px-4 relative max-w-full">
        {imageColumns.map((column, columnIndex) => {
          const { startProgress, endProgress } =
            getTriangleProgress(columnIndex);
          const y = useTransform(
            scrollYProgress,
            [startProgress, endProgress],
            [2000, 0],
          );

          return (
            <motion.div
              key={columnIndex}
              className="flex flex-col gap-4 h-full flex-1 min-w-0"
              style={{ y }}
            >
              {column.map((imageName, imageIndex) => (
                <div
                  key={imageIndex}
                  className="relative overflow-hidden rounded-lg bg-gray-200 aspect-square"
                >
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
