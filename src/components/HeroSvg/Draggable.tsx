'use client';

import { motion } from 'framer-motion';
import { DRAG_TRANSITION } from './settings';

function Draggable({ children }: { children: React.ReactNode }) {
  return (
    <motion.g
      drag
      dragSnapToOrigin
      dragTransition={DRAG_TRANSITION}
      dragElastic={0.1}
      dragConstraints={{
        top: -50,
        right: 50,
        bottom: 50,
        left: -50,
      }}
    >
      {children}
    </motion.g>
  );
}

export default Draggable;
