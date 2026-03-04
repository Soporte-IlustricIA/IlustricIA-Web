"use client" 

import * as React from "react"
 
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
 
export interface MagicTextProps {
  text?: string;
  segments?: { text: string; className?: string }[];
  className?: string;
  progress?: any; // Allow external progress
}
 
interface WordProps {
  children: string;
  progress: any;
  range: number[];
  className?: string;
}
 
const Word: React.FC<WordProps> = ({ children, progress, range, className }) => {
  const opacity = useTransform(progress, range, [0, 1]);
 
  return (
    <span className={`relative mr-2 lg:mr-3 inline-block ${className || ""}`}>
      <span className="absolute opacity-20">{children}</span>
      <motion.span style={{ opacity: opacity }}>{children}</motion.span>
    </span>
  );
};
 
export const MagicText: React.FC<MagicTextProps> = ({ text, segments, className, progress }) => {
  const container = useRef(null);
 
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start 0.9", "start 0.5"],
  });

  const activeProgress = progress || scrollYProgress;
  
  let words: { text: string; className?: string }[] = [];

  if (segments) {
    segments.forEach(segment => {
      segment.text.split(" ").forEach(word => {
        if (word.trim()) words.push({ text: word, className: segment.className });
      });
    });
  } else if (text) {
    text.split(" ").forEach(word => {
      if (word.trim()) words.push({ text: word });
    });
  }
 
  return (
    <p ref={container} className={`flex flex-wrap ${className || ""}`}>
      {words.map((wordObj, i) => {
        const start = i / words.length;
        const end = start + 1 / words.length;
 
        return (
          <Word key={i} progress={activeProgress} range={[start, end]} className={wordObj.className}>
            {wordObj.text}
          </Word>
        );
      })}
    </p>
  );
};
