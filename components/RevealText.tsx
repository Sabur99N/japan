
import React from 'react';
import { motion, Variants } from 'framer-motion';

interface RevealTextProps {
  text: string;
  className?: string;
  // Fix: Use React.JSX to resolve the "Cannot find namespace 'JSX'" error in some environments
  as?: keyof React.JSX.IntrinsicElements;
  delay?: number;
}

const RevealText: React.FC<RevealTextProps> = ({ text, className, as: Component = 'div', delay = 0 }) => {
  const words = text.split(' ');

  const container: Variants = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.05, delayChildren: delay * i },
    }),
  };

  const child: Variants = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  // Fix: Use the motion() factory function to create a motion-enabled component from the dynamic 'as' tag
  const MotionComponent = motion(Component as any);

  return (
    <MotionComponent
      style={{ overflow: "hidden", display: "flex", flexWrap: "wrap" }}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      className={className}
    >
      {words.map((word, index) => (
        <motion.span
          variants={child}
          key={index}
          style={{ marginRight: "5px" }}
        >
          {word}
        </motion.span>
      ))}
    </MotionComponent>
  );
};

export default RevealText;
