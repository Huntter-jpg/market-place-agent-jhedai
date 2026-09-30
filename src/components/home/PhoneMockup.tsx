"use client";

import { useState, useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

export default function PhoneMockup() {
  const ref = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  // Mouse-tracking motion values
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth spring physics for tilt
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [15, -15]), {
    stiffness: 150,
    damping: 20,
  });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-15, 15]), {
    stiffness: 150,
    damping: 20,
  });

  function handleMouseMove(e: React.MouseEvent) {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  }

  function handleMouseLeave() {
    setIsHovered(false);
    mouseX.set(0);
    mouseY.set(0);
  }

  return (
    <div
      ref={ref}
      className="relative flex items-center justify-center"
      style={{ perspective: 1000 }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div
        className="relative"
        style={{
          rotateX: isHovered ? rotateX : 0,
          rotateY: isHovered ? rotateY : 0,
          transformStyle: "preserve-3d",
        }}
        animate={{
          y: [0, -12, 0],
          rotateY: isHovered ? undefined : [0, 3, 0, -3, 0],
          rotateZ: [0, 1.5, 0, -1.5, 0],
        }}
        transition={{
          y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
          rotateY: { duration: 6, repeat: Infinity, ease: "easeInOut" },
          rotateZ: { duration: 5, repeat: Infinity, ease: "easeInOut" },
        }}
      >
        {/* Phone shell */}
        <div className="relative w-[260px] h-[530px] sm:w-[280px] sm:h-[570px] lg:w-[300px] lg:h-[610px]">
          {/* Outer frame with gradient border */}
          <div className="absolute inset-0 rounded-[40px] bg-gradient-to-br from-white/20 to-white/5 p-[2px]">
            <div className="w-full h-full rounded-[38px] bg-neutral-900 overflow-hidden relative">
              {/* Notch */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 z-20 w-[120px] h-[28px] bg-neutral-900 rounded-b-2xl flex items-center justify-center">
                <div className="w-[60px] h-[4px] bg-neutral-700 rounded-full mt-1" />
              </div>

              {/* Screen bezel */}
              <div className="absolute inset-[3px] rounded-[36px] overflow-hidden">
                {/* Chat screenshot */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/assets/telefono_portada.webp"
                  alt="Chat de agente IA JhedAI en acción"
                  className="w-full h-full object-cover"
                />

                {/* Screen glare overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Home indicator bar */}
              <div className="absolute bottom-2 left-1/2 -translate-x-1/2 z-20 w-[100px] h-[4px] bg-white/30 rounded-full" />
            </div>
          </div>

          {/* Animated drop shadow */}
          <motion.div
            className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-[70%] h-[30px] rounded-full bg-black/25 blur-xl"
            animate={{
              scaleX: [1, 0.85, 1],
              opacity: [0.3, 0.15, 0.3],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>
      </motion.div>
    </div>
  );
}
