import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  Sun,
  Moon,
  Github,
  Linkedin,
  Mail,
  Download,
  ExternalLink,
  Star,
  GraduationCap,
  Trophy,
  Users,
  BookOpen,
  Briefcase,
  Code2,
  Layers,
} from "lucide-react";
import "./index.css";

/* =====================================================
   ANIMATION VARIANTS (VERBOSE ON PURPOSE)
===================================================== */

const fadeUpSlow = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.9,
      ease: "easeOut",
    },
  },
};

const fadeUpFast = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const fadeOnly = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.8 },
  },
};

const hoverCard =
  "transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_25px_80px_-15px_rgba(0,0,0,0.45)]";

  const nameWords = ["BHARGAV", "KOUSHAL"];

const nameContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.18,
    },
  },
};

const nameWord = {
  hidden: {
    opacity: 0,
    y: 30,
    filter: "blur(6px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};


/* =====================================================
   MAIN APP
===================================================== */

export default function App() {
  const [dark, setDark] = useState(false);
useEffect(() => {
  const savedTheme = localStorage.getItem("theme");

  if (savedTheme === "dark") {
    setDark(true);
    document.documentElement.classList.add("dark");
  } else {
    setDark(false);
    document.documentElement.classList.remove("dark");
  }
}, []);
const [showIntro, setShowIntro] = useState(true);
useEffect(() => {
  const timer = setTimeout(() => {
    setShowIntro(false);
  }, 2000);

  return () => clearTimeout(timer);
}, []);



  const resumeBtnClasses = dark
    ? "border-white/30 text-white hover:bg-white hover:text-black"
    : "border-black/30 text-black hover:bg-black hover:text-white";

  /* =====================================================
     PAGE START
  ===================================================== */

  return (
    <div className="relative min-h-screen overflow-hidden">
      {showIntro && (
  <motion.div
    initial={{ opacity: 1 }}
    animate={{ opacity: 0 }}
    transition={{ duration: 1.0, ease: "easeInOut", delay: 1.2 }}
    onAnimationComplete={() => setShowIntro(false)}
    className="fixed inset-0 z-[999] flex items-center justify-center pointer-events-none"
  >
    {/* BACKGROUND BLUR + DIM */}
   <div
  className="
    absolute inset-0
    bg-black/60 dark:bg-black/80
    backdrop-blur-xl md:backdrop-blur-2xl
  "
/>


    {/* WELCOME CONTENT */}
    <motion.div
      initial={{ opacity: 0, y: 16, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="
        relative text-center px-6
        max-w-sm md:max-w-none
      "
    >
      <h1
        className="
          text-4xl md:text-6xl
          font-semibold tracking-tight
          text-white
          drop-shadow-[0_0_24px_rgba(255,255,255,0.45)]
        "
      >
        Hello 👋
      </h1>

      <p
        className="
          mt-3 md:mt-4
          text-base md:text-lg
          text-neutral-300
        "
      >
        Welcome to my portfolio
      </p>
    </motion.div>
  </motion.div>
)}



      {/* ================= BACKGROUNDS ================= */}

      {/* Dark background */}
      <div
        className={`fixed inset-0 bg-cover bg-center transition-opacity duration-1000 ${
          dark ? "opacity-100" : "opacity-0"
        }`}
        style={{
          zIndex: -60,
          backgroundImage: "url('/bg.jpg')",
        }}
      />

      {/* Light background */}
      <div
        className={`fixed inset-0 bg-cover bg-center transition-opacity duration-1000 ${
          dark ? "opacity-0" : "opacity-100"
        }`}
        style={{
          zIndex: -60,
          backgroundImage: "url('/lightbg.jpg')",
        }}
      />

      {/* Glass overlay */}
      <div
        className="fixed inset-0 backdrop-blur-md transition-colors duration-1000"
        style={{
          zIndex: -40,
          backgroundColor: dark ? "rgba(0,0,0,0.35)" : "rgba(255,255,255,0.4)",
        }}
      />

      {/* ================= CONTENT ================= */}

      <div className="relative z-10">
        {/* ================= HEADER ================= */}

        <header
          className={`sticky top-0 z-50 backdrop-blur-xl border-b transition-colors duration-500 ${
            dark ? "bg-black/60 border-white/15" : "bg-white/70 border-black/15"
          }`}
        >
          <div className="max-w-7xl mx-auto px-8 py-4 flex justify-between items-center">
            {/* NAME BLOCK */}
            <div className="flex flex-col leading-tight">
             <motion.div
  variants={nameContainer}
  initial="hidden"
  animate="visible"
  className="flex gap-3"
>
  {nameWords.map((word, i) => (
    <motion.span
      key={i}
      variants={nameWord}
      className={`text-2xl md:text-4xl font-semibold tracking-tight
        + backdrop-blur-sm
        ${
          dark
            ? "text-white drop-shadow-[0_0_18px_rgba(255,255,255,0.45)]"
            : "text-black drop-shadow-[0_0_18px_rgba(0,0,0,0.45)]"
        }`}
    >
      {word}
    </motion.span>
  ))}
</motion.div>

              <span
                className={`text-xs tracking-widest uppercase ${
                  dark ? "text-neutral-400" : "text-neutral-700"
                }`}
              ></span>
            </div>

            {/* HEADER ACTIONS */}
            <div className="flex items-center gap-6">
              <a href="/Bhargav_Koushal_Resume.pdf" download
                className={`hidden md:flex items-center gap-2 px-4 py-2 rounded-full border text-sm transition ${
                  dark
                    ? "text-white border-white/20 hover:bg-white hover:text-black"
                    : "text-black border-black/20 hover:bg-black hover:text-white"
                }`}
              >
                <Download size={16} />
                <span>Resume</span>
              </a>

              <a
                href="https://github.com/bhar7av"
                target="_blank"
                rel="noreferrer"
              >
                <Github
                  className={`transition ${
                    dark
                      ? "text-white opacity-80 hover:opacity-100"
                      : "text-black opacity-80 hover:opacity-100"
                  }`}
                />
              </a>

              <a href="https://linkedin.com/in/bhargavkoushal" target="_blank">
                <Linkedin
                  className={`${
                    dark
                      ? "text-white opacity-80 hover:opacity-100"
                      : "text-black opacity-80 hover:opacity-100"
                  } transition`}
                />
              </a>

              <button
                onClick={() => setDark(!dark)}
                className={`${
                  dark
                    ? "text-white opacity-80 hover:opacity-100"
                    : "text-black opacity-80 hover:opacity-100"
                } transition`}
              >
                {dark ? <Sun size={18} /> : <Moon size={18} />}
              </button>
            </div>
          </div>
        </header>

        {/* ================= HERO ================= */}

    {/* ================= HERO ================= */}
<section className="min-h-[95vh] flex items-center">
  <div className="max-w-7xl mx-auto px-8 grid md:grid-cols-2 gap-20 items-center">

    {/* TEXT */}
    <motion.div
      initial="hidden"
      animate="visible"
      variants={fadeUpSlow}
    >
      <h1
        className={`text-[56px] md:text-[64px] font-semibold leading-tight ${
          dark ? "text-white" : "text-black"
        }`}
      >
        Building
        <br />
        intelligent systems
      </h1>

      <p
        className={`mt-8 text-lg max-w-xl leading-relaxed ${
          dark ? "text-neutral-200" : "text-neutral-900"
        }`}
      >
        Welcome to my digital space. I’m Bhargav, a B.Tech Information
        Technology student at NIT Srinagar. I enjoy solving real-world
        problems through Machine Learning, strong software foundations,
        and thoughtfully designed user experiences.
      </p>
    </motion.div>

    {/* PHOTO */}
    <motion.div
      initial={{ opacity: 0, scale: 0.9, y: 40 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
      className="flex justify-center"
    >
      <div
        className={`w-80 h-90 rounded-3xl overflow-hidden backdrop-blur
          ${
            dark
              ? "border border-white/20 shadow-[0_0_40px_rgba(255,255,255,0.25)]"
              : "border border-black/20 shadow-[0_0_40px_rgba(0,0,0,0.25)]"
          }`}
      >
        <img src="/profile.jpg" alt="Bhargav" 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>
    </motion.div>

  </div>
</section>

        {/* ================= ABOUT ================= */}
        <section className="py-32">
          <div className="max-w-7xl mx-auto px-8">
            <motion.h2
              variants={fadeUpFast}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className={`text-4xl font-semibold mb-10 flex items-center gap-3 ${
                dark
                  ? "text-white drop-shadow-[0_0_14px_rgba(255,255,255,0.35)]"
                  : "text-black drop-shadow-[0_0_12px_rgba(0,0,0,0.35)]"
              }`}
            >
              <Users className={dark ? "text-white" : "text-black"} />
              About Me
            </motion.h2>

            <motion.div
              variants={fadeUpFast}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className={`
        p-10 rounded-3xl backdrop-blur-xl border
        transition-all duration-300
        hover:-translate-y-2
        hover:shadow-[0_25px_60px_-15px_rgba(0,0,0,0.45)]
        ${
          dark
            ? "bg-white/10 border-white/20 hover:border-white/40"
            : "bg-white/70 border-black/20 hover:border-black/40"
        }
      `}
            >
              <p
                className={`max-w-4xl leading-relaxed text-lg ${
                  dark
                    ? "text-neutral-200 drop-shadow-[0_0_8px_rgba(255,255,255,0.2)]"
                    : "text-neutral-900 drop-shadow-[0_0_6px_rgba(0,0,0,0.25)]"
                }`}
              >
                I am currently pursuing B.Tech in Information Technology at
                National Institute of Technology Srinagar. My interests lie in
                Machine Learning, backend systems, and building clean, scalable
                applications. I strongly believe in learning by building and
                continuously improving through practice.
              </p>
            </motion.div>
          </div>
        </section>

        {/* ================= SKILLS ================= */}

        <section className="py-32">
          <div className="max-w-7xl mx-auto px-8">
            {/* SECTION TITLE */}
            <h2
              className={`text-4xl font-semibold mb-16 flex items-center gap-3
        ${
          dark
            ? "text-white drop-shadow-[0_0_14px_rgba(255,255,255,0.35)]"
            : "text-black drop-shadow-[0_0_14px_rgba(0,0,0,0.35)]"
        }`}
            >
              <Star className={dark ? "text-white" : "text-black"} />
              Skills & Expertise
            </h2>

            <div className="grid md:grid-cols-3 gap-10">
              {[
                {
                  title: "Programming",
                  desc: "Python, C++, C, HTML, CSS, SQL. Strong understanding of OOP and core programming concepts.",
                },
                {
                  title: "Machine Learning & Data Science",
                  desc: "Data preprocessing, feature engineering, XGBoost, LSTM, time-series forecasting.",
                },
                {
                  title: "Web & Frameworks",
                  desc: "Django, Flask (basic), REST APIs, responsive and scalable design.",
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  variants={fadeUpFast}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className={`p-10 rounded-3xl backdrop-blur border ${hoverCard}
            ${
              dark
                ? "bg-white/10 border-white/20"
                : "bg-white/70 border-black/20"
            }`}
                >
                  <h3
                    className={`text-xl font-medium mb-4
              ${
                dark
                  ? "text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]"
                  : "text-black drop-shadow-[0_0_8px_rgba(0,0,0,0.3)]"
              }`}
                  >
                    {item.title}
                  </h3>

                  <p
                    className={`leading-relaxed
              ${
                dark
                  ? "text-neutral-200 drop-shadow-[0_0_6px_rgba(255,255,255,0.2)]"
                  : "text-neutral-900 drop-shadow-[0_0_6px_rgba(0,0,0,0.25)]"
              }`}
                  >
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= PROJECTS ================= */}

        <section className="py-32">
          <div className="max-w-7xl mx-auto px-8">
            {/* SECTION TITLE */}
            <h2
              className={`text-4xl font-semibold mb-16 flex items-center gap-3
        ${
          dark
            ? "text-white drop-shadow-[0_0_14px_rgba(255,255,255,0.35)]"
            : "text-black drop-shadow-[0_0_14px_rgba(0,0,0,0.35)]"
        }`}
            >
              <Code2 className={dark ? "text-white" : "text-black"} />
              Projects
            </h2>

            <div className="space-y-12">
              {/* ================= PROJECT 1 ================= */}
              <div
                className={`p-10 rounded-3xl backdrop-blur border ${hoverCard}
          ${
            dark ? "bg-white/10 border-white/20" : "bg-white/70 border-black/20"
          }`}
              >
                <h3
                  className={`text-2xl font-medium
            ${
              dark
                ? "text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]"
                : "text-black drop-shadow-[0_0_10px_rgba(0,0,0,0.3)]"
            }`}
                >
                  Multi-Step Time Series Forecasting
                </h3>

                <p
                  className={`mt-4 max-w-3xl leading-relaxed
            ${
              dark
                ? "text-neutral-200 drop-shadow-[0_0_6px_rgba(255,255,255,0.2)]"
                : "text-neutral-900 drop-shadow-[0_0_6px_rgba(0,0,0,0.25)]"
            }`}
                >
                  Developed a multi-step forecasting model to predict 7–30 days
                  of future values using historical energy and retail sales
                  data.
                </p>

                <ul
                  className={`mt-6 list-disc list-inside space-y-2
            ${dark ? "text-neutral-200" : "text-neutral-900"}`}
                >
                  <li>Language: Python</li>
                  <li>
                    Tools: Pandas, NumPy, Scikit-learn, TensorFlow, XGBoost
                  </li>
                  <li>
                    Learned: Rolling-origin validation, temporal feature
                    engineering, hyperparameter tuning.
                  </li>
                </ul>

                <a
                  href="https://github.com/bhar7av"
                  target="_blank"
                  rel="noreferrer"
                  className={`inline-flex items-center gap-2 mt-6 underline transition
            ${
              dark
                ? "text-white hover:opacity-100"
                : "text-black hover:opacity-100"
            }`}
                >
                  <Github size={16} />
                  <span>View on GitHub</span>
                  <ExternalLink size={14} />
                </a>
              </div>

              {/* ================= PROJECT 2 ================= */}
              <div
                className={`p-10 rounded-3xl backdrop-blur border ${hoverCard}
          ${
            dark ? "bg-white/10 border-white/20" : "bg-white/70 border-black/20"
          }`}
              >
                <h3
                  className={`text-2xl font-medium
            ${
              dark
                ? "text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]"
                : "text-black drop-shadow-[0_0_10px_rgba(0,0,0,0.3)]"
            }`}
                >
                  SpaceX Landing Page Clone
                </h3>

                <p
                  className={`mt-4 max-w-3xl leading-relaxed
            ${
              dark
                ? "text-neutral-200 drop-shadow-[0_0_6px_rgba(255,255,255,0.2)]"
                : "text-neutral-900 drop-shadow-[0_0_6px_rgba(0,0,0,0.25)]"
            }`}
                >
                  Built a pixel-perfect, fully responsive clone of the SpaceX
                  landing page using modern frontend practices.
                </p>

                <ul
                  className={`mt-6 list-disc list-inside space-y-2
            ${dark ? "text-neutral-200" : "text-neutral-900"}`}
                >
                  <li>Languages: HTML, CSS, JavaScript</li>
                  <li>Techniques: Flexbox, CSS Grid</li>
                  <li>
                    Learned: UI precision, responsive layouts, modern CSS
                    structure.
                  </li>
                </ul>

                <a
                  href="https://github.com/bhar7av/SpaceX-clone"
                  target="_blank"
                  rel="noreferrer"
                  className={`inline-flex items-center gap-2 mt-6 underline transition
            ${
              dark
                ? "text-white hover:opacity-100"
                : "text-black hover:opacity-100"
            }`}
                >
                  <Github size={16} />
                  <span>View on GitHub</span>
                  <ExternalLink size={14} />
                </a>
              </div>
              {/* ================= PROJECT 3 ================= */}
              <div
                className={`p-10 rounded-3xl backdrop-blur border ${hoverCard}
    ${dark ? "bg-white/10 border-white/20" : "bg-white/70 border-black/20"}`}
              >
                <h3
                  className={`text-2xl font-medium
      ${dark ? "text-white" : "text-black"}`}
                >
                  LLM-based Text to Graph Conversion System
                </h3>

                <p
                  className={`mt-4 max-w-3xl leading-relaxed
      ${dark ? "text-neutral-200" : "text-neutral-900"}`}
                >
                  Designed a pipeline that converts raw text into structured
                  node–edge graphs using an LLM-powered semantic correction
                  layer.
                </p>

                <ul
                  className={`mt-6 list-disc list-inside space-y-2
      ${dark ? "text-neutral-200" : "text-neutral-900"}`}
                >
                  <li>Language: Python</li>
                  <li>Tech: LLMs, NetworkX, NLP preprocessing</li>
                  <li>
                    Features: Entity extraction, relation correction, graph
                    visualization
                  </li>
                  <li>
                    Learned: Prompt engineering, semantic parsing, graph-based
                    representations
                  </li>
                </ul>

                <a
                  href="https://github.com/bhar7av"
                  target="_blank"
                  rel="noreferrer"
                  className={`inline-flex items-center gap-2 mt-6 underline
      ${dark ? "text-white" : "text-black"}`}
                >
                  <Github size={16} />
                  View on GitHub
                  <ExternalLink size={14} />
                </a>
              </div>
              {/* ================= PROJECT 5 ================= */}
              <div
                className={`p-10 rounded-3xl backdrop-blur border ${hoverCard}
    ${dark ? "bg-white/10 border-white/20" : "bg-white/70 border-black/20"}`}
              >
                <h3
                  className={`text-2xl font-medium ${
                    dark ? "text-white" : "text-black"
                  }`}
                >
                  High-End Personal Portfolio Website
                </h3>

                <p
                  className={`mt-4 max-w-3xl leading-relaxed
      ${dark ? "text-neutral-200" : "text-neutral-900"}`}
                >
                  Designed and developed a fully responsive, animated portfolio
                  inspired by Apple’s design language.
                </p>

                <ul
                  className={`mt-6 list-disc list-inside space-y-2
      ${dark ? "text-neutral-200" : "text-neutral-900"}`}
                >
                  <li>Tech: React, Tailwind CSS, Framer Motion</li>
                  <li>
                    Features: Dark/Light theme, animated sections, glassmorphism
                  </li>
                  <li>Deployment: GitHub Pages</li>
                  <li>
                    Learned: UI consistency, animation performance, theme
                    management
                  </li>
                </ul>

                <a
                  href="https://github.com/bhar7av"
                  target="_blank"
                  rel="noreferrer"
                  className={`inline-flex items-center gap-2 mt-6 underline
      ${dark ? "text-white" : "text-black"}`}
                >
                  <Github size={16} />
                  View on GitHub
                  <ExternalLink size={14} />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ================= EDUCATION ================= */}

        <section className="py-32">
          <div className="max-w-7xl mx-auto px-8">
            {/* SECTION TITLE */}
            <h2
              className={`text-4xl font-semibold mb-16 flex items-center gap-3
        ${
          dark
            ? "text-white drop-shadow-[0_0_14px_rgba(255,255,255,0.35)]"
            : "text-black drop-shadow-[0_0_14px_rgba(0,0,0,0.35)]"
        }`}
            >
              <GraduationCap className={dark ? "text-white" : "text-black"} />
              Education
            </h2>

            <div className="space-y-10">
              {/* ================= B.TECH ================= */}
              <div
                className={`p-10 rounded-3xl backdrop-blur border ${hoverCard}
          ${
            dark
              ? "bg-white/10 border-white/20 hover:border-white/40"
              : "bg-white/70 border-black/20 hover:border-black/40"
          }`}
              >
                <h3
                  className={`text-2xl font-medium
            ${
              dark
                ? "text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]"
                : "text-black drop-shadow-[0_0_10px_rgba(0,0,0,0.3)]"
            }`}
                >
                  B.Tech – Information Technology
                </h3>

                <p className={dark ? "text-neutral-200" : "text-neutral-900"}>
                  National Institute of Technology Srinagar
                </p>

                <p
                  className={
                    dark ? "text-neutral-300 mt-2" : "text-neutral-800 mt-2"
                  }
                >
                  CGPA: 8.4
                </p>
              </div>

              {/* ================= SENIOR SECONDARY ================= */}
              <div
                className={`p-10 rounded-3xl backdrop-blur border ${hoverCard}
          ${
            dark
              ? "bg-white/10 border-white/20 hover:border-white/40"
              : "bg-white/70 border-black/20 hover:border-black/40"
          }`}
              >
                <h3
                  className={
                    dark
                      ? "text-2xl font-medium text-white"
                      : "text-2xl font-medium text-black"
                  }
                >
                  Senior Secondary (Class XII) (PCMB)
                </h3>

                <p className={dark ? "text-neutral-200" : "text-neutral-900"}>
                  Border Security Force Secondary School
                </p>

                <p
                  className={
                    dark ? "text-neutral-300 mt-2" : "text-neutral-800 mt-2"
                  }
                >
                  Percentage: 87%
                </p>
              </div>

              {/* ================= SECONDARY ================= */}
              <div
                className={`p-10 rounded-3xl backdrop-blur border ${hoverCard}
          ${
            dark
              ? "bg-white/10 border-white/20 hover:border-white/40"
              : "bg-white/70 border-black/20 hover:border-black/40"
          }`}
              >
                <h3
                  className={
                    dark
                      ? "text-2xl font-medium text-white"
                      : "text-2xl font-medium text-black"
                  }
                >
                  Secondary (Class X)
                </h3>

                <p className={dark ? "text-neutral-200" : "text-neutral-900"}>
                  Border Security Force Secondary School
                </p>

                <p
                  className={
                    dark ? "text-neutral-300 mt-2" : "text-neutral-800 mt-2"
                  }
                >
                  Percentage: 94.6%
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ================= EXPERIENCE ================= */}

        <section className="py-32">
          <div className="max-w-7xl mx-auto px-8">
            {/* SECTION TITLE */}
            <h2
              className={`text-4xl font-semibold mb-16 flex items-center gap-3
        ${
          dark
            ? "text-white drop-shadow-[0_0_14px_rgba(255,255,255,0.35)]"
            : "text-black drop-shadow-[0_0_14px_rgba(0,0,0,0.35)]"
        }`}
            >
              <Briefcase className={dark ? "text-white" : "text-black"} />
              Experience
            </h2>

            {/* EXPERIENCE CARD */}
            <div
              className={`p-10 rounded-3xl backdrop-blur border transition-all duration-300
        hover:-translate-y-2 hover:shadow-[0_25px_60px_-15px_rgba(0,0,0,0.45)]
        ${
          dark
            ? "bg-white/10 border-white/20 hover:border-white/40"
            : "bg-white/70 border-black/20 hover:border-black/40"
        }`}
            >
              <h3
                className={`text-2xl font-medium
          ${
            dark
              ? "text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]"
              : "text-black drop-shadow-[0_0_10px_rgba(0,0,0,0.3)]"
          }`}
              >
                C++ Internship — Game Development
              </h3>

              <p
                className={`mt-4 max-w-3xl leading-relaxed
          ${
            dark
              ? "text-neutral-200 drop-shadow-[0_0_6px_rgba(255,255,255,0.2)]"
              : "text-neutral-900 drop-shadow-[0_0_6px_rgba(0,0,0,0.25)]"
          }`}
              >
                Developed console-based games demonstrating strong Object
                Oriented Programming concepts, STL usage, modular coding, and
                file handling techniques.
              </p>
            </div>
          </div>
        </section>

        {/* ================= ACHIEVEMENTS ================= */}

        <section className="py-32">
          <div className="max-w-7xl mx-auto px-8">
            <h2
              className={`text-4xl font-semibold mb-16 flex items-center gap-3
        ${
          dark
            ? "text-white drop-shadow-[0_0_14px_rgba(255,255,255,0.35)]"
            : "text-black drop-shadow-[0_0_14px_rgba(0,0,0,0.35)]"
        }`}
            >
              <Trophy className={dark ? "text-white" : "text-black"} />
              Achievements
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                "Secured 15th rank in JK-CET",
                "NDA Qualified & Appeared for SSB (C/O)",
                "3,000+ followers as a content creator",
              ].map((item, i) => (
                <div
                  key={i}
                  className={`p-8 rounded-3xl backdrop-blur border transition-all duration-300
            hover:-translate-y-2 hover:shadow-[0_25px_60px_-15px_rgba(0,0,0,0.45)]
            ${
              dark
                ? "bg-white/10 border-white/20 hover:border-white/40"
                : "bg-white/70 border-black/20 hover:border-black/40"
            }`}
                >
                  <p
                    className={`text-lg
              ${
                dark
                  ? "text-neutral-200 drop-shadow-[0_0_6px_rgba(255,255,255,0.25)]"
                  : "text-neutral-900 drop-shadow-[0_0_6px_rgba(0,0,0,0.25)]"
              }`}
                  >
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= LEADERSHIP ================= */}

        <section className="py-32">
          <div className="max-w-7xl mx-auto px-8">
            <h2
              className={`text-4xl font-semibold mb-16 flex items-center gap-3
        ${
          dark
            ? "text-white drop-shadow-[0_0_14px_rgba(255,255,255,0.35)]"
            : "text-black drop-shadow-[0_0_14px_rgba(0,0,0,0.35)]"
        }`}
            >
              <Users className={dark ? "text-white" : "text-black"} />
              Leadership & Responsibility
            </h2>

            <div
              className={`p-10 rounded-3xl backdrop-blur border transition-all duration-300
        hover:-translate-y-2 hover:shadow-[0_25px_60px_-15px_rgba(0,0,0,0.45)]
        ${
          dark
            ? "bg-white/10 border-white/20 hover:border-white/40"
            : "bg-white/70 border-black/20 hover:border-black/40"
        }`}
            >
              <p
                className={`max-w-3xl leading-relaxed
          ${
            dark
              ? "text-neutral-200 drop-shadow-[0_0_6px_rgba(255,255,255,0.2)]"
              : "text-neutral-900 drop-shadow-[0_0_6px_rgba(0,0,0,0.25)]"
          }`}
              >
                Serving as the Class Representative for the IT branch, actively
                coordinating communication between faculty and students and
                ensuring smooth academic interactions.
              </p>
            </div>
          </div>
        </section>

        {/* ================= MENTORSHIP ================= */}

        <section className="py-32">
          <div className="max-w-7xl mx-auto px-8">
            <h2
              className={`text-4xl font-semibold mb-16 flex items-center gap-3
        ${
          dark
            ? "text-white drop-shadow-[0_0_14px_rgba(255,255,255,0.35)]"
            : "text-black drop-shadow-[0_0_14px_rgba(0,0,0,0.35)]"
        }`}
            >
              <BookOpen className={dark ? "text-white" : "text-black"} />
              Teaching & Mentorship
            </h2>

            <div
              className={`p-10 rounded-3xl backdrop-blur border transition-all duration-300
        hover:-translate-y-2 hover:shadow-[0_25px_60px_-15px_rgba(0,0,0,0.45)]
        ${
          dark
            ? "bg-white/10 border-white/20 hover:border-white/40"
            : "bg-white/70 border-black/20 hover:border-black/40"
        }`}
            >
              <p
                className={`max-w-3xl leading-relaxed
          ${
            dark
              ? "text-neutral-200 drop-shadow-[0_0_6px_rgba(255,255,255,0.2)]"
              : "text-neutral-900 drop-shadow-[0_0_6px_rgba(0,0,0,0.25)]"
          }`}
              >
                Mentored and guided over 25 CBSE students (Classes 10–12) in
                Science and Mathematics, focusing on concept clarity and exam
                preparation.
              </p>
            </div>
          </div>
        </section>

        {/* ================= FOOTER ================= */}
        <footer
          className={`py-20 border-t transition-colors duration-500
    ${dark ? "border-white/10" : "border-black/10"}`}
        >
          <div className="max-w-7xl mx-auto px-8 flex justify-between items-center">
            <p
              className={`text-sm tracking-wide
        ${
          dark
            ? "text-neutral-400 drop-shadow-[0_0_6px_rgba(255,255,255,0.25)]"
            : "text-neutral-800 drop-shadow-[0_0_6px_rgba(0,0,0,0.25)]"
        }`}
            >
              © 2026 Bhargav Koushal
            </p>

            <a
              href="mailto:bhargavkoushal289@gmail.com"
              aria-label="Email Bhargav"
              className={`transition transform hover:-translate-y-1
        ${
          dark
            ? "text-white hover:drop-shadow-[0_0_12px_rgba(255,255,255,0.6)]"
            : "text-black hover:drop-shadow-[0_0_12px_rgba(0,0,0,0.6)]"
        }`}
            >
              <Mail size={22} />
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
}
