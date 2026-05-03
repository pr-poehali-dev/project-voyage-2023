import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0vh", "50vh"]);

  return (
    <div ref={container} className="relative flex items-center justify-center h-screen overflow-hidden">
      <motion.div style={{ y }} className="absolute inset-0 w-full h-full">
        <img
          src="https://cdn.poehali.dev/projects/a04c8071-56d2-44d0-ac70-937244d1a35f/files/859bec56-372b-4189-a32c-86f77b221115.jpg"
          alt="Модная одежда"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
      </motion.div>

      <div className="relative z-10 text-center text-white px-6">
        <p className="text-rose-400 uppercase tracking-widest text-sm mb-4">Новая коллекция 2025</p>
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tight mb-6 leading-none">
          VOGUE<span className="text-rose-400">.</span>
        </h1>
        <p className="text-lg md:text-xl max-w-xl mx-auto opacity-90 mb-10">
          Модная одежда для тех, кто не боится выделяться. Стиль — это язык без слов.
        </p>
        <a
          href="#catalog"
          className="inline-block bg-rose-500 hover:bg-rose-600 text-white px-10 py-4 uppercase tracking-widest text-sm transition-all duration-300"
        >
          Смотреть каталог
        </a>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white opacity-60 animate-bounce">
        <div className="w-px h-12 bg-white mx-auto" />
        <p className="text-xs uppercase tracking-widest mt-2">Листай вниз</p>
      </div>
    </div>
  );
}
