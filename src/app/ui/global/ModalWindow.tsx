import { AnimatePresence } from "motion/react";
import React from "react";
import { motion } from "motion/react";

interface IProps {
  children: React.ReactNode;
  isShow: boolean;
}

const ModalWindow: React.FC<IProps> = ({ children, isShow }) => {
  const modalVar = {
    hide: { opacity: 0, transition: { duration: 0.4, ease: "easeInOut" } },
    show: {
      opacity: 1,
      transition: { duration: 0.4, ease: "easeInOut", delayChildren: 0.3 },
    },
  };

  const windowVar = {
    hide: {
      y: 70,
      opacity: 0,
      transition: { duration: 0.4, ease: "easeInOut" },
    },
    show: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.4, ease: "easeInOut" },
    },
  };

  return (
    <AnimatePresence>
      {isShow && (
        <motion.div
          className="fixed h-screen w-screen bg-black/20 top-0 left-0 flex justify-center items-center"
          variants={modalVar}
          initial="hide"
          animate={isShow ? "show" : "hide"}
          exit="hide"
        >
          <motion.div
            variants={windowVar}
            className="px-5 py-4 min-w-150 z-20 bg-lt-bg dark:bg-dk-bg rounded-xl dark:text-white dark:shadow-main dark:shadow-md"
          >
            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ModalWindow;
