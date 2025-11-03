// components/LogoLoader.tsx
import { motion } from "framer-motion";

const Ablogo = "/assets/ABloading.png";

const LogoLoader = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-slate-100 to-slate-200 overflow-hidden">
      {/* Background pulse light (like sunlight reflection on buildings) */}
      <motion.div
        className="absolute w-[400px] h-[400px] rounded-full bg-yellow-100 blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.5, 0.7, 0.5],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Logo floating in with fade + scale */}
      <motion.img
        src={Ablogo}
        alt="Abhinandan Builders Logo"
        className="w-48 h-48 rounded-2xl shadow-2xl z-10"
        initial={{ opacity: 0, scale: 0.6, y: 40 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{
          type: "spring",
          stiffness: 120,
          damping: 12,
        }}
      />

      {/* Elegant tagline text */}
      <motion.div
        className="mt-8 text-gray-600 text-xl font-medium tracking-wide z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        “Building Spaces, Building Trust”
      </motion.div>

      {/* Subtle loading bar that grows like a foundation being built */}
      <motion.div
        className="mt-6 w-40 h-1 bg-gray-300 rounded-full overflow-hidden"
        initial={{ width: 0 }}
        animate={{ width: "10rem" }}
        transition={{ duration: 1.2, ease: "easeInOut", repeat: Infinity }}
      >
        <motion.div
          className="h-full bg-amber-500"
          animate={{ x: ["-100%", "100%"] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </motion.div>
    </div>
  );
};

export default LogoLoader;