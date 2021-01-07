import { motion } from "framer-motion";
import React, { FunctionComponent } from "react";

const Scale: FunctionComponent = ({ children }) => (
  <motion.div
    initial={{ scale: 0 }}
    exit={{ scale: 0 }}
    animate={{ scale: 1 }}
    transition={{ duration: 0.5 }}
  >
    {children}
  </motion.div>
);

export default Scale;
