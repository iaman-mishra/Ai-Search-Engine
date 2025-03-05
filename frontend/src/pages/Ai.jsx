import React, { useRef, useContext } from 'react';
import ReactMarkdown from "react-markdown";
import { motion } from "framer-motion";
import AppContext from '../AppContext';

const Ai = () => {

  const { searchResults} = useContext(AppContext);
  const geminiResults = searchResults.geminiResults;
  const containerRef = useRef(null);

  return (
    <motion.div
      className="whitespace-pre-wrap p-4 overflow-hidden rounded-lg bg-white shadow-md border border-gray-200 h-full"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      ref={containerRef}
    >
      <h2 className="font-bold text-lg mb-4">MishraJi Ka AI Results</h2>
      <ReactMarkdown>{geminiResults? geminiResults : "No result found"}</ReactMarkdown>
    </motion.div>
  );
};

export default Ai;