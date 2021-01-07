import { motion } from "framer-motion";
import React, { FunctionComponent } from "react";

const Fade: FunctionComponent = ({ children }) => (
  <motion.div
    initial={{ opacity: 0 }}
    exit={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.5 }}
  >
    {children}
  </motion.div>
);

export default Fade;
