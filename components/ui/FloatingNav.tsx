import React, { useState } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils/cn";
import { FiMenu } from "react-icons/fi";

interface NavItem {
  name: string;
  link?: string;
  href?: string;
  icon?: JSX.Element;
  external?: boolean;
}

interface FloatingNavProps {
  navItems: NavItem[];
  className?: string;
}

export const FloatingNav: React.FC<FloatingNavProps> = ({ navItems, className }) => {
  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number") {
      let direction = current - scrollYProgress.getPrevious()!;

      if (scrollYProgress.get() < 0.05) {
        setVisible(true);
      } else {
        setVisible(direction < 0);
      }
    }
  });

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ opacity: 1, y: -100 }}
        animate={{ y: visible ? 0 : -100, opacity: visible ? 1 : 0 }}
        transition={{ duration: 0.2 }}
        className={cn(
          "fixed z-[5000] top-10 px-4 py-5 rounded-lg border border-black/.1 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] flex items-center space-x-4",
          "w-full max-w-[90%] mx-auto", // Ensure the navigation is centered and constrained in width
          "md:w-fit", // For medium devices and up, fit content width
          "md:relative md:justify-center", // Center the content on medium devices and up
          className
        )}
        
        style={{
          backdropFilter: "blur(16px) saturate(180%)",
          backgroundColor: "rgba(17, 25, 40, 0.75)",
          borderRadius: "12px",
          border: "1px solid rgba(255, 255, 255, 0.125)",
        }}
      >
        <div className="hidden md:flex space-x-4">
          {navItems.map((navItem, idx) => (
            navItem.external ? (
              <a
                key={`link-${idx}`}
                href={navItem.href}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "relative dark:text-neutral-50 items-center flex space-x-1 text-neutral-600 dark:hover:text-neutral-300 hover:text-neutral-500 !cursor-pointer"
                )}
              >
                {navItem.icon && <span className="block">{navItem.icon}</span>}
                <span className="text-sm">{navItem.name}</span>
              </a>
            ) : (
              <Link
                key={`link-${idx}`}
                href={navItem.link || ""}
                className={cn(
                  "relative dark:text-neutral-50 items-center flex space-x-1 text-neutral-600 dark:hover:text-neutral-300 hover:text-neutral-500 !cursor-pointer"
                )}
              >
                {navItem.icon && <span className="block">{navItem.icon}</span>}
                <span className="text-sm">{navItem.name}</span>
              </Link>
            )
          ))}
        </div>
        <div className="md:hidden flex items-center w-full justify-end">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="p-2"
            style={{ position: "relative" }}
          >
            <FiMenu className="text-white" style={{ fontSize: '1.5rem' }}/>
          </button>
          {menuOpen && (
            <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
            className="absolute right-0 top-full mt-2 w-48 rounded-lg shadow-lg z-[5000] flex flex-col items-center"
            style={{ backgroundColor: 'rgba(80, 80, 80, 0.9)', paddingRight: '16px' }}
          >
            {navItems.map((navItem, idx) => (
              navItem.external ? (
                <a
                  key={`link-${idx}`}
                  href={navItem.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block px-4 py-2 text-neutral-100 hover:bg-neutral-700 text-center"
                >
                  {navItem.name}
                </a>
              ) : (
                <Link
                  key={`link-${idx}`}
                  href={navItem.link || ""}
                  className="block px-4 py-2 text-neutral-100 hover:bg-neutral-700 text-center"
                >
                  {navItem.name}
                </Link>
              )
            ))}
          </motion.div>
          
          )}
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
