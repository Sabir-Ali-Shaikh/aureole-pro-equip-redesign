import {
  motion,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { ArrowDown, ArrowRight, CheckCircle2, ShieldCheck } from "lucide-react";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { siteConfig } from "../../../config/site";

const copyContainer = {
  hidden: {},
  visible: {
    transition: {
      delayChildren: 0.08,
      staggerChildren: 0.09,
    },
  },
};

const revealItem = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};

const headlineLine = {
  hidden: { opacity: 0, y: 42, rotateX: -10 },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: { duration: 0.72, ease: [0.22, 1, 0.36, 1] },
  },
};

const technicalTags = [
  { label: "SS 316L", position: "left-1 top-[34%] sm:left-3", delay: 0 },
  { label: "PLC AUTOMATION", position: "right-1 top-[22%] sm:right-3", delay: 0.8 },
  { label: "cGMP", position: "right-3 bottom-[20%] sm:right-6", delay: 1.5 },
];

export default function HeroSection() {
  const sectionRef = useRef(null);
  const shouldReduceMotion = useReducedMotion();

  const tiltX = useMotionValue(0);
  const tiltY = useMotionValue(0);
  const smoothTiltX = useSpring(tiltX, { stiffness: 170, damping: 24, mass: 0.7 });
  const smoothTiltY = useSpring(tiltY, { stiffness: 170, damping: 24, mass: 0.7 });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const panelY = useTransform(scrollYProgress, [0, 1], [0, 70]);
  const imageY = useTransform(scrollYProgress, [0, 1], [0, 34]);
  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, 110]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.75], [1, 0.72]);

  const handlePointerMove = (event) => {
    if (shouldReduceMotion || event.pointerType === "touch") return;

    const bounds = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width - 0.5;
    const y = (event.clientY - bounds.top) / bounds.height - 0.5;

    tiltY.set(x * 7);
    tiltX.set(y * -7);
  };

  const resetTilt = () => {
    tiltX.set(0);
    tiltY.set(0);
  };

  return (
    <section
      ref={sectionRef}
      className="relative isolate overflow-hidden bg-surface"
    >
      <motion.div
        style={{ y: shouldReduceMotion ? 0 : backgroundY }}
        className="pointer-events-none absolute inset-0 -z-30 bg-[linear-gradient(90deg,var(--border)_1px,transparent_1px),linear-gradient(var(--border)_1px,transparent_1px)] bg-[size:42px_42px] opacity-[0.18]"
      />

      <motion.div
        animate={
          shouldReduceMotion
            ? undefined
            : { x: [0, 42, 0], y: [0, -26, 0], scale: [1, 1.08, 1] }
        }
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute -right-44 -top-44 -z-20 size-[650px] rounded-full bg-aureole-accent/12 blur-3xl"
      />
      <motion.div
        animate={
          shouldReduceMotion
            ? undefined
            : { x: [0, -28, 0], y: [0, 24, 0], scale: [1, 1.05, 1] }
        }
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="pointer-events-none absolute -bottom-48 left-[24%] -z-20 size-[520px] rounded-full bg-aureole-surface blur-3xl"
      />

      <div className="container-shell grid min-h-[calc(100vh-128px)] items-center gap-12 py-14 md:py-20 lg:grid-cols-[1.02fr_.98fr] lg:gap-16 lg:py-16">
        <motion.div
          variants={copyContainer}
          initial="hidden"
          animate="visible"
          style={{ opacity: shouldReduceMotion ? 1 : contentOpacity }}
          className="relative z-10"
        >
          <motion.div
            variants={revealItem}
            className="inline-flex items-center gap-2 rounded-[10px] border border-aureole-cyan/20 bg-aureole-surface px-4 py-2 text-xs font-bold uppercase tracking-[0.15em] text-aureole-blue"
          >
            <motion.span
              animate={shouldReduceMotion ? undefined : { rotate: [0, 8, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <ShieldCheck size={15} aria-hidden="true" />
            </motion.span>
            Pharmaceutical & Process Equipment
          </motion.div>

          <motion.h1 className="mt-7 max-w-3xl text-5xl font-bold leading-[0.98] tracking-[-0.045em] text-aureole-slate lg:text-7xl">
            <span className="block overflow-hidden pb-1 [perspective:900px]">
              <motion.span variants={headlineLine} className="block origin-bottom">
                Engineering
              </motion.span>
            </span>
            <span className="block overflow-hidden pb-1 [perspective:900px]">
              <motion.span
                variants={headlineLine}
                className="block origin-bottom text-brand-gradient"
              >
                precision
              </motion.span>
            </span>
            <span className="block overflow-hidden pb-2 [perspective:900px]">
              <motion.span variants={headlineLine} className="block origin-bottom">
                into every process.
              </motion.span>
            </span>
          </motion.h1>

          <motion.p variants={revealItem} className="type-body mt-7 max-w-2xl text-muted">
            Advanced autoclaves, sterilization systems and process equipment engineered
            for pharmaceutical, healthcare, laboratory and industrial applications.
          </motion.p>

          <motion.div variants={revealItem} className="mt-8 flex flex-wrap gap-3">
            <Link to="/products" className="btn-primary group">
              Explore Products
              <ArrowRight
                size={17}
                className="ml-2 transition-transform group-hover:translate-x-1"
              />
            </Link>
            <Link to="/contact" className="btn-secondary">
              Talk to an Engineer
            </Link>
          </motion.div>

          <motion.div
            variants={revealItem}
            className="mt-9 flex flex-wrap gap-x-7 gap-y-3 border-t border-border pt-6"
          >
            {["Custom engineered solutions", "Quality-focused manufacturing", "Pan-India support"].map(
              (item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.72 + index * 0.08, duration: 0.4 }}
                  className="flex items-center gap-2 text-base text-aureole-slate/80"
                >
                  <CheckCircle2 size={16} className="text-aureole-cyan" aria-hidden="true" />
                  {item}
                </motion.div>
              ),
            )}
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94, x: 36 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          style={{ y: shouldReduceMotion ? 0 : panelY }}
          className="relative mx-auto w-full max-w-[650px] lg:mx-0 [perspective:1400px]"
        >
          <motion.div
            animate={shouldReduceMotion ? undefined : { scaleX: [0.92, 1.05, 0.92], opacity: [0.1, 0.18, 0.1] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute inset-x-[7%] bottom-[2%] h-[22%] rounded-[50%] bg-aureole-slate blur-3xl"
          />

          <motion.div
            onPointerMove={handlePointerMove}
            onPointerLeave={resetTilt}
            style={{
              rotateX: shouldReduceMotion ? 0 : smoothTiltX,
              rotateY: shouldReduceMotion ? 0 : smoothTiltY,
              transformStyle: "preserve-3d",
            }}
            className="relative overflow-hidden rounded-[var(--radius-card)] border border-border/80 bg-[linear-gradient(145deg,var(--surface),var(--aureole-soft))] p-5 shadow-[0_30px_80px_rgba(0,21,41,0.12)] sm:p-8"
          >
            <motion.div
              animate={shouldReduceMotion ? undefined : { rotate: 360 }}
              transition={{ duration: 32, repeat: Infinity, ease: "linear" }}
              className="pointer-events-none absolute -right-24 top-14 size-72 rounded-full border border-dashed border-aureole-cyan/20"
            />
            <motion.div
              animate={shouldReduceMotion ? undefined : { rotate: -360 }}
              transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
              className="pointer-events-none absolute -right-10 top-28 size-44 rounded-full border border-aureole-primary/15"
            />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_18%,var(--aureole-surface),transparent_37%)]" />

            <motion.div
              animate={shouldReduceMotion ? undefined : { x: ["-180%", "780%"] }}
              transition={{ duration: 7, repeat: Infinity, ease: "linear", repeatDelay: 2 }}
              className="pointer-events-none absolute inset-y-0 z-0 w-16 rotate-12 bg-gradient-to-r from-transparent via-white/45 to-transparent blur-md"
            />

            <div className="relative z-10 flex items-center justify-between gap-4">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-aureole-cyan">
                  Featured System
                </p>
                <p className="mt-2 text-xl font-bold text-aureole-slate">Vertical Autoclave</p>
              </div>
              <motion.div
                animate={shouldReduceMotion ? undefined : { boxShadow: ["0 0 0 rgba(1,194,251,0)", "0 0 26px rgba(1,194,251,.24)", "0 0 0 rgba(1,194,251,0)"] }}
                transition={{ duration: 3.5, repeat: Infinity }}
                className="rounded-[8px] border border-aureole-cyan/20 bg-aureole-surface px-3 py-1.5 text-xs font-bold text-aureole-blue"
              >
                APE
              </motion.div>
            </div>

            <div className="relative z-10 mt-4 flex min-h-[410px] items-center justify-center sm:min-h-[500px]">
              <motion.div
                style={{ y: shouldReduceMotion ? 0 : imageY, transformStyle: "preserve-3d" }}
                animate={shouldReduceMotion ? undefined : { rotateZ: [0, 0.45, 0, -0.45, 0] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                className="relative z-10 w-[82%] max-w-[470px]"
              >
                <motion.img
                  src={siteConfig.assets.heroProduct}
                  alt="Aureole vertical autoclave"
                  animate={shouldReduceMotion ? undefined : { y: [0, -10, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                  className="lazy-image h-auto w-full rounded-[var(--radius-standard)] object-contain mix-blend-multiply"
                />
              </motion.div>

              {technicalTags.map((tag) => (
                <motion.div
                  key={tag.label}
                  animate={shouldReduceMotion ? undefined : { y: [0, -7, 0] }}
                  transition={{
                    duration: 4.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: tag.delay,
                  }}
                  className={`absolute z-20 hidden items-center gap-2 rounded-[10px] border border-border bg-surface/88 px-3 py-2 text-xs font-bold tracking-[0.08em] text-aureole-blue shadow-lg backdrop-blur sm:flex ${tag.position}`}
                >
                  <span className="size-1.5 rounded-full bg-aureole-cyan" />
                  {tag.label}
                </motion.div>
              ))}

              <motion.div
                animate={shouldReduceMotion ? undefined : { x: [0, 5, 0], y: [0, -5, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute left-1 top-10 rounded-[var(--radius-standard)] border border-border bg-surface/90 p-3 shadow-lg backdrop-blur sm:left-4 sm:p-4"
              >
                <p className="text-xs font-bold uppercase tracking-[0.12em] text-muted">Built for</p>
                <p className="mt-1 text-xl font-bold text-aureole-slate">Critical Processes</p>
              </motion.div>

              <motion.div
                animate={shouldReduceMotion ? undefined : { y: [0, -8, 0], scale: [1, 1.025, 1] }}
                transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute bottom-7 right-1 rounded-[var(--radius-standard)] bg-brand-gradient p-4 text-white shadow-xl shadow-aureole-primary/20 sm:right-3 sm:p-5"
              >
                <p className="text-xs font-bold uppercase tracking-[0.14em] text-white/70">Engineered</p>
                <p className="mt-1 text-xl font-bold">For Precision</p>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <motion.a
        href="#products-showcase"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.5 }}
        className="absolute bottom-5 left-1/2 z-20 hidden -translate-x-1/2 flex-col items-center gap-2 text-xs font-bold uppercase tracking-[0.12em] text-muted xl:flex"
      >
        Explore
        <motion.span
          animate={shouldReduceMotion ? undefined : { y: [0, 7, 0] }}
          transition={{ duration: 1.7, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown size={17} className="text-aureole-cyan" />
        </motion.span>
      </motion.a>
    </section>
  );
}
