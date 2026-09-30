import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { MapPin } from "lucide-react";
import { useRef } from "react";
import { siteConfig } from "../../../config/site";

const workflow = ["Requirement", "Engineering", "Manufacturing", "Testing"];

export default function InfrastructureSection() {
  const sectionRef = useRef(null);
  const shouldReduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], [-28, 28]);

  return (
    <section
      ref={sectionRef}
      className="lazy-section relative isolate overflow-hidden bg-aureole-slate text-white"
    >
      <motion.img
        src={siteConfig.assets.manufacturing}
        alt="Aureole manufacturing base"
        loading="lazy"
        style={{ y: shouldReduceMotion ? 0 : imageY }}
        className="absolute inset-0 -z-30 h-[112%] w-full object-cover"
      />
      <div className="absolute inset-0 -z-20 bg-[linear-gradient(90deg,rgba(0,21,41,.97),rgba(0,21,41,.9)_46%,rgba(0,21,41,.62))]" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_82%_18%,rgba(1,194,251,.18),transparent_30%)]" />

      <div className="container-shell py-20 sm:py-28">
        <div className="grid gap-12 lg:grid-cols-[1.05fr_.95fr] lg:items-end lg:gap-20">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.55 }}
          >
            <span className="eyebrow">INFRASTRUCTURE</span>
            <h2 className="type-title mt-4 max-w-3xl text-white">
              A manufacturing base built around connected engineering execution.
            </h2>
            <p className="type-body mt-6 max-w-2xl text-white/68">
              Aureole's current registered office and factory are located at Malegaon MIDC in Sinnar, Nashik. The operating model brings requirement understanding, engineering, manufacturing and testing into one connected equipment-development flow.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5, delay: 0.08 }}
            className="border-l border-aureole-accent/45 pl-5"
          >
            <MapPin size={21} className="text-aureole-accent" />
            <p className="type-meta mt-4 font-bold text-aureole-accent">REGISTERED OFFICE & FACTORY</p>
            <p className="mt-3 max-w-md text-lg font-semibold leading-8 text-white/86">
              Plot no. B-33, Malegaon MIDC, Sinnar, Dist. Nashik, Maharashtra, India.
            </p>
          </motion.div>
        </div>

        <div className="mt-20 grid gap-0 border-y border-white/14 md:grid-cols-4">
          {workflow.map((item, index) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.45 }}
              transition={{ duration: 0.42, delay: index * 0.07 }}
              className="border-b border-white/14 py-6 md:border-b-0 md:border-r md:px-6 md:last:border-r-0"
            >
              <p className="font-display text-4xl leading-none tracking-wider text-aureole-accent">
                {String(index + 1).padStart(2, "0")}
              </p>
              <p className="mt-4 text-xl font-bold text-white">{item}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
