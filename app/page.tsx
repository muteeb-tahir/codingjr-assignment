
"use client";
import Lenis from "lenis";
import { motion } from "framer-motion";
import {
  GraduationCap,
  Users,
  Star,
  ArrowRight,
  Menu,
  Brain,
  Rocket,
  Globe,
  X,
  Sparkles,
  ShieldCheck,
} from "lucide-react";

import { useEffect, useState } from "react";

export default function Home() {
  const [open, setOpen] = useState(false);

  const heroImages = [
    "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=1400&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1400&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=1400&auto=format&fit=crop",
  ];

  const [currentImage, setCurrentImage] = useState(0);
  const [mousePosition, setMousePosition] = useState({
  x: 0,
  y: 0,
});
useEffect(() => {
  const interval = setInterval(() => {
    setCurrentImage((prev) => (prev + 1) % heroImages.length);
  }, 3000);

  const lenis = new Lenis({
    duration: 1.2,
    smoothWheel: true,
  });

  function raf(time: number) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);

  return () => clearInterval(interval);
}, []);

useEffect(() => {
  const mouseMove = (e: MouseEvent) => {
    setMousePosition({
      x: e.clientX,
      y: e.clientY,
    });
  };

  window.addEventListener("mousemove", mouseMove);

  return () => {
    window.removeEventListener("mousemove", mouseMove);
  };
}, []);
  const programs = [
    {
      title: "AI & Computer Science",
      desc: "Build next-generation applications using AI and cloud technologies.",
      icon: <Brain size={38} className="text-cyan-400" />,
    },
    {
      title: "Startup & Business",
      desc: "Learn leadership, entrepreneurship and modern business strategy.",
      icon: <Rocket size={38} className="text-pink-400" />,
    },
    {
      title: "Creative Design",
      desc: "Master UI/UX, digital branding and immersive experiences.",
      icon: <Globe size={38} className="text-purple-400" />,
    },
  ];

  const testimonials = [
    {
      name: "Aarav Sharma",
      text: "An amazing experience with modern learning and practical exposure.",
    },
    {
      name: "Riya Patel",
      text: "The faculty and student culture here are truly outstanding.",
    },
    {
      name: "Aditya Mehta",
      text: "Industry-focused education helped me grow professionally.",
    },
  ];

  return (
    <main className="bg-[#070B1A] text-white overflow-x-hidden relative selection:bg-cyan-400 selection:text-black">
     <motion.div
  className="fixed top-0 left-0 w-72 h-72 rounded-full pointer-events-none z-0 bg-cyan-400/10 blur-3xl"
  animate={{
    x: mousePosition.x - 150,
    y: mousePosition.y - 150,
  }}
  transition={{
    type: "tween",
    ease: "backOut",
    duration: 0.3,
  }}
/>
     <div className="pointer-events-none absolute inset-0 overflow-hidden">
  <div className="absolute top-[20%] left-[10%] w-[300px] h-[300px] bg-cyan-500/20 blur-[120px] rounded-full animate-pulse"></div>

  <div className="absolute bottom-[10%] right-[10%] w-[300px] h-[300px] bg-purple-500/20 blur-[120px] rounded-full animate-pulse"></div>
</div>
      {/* BACKGROUND GLOW */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.15),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(168,85,247,0.15),transparent_35%)]"></div>
      <div className="fixed top-0 left-0 w-full h-full -z-10 overflow-hidden">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-cyan-500/20 blur-[140px] rounded-full"></div>
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-500/20 blur-[140px] rounded-full"></div>
      </div>

      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-white/5 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <h1 className="text-3xl font-black tracking-wide">
            Neo<span className="text-cyan-400">Campus</span>
          </h1>

          <div className="hidden md:flex items-center gap-8 text-sm font-medium">
            <a href="#about" className="hover:text-cyan-400 transition">
              About
            </a>
            <a href="#programs" className="hover:text-cyan-400 transition">
              Programs
            </a>
            <a href="#features" className="hover:text-cyan-400 transition">
              Features
            </a>
            <a href="#testimonials" className="hover:text-cyan-400 transition">
              Testimonials
            </a>

            <button className="bg-cyan-400 hover:bg-cyan-300 text-black px-8 py-4 rounded-2xl font-bold transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(34,211,238,0.5)]">
              Get Started
            </button>
          </div>

          <button
            className="md:hidden"
            onClick={() => setOpen(!open)}
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>

        {open && (
          <div className="md:hidden bg-[#111827] px-6 pb-6 flex flex-col gap-4 text-sm">
            <a href="#about">About</a>
            <a href="#programs">Programs</a>
            <a href="#features">Features</a>
            <a href="#testimonials">Testimonials</a>

            <button className="bg-cyan-400 hover:bg-cyan-300 text-black px-8 py-4 rounded-2xl font-bold transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(34,211,238,0.5)]">
              Get Started
              Get Started
            </button>
          </div>
        )}
      </nav>

      {/* HERO */}
      <section className="min-h-screen flex items-center px-6 pt-32 pb-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<motion.div
  initial={{ opacity: 0, y: 60 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.7 }}
  whileHover={{
    scale: 1.04,
    rotateX: 6,
    rotateY: -6,
  }}
  style={{
    transformStyle: "preserve-3d",
  }}
  className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-[28px] p-8 text-left hover:border-cyan-400 hover:shadow-[0_0_40px_rgba(34,211,238,0.25)] transition-all duration-500"
>
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/10 rounded-full px-4 py-2 text-sm text-cyan-300 mb-6">
              <Sparkles size={16} />
              Future Ready Learning Platform
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-tight">
              Redefining
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                {" "}Education
              </span>
              <br />
              For Tomorrow
            </h1>

            <p className="mt-6 text-gray-300 text-lg max-w-xl leading-relaxed">
              Discover innovation-driven education with immersive learning,
              practical projects and a world-class student experience.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <button className="relative overflow-hidden bg-cyan-400 hover:bg-cyan-300 text-black px-8 py-4 rounded-2xl font-bold flex items-center justify-center gap-2 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(34,211,238,0.5)]">

              <span className="relative z-10 flex items-center gap-2">
                Explore Programs
                <ArrowRight size={18} />
              </span>

              <span className="absolute inset-0 -translate-x-full bg-white/30 skew-x-12 animate-[shimmer_3s_infinite]"></span>

            </button>

              <button className="bg-cyan-400 hover:bg-cyan-300 text-black px-8 py-4 rounded-2xl font-bold transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(34,211,238,0.5)]">
              Get Started
                Learn More
              </button>
            </div>
          </motion.div>

          <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{
            opacity: 1,
            scale: 1,
            y: [0, -10, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
          }}
          className="relative"
          >
            <div className="bg-gradient-to-br from-cyan-400 to-purple-500 p-1 rounded-[32px] shadow-2xl shadow-cyan-500/20">
              <img
                src={heroImages[currentImage]}
                className="h-[350px] sm:h-[450px] lg:h-[550px] w-full object-cover rounded-[32px] transition-all duration-700"
              />
            </div>

            <div className="absolute -bottom-6 left-4 sm:left-8 bg-[#111827]/80 backdrop-blur-xl border border-white/10 p-5 rounded-3xl">
              <h3 className="text-4xl font-black text-cyan-400">15K+</h3>
              <p className="text-gray-300">Students Worldwide</p>
            </div>
          </motion.div>
        </div>
      </section>
<div className="w-full h-px bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent"></div>
      {/* STATS */}
      <section className="px-6 pb-24">
        <div className="max-w-6xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            ["15K+", "Students"],
            ["120+", "Programs"],
            ["95%", "Placements"],
            ["50+", "Partners"],
          ].map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            whileHover={{
              y: -10,
              scale: 1.03,
            }}
            className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-8 text-center hover:border-cyan-400 hover:shadow-[0_0_40px_rgba(34,211,238,0.25)] transition-all duration-500"
          >
              <h2 className="text-3xl sm:text-4xl font-black text-cyan-400">
                {item[0]}
              </h2>
              <p className="text-gray-300 mt-2 text-sm sm:text-base">
                {item[1]}
              </p>
            </motion.div>
          ))}
        </div>
      </section>
<div className="w-full h-px bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent"></div>
      {/* ABOUT */}
      <section id="about" className="px-6 py-24">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <img
            src="https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=1200&auto=format&fit=crop"
            className="rounded-[32px] shadow-2xl"
          />

          <div>
            <p className="text-cyan-400 font-semibold mb-4 tracking-wide">
              ABOUT US
            </p>

            <h2 className="text-4xl sm:text-5xl font-black leading-tight">
              Creating Future Leaders Through Innovation
            </h2>

            <p className="mt-6 text-gray-300 text-lg leading-relaxed">
              We combine cutting-edge technology, practical learning and global
              collaboration to prepare students for the future.
            </p>

            <div className="mt-10 space-y-6">
              <div className="flex gap-4 bg-white/5 border border-white/10 rounded-2xl p-5">
                <GraduationCap className="text-cyan-400" />

                <div>
                  <h3 className="font-bold text-xl">
                    Practical Learning
                  </h3>

                  <p className="text-gray-400 mt-1">
                    Real-world projects and hands-on experiences.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 bg-white/5 border border-white/10 rounded-2xl p-5">
                <ShieldCheck className="text-purple-400" />

                <div>
                  <h3 className="font-bold text-xl">
                    Career Focused
                  </h3>

                  <p className="text-gray-400 mt-1">
                    Industry-ready programs designed for future careers.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
<div className="w-full h-px bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent"></div>
      {/* PROGRAMS */}
      <section id="programs" className="px-6 py-24">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-cyan-400 font-semibold tracking-wide">
            PROGRAMS
          </p>

          <h2 className="text-4xl sm:text-5xl font-black mt-4">
            Explore Our Programs
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
            {programs.map((program, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                whileHover={{ scale: 1.04 }}
className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-[28px] p-8 hover:border-cyan-400 hover:shadow-[0_0_40px_rgba(34,211,238,0.25)] transition-all duration-500"                 >
                <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10">
                  {program.icon}
                </div>

                <h3 className="text-2xl font-bold mt-6">
                  {program.title}
                </h3>

                <p className="text-gray-400 mt-4 leading-relaxed">
                  {program.desc}
                </p>

                <button className="mt-6 text-cyan-400 flex items-center gap-2 font-semibold">
                  Learn More
                  <ArrowRight size={16} />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
<div className="w-full h-px bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent"></div>
      {/* FEATURES */}
      <section id="features" className="px-6 py-24">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <p className="text-cyan-400 font-semibold tracking-wide">
              WHY CHOOSE US
            </p>

            <h2 className="text-4xl sm:text-4xl sm:text-5xl lg:text-7xl font-black mt-4">
              Built For Modern Students
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
            {[
              "Interactive Learning",
              "Global Opportunities",
              "Career Guidance",
            ].map((feature, i) => (
              <div
                key={i}
                className="bg-gradient-to-br from-white/10 to-white/5 border border-white/10 rounded-[28px] p-8"
              >
                <div className="w-14 h-14 rounded-2xl bg-cyan-400/20 flex items-center justify-center mb-6">
                  <Sparkles className="text-cyan-400" />
                </div>

                <h3 className="text-2xl font-bold">{feature}</h3>

                <p className="text-gray-400 mt-4 leading-relaxed">
                  Modern infrastructure and innovative teaching methods for the next generation.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
<div className="w-full h-px bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent"></div>
      {/* TESTIMONIALS */}
      <section id="testimonials" className="px-6 py-24">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-cyan-400 font-semibold tracking-wide">
            TESTIMONIALS
          </p>

          <h2 className="text-4xl sm:text-5xl font-black mt-4">
            Loved By Students
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
            {testimonials.map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -8 }}
className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-[28px] p-8 hover:border-cyan-400 hover:shadow-[0_0_40px_rgba(34,211,238,0.25)] transition-all duration-500"              >
                <div className="flex gap-1 mb-5">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={18}
                      className="fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>

                <p className="text-gray-300 italic leading-relaxed">
                  “{item.text}”
                </p>

                <div className="mt-6 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-cyan-400 to-purple-400"></div>

                  <div>
                    <h4 className="font-bold">{item.name}</h4>
                    <p className="text-gray-400 text-sm">Student</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
<div className="w-full h-px bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent"></div>
      {/* CTA */}
      <section className="px-6 py-24">
        <div className="max-w-6xl mx-auto bg-gradient-to-r from-cyan-400 to-purple-500 rounded-[36px] p-10 sm:p-16 text-center shadow-2xl shadow-cyan-500/20">
          <h2 className="text-4xl sm:text-5xl font-black text-black leading-tight">
            Start Your Learning Journey Today
          </h2>

          <p className="mt-6 text-black/80 text-lg max-w-2xl mx-auto">
            Join a community of innovators, creators and future leaders.
          </p>

          <button className="mt-10 bg-black text-white px-8 py-4 rounded-2xl font-bold hover:scale-105 transition">
            Apply Now
          </button>
        </div>
      </section>
<div className="w-full h-px bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent"></div>
      {/* FOOTER */}
      <footer className="border-t border-white/10 py-10 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <h1 className="text-3xl font-black tracking-wide">
            Neo<span className="text-cyan-400">Campus</span>
          </h1>

          <p className="text-gray-400 text-center md:text-right">
            © 2026 NeoCampus. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}



