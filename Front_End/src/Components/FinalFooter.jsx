import React from "react";
import Footer from "./Footer";
import { motion } from 'framer-motion';

function FinalFooter() {
  return (
    <>
      <motion.div
        className="z-50 bg-black text-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        style={{ position: "fixed", bottom: 0, width: "100%" }}
      >
        <Footer />
      </motion.div>
    </>
  );
}

export default FinalFooter;
