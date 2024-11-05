"use client";
import React from "react";
import { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
interface Props {
  children: React.ReactNode;
  width?: "fit-content" | "100%";
}

const Revel = ({ children, width = "fit-content" }: Props) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const animation = useAnimation();
  const slideControl = useAnimation();
  useEffect(() => {
    if (inView) {
      console.log(inView);
      animation.start("visible");
      slideControl.start("visible");
    }
  }, [inView]);
  return (
    <div ref={ref}>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 52 },

          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={animation}
        transition={{ duration: 0.5, delay: 0 }}
      >
        {children}
      </motion.div>
      {/* <motion.div
        variants={{
          hidden: { left: 0 },

          visible: { left: "100%" },
        }}
        initial="hidden"
        animate={slideControl}
        transition={{ duration: 0.5, ease: "easeIn" }}
        style={{
          position:"absolute",
          top:4,
          bottom:4,
          left:0,
          right:0,
          zIndex:20,
          background:"#16a34a "
        }}
      ></motion.div> */}
    </div>
  );
};

export default Revel;
