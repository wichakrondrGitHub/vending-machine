"use client";
import { useState, useEffect } from "react";
import { useSwitch } from "@nextui-org/switch";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import Image from "next/image";

const variants = {
  hidden: { opacity: 0, x: -50, y: 0 },
  enter: { opacity: 1, x: 0, y: 0 },
};

export default function Template({ children }: { children: React.ReactNode }) {
  const { theme, setTheme } = useTheme();
  const [currentTheme, setCurrentTheme] = useState(theme);

  useEffect(() => {
    setCurrentTheme(theme);
  }, [theme]);

  return (
    <motion.main
      key={currentTheme} // This will force a re-render when the theme changes
      variants={variants}
      initial="hidden"
      animate="enter"
      transition={{ type: "linear" }}
    >
      {children}
    </motion.main>
  );
}
