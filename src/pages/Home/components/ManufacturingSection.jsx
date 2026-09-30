import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { ArrowRight, MapPin } from "lucide-react";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { siteConfig } from "../../../config/site";

const processSteps = [
  { number: "01", title: "Design", detail: "Requirement-led engineering" },
  { number: "02", title: "Fabrication", detail: "Disciplined manufacturing" },
  { number: "03", title: "Automation", detail: "Controls & integration" },
  { number: "04", title: "Testing", detail: "Verification before handover" },
];

export default function ManufacturingSection() {
  const sectionRef = useRef(null);
  const shouldReduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [1.08, 1]);
  const imageY = useTransform(scrollYProgress, [0, 1], [-24, 24]);
  const lineScale = useTransform(scrollYProgress, [0.2, 0.75], [0, 1]);

  return (
    <section
      ref={sectionRef}
      className="lazy-section relative isolate overflow-hidden bg-aureole-slate text-white"
      id="manufacturing"
    >
      <motion.img
        src={siteConfig.assets.manufacturing}
        alt="Aureole industrial manufacturing environment"
        loading="lazy"
        style={{
          scale: shouldReduceMotion ? 1 : imageScale,
          y: shouldReduceMotion ? 0 : imageY,
        }}
        className="lazy-image absolute inset-0 -z-30 h-[110%] w-full object-cover"
      />
      <div className="absolute inset-0 -z-20 bg-[linear-gradient(90deg,rgba(0,21,41,0.96)_0%,rgba(0,21,41,0.88)_38%,rgba(0,21,41,0.55)_72%,rgba(0,21,41,0.76)_100%)]" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_82%_18%,rgba(1,194,251,0.18),transparent_30%)]" />

      <div className="container-shell flex min-h-[760px] flex-col justify-between py-20 sm:py-24 lg:min-h-[820px] lg:py-28">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-3xl"
          >
            <span className="eyebrow">MANUFACTURING & INFRASTRUCTURE</span>
            <h2 className="type-title mt-4 max-w-3xl text-white sm:max-w-4xl">
              Designed. Manufactured. Tested. Delivered.
            </h2>
            <p className="type-body mt-6 max-w-2xl text-white/70">
              Aureole brings engineering, fabrication, automation and testing into one connected equipment-development process—helping translate process requirements into dependable systems ready for real operating environments.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="inline-flex min-h-12 items-center justify-center rounded-[var(--radius-button)] bg-white px-5 font-bold text-aureole-deep transition hover:bg-aureole-surface hover:text-aureole-blue"
              >
                Discuss Your Requirement
                <ArrowRight size={18} className="ml-2" />
              </Link>
              <a
                href={siteConfig.links.catalogue}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-12 items-center justify-center rounded-[var(--radius-button)] border border-white/20 bg-white/5 px-5 font-bold text-white backdrop-blur transition hover:border-aureole-accent/60 hover:bg-white/10"
              >
                View Catalogue
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="flex max-w-sm items-start gap-3 border-l border-aureole-accent/55 pl-4 lg:mt-2"
          >
            <MapPin size={20} className="mt-0.5 shrink-0 text-aureole-accent" />
            <div>
              <p className="type-meta font-bold text-aureole-accent">Manufacturing Base</p>
              <p className="mt-2 text-base font-semibold leading-6 text-white/85">
                Malegaon MIDC, Sinnar, Nashik, Maharashtra
              </p>
            </div>
          </motion.div>
        </div>

        <div className="mt-24 lg:mt-32">
          <div className="relative">
            <div className="absolute left-0 right-0 top-[31px] hidden h-px bg-white/16 md:block" />
            <motion.div
              style={{ scaleX: shouldReduceMotion ? 1 : lineScale, transformOrigin: "left" }}
              className="absolute left-0 right-0 top-[31px] hidden h-px bg-brand-gradient md:block"
            />

            <div className="grid gap-0 border-t border-white/16 md:grid-cols-4 md:border-t-0">
              {processSteps.map((step, index) => (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.45, delay: index * 0.08 }}
                  className="relative border-b border-white/16 py-6 md:border-b-0 md:border-r md:px-6 md:py-0 md:first:pl-0 md:last:border-r-0 md:last:pr-0"
                >
                  <div className="relative z-10 flex items-center gap-4 md:block">
                    <span className="grid size-16 shrink-0 place-items-center rounded-full border border-aureole-accent/45 bg-aureole-slate/80 font-display text-2xl tracking-wider text-aureole-accent backdrop-blur">
                      {step.number}
                    </span>
                    <div className="md:mt-7">
                      <h3 className="text-xl font-bold text-white">{step.title}</h3>
                      <p className="mt-2 text-sm leading-6 text-white/58">{step.detail}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
