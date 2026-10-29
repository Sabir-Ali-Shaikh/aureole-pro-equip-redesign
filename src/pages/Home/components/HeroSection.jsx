import { motion, useMotionValue, useReducedMotion, useScroll, useSpring, useTransform } from 'framer-motion';
import { ArrowDownRight, ArrowRight, Pause, Play } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import './hero.css';

const promises = ['Custom engineered solutions', 'Quality-focused manufacturing', 'Pan-India support'];
const particles = Array.from({ length: 24 }, (_, i) => ({ left: `${12 + (i * 37 % 80)}%`, top: `${8 + (i * 23 % 82)}%`, animationDelay: `${-(i % 7)}s`, animationDuration: `${5 + i % 5}s` }));

export default function HeroSection() {
  const sectionRef = useRef(null);
  const reducedMotion = useReducedMotion();
  const [paused, setPaused] = useState(false);
  const [desktop, setDesktop] = useState(false);
  useEffect(() => {
    const query = window.matchMedia('(min-width: 1024px) and (pointer: fine)');
    const update = () => setDesktop(query.matches);
    update();
    query.addEventListener('change', update);
    return () => query.removeEventListener('change', update);
  }, []);
  const moving = !reducedMotion && !paused;
  const parallax = moving && desktop;
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const x = useSpring(pointerX, { stiffness: 65, damping: 22 });
  const y = useSpring(pointerY, { stiffness: 65, damping: 22 });
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start start', 'end start'] });
  const productY = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const copyY = useTransform(scrollYProgress, [0, 1], [0, -65]);
  const wordY = useTransform(scrollYProgress, [0, 1], [0, 180]);
  const reveal = (delay = 0) => ({ initial: reducedMotion ? false : { opacity: 0, y: 28 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.85, delay, ease: [0.22, 1, 0.36, 1] } });
  function trackPointer(event) {
    if (!parallax || event.pointerType === 'touch') return;
    const rect = event.currentTarget.getBoundingClientRect();
    pointerX.set(((event.clientX - rect.left) / rect.width - 0.5) * 24);
    pointerY.set(((event.clientY - rect.top) / rect.height - 0.5) * 18);
  }
  return (
    <section ref={sectionRef} className={`cinematic-hero ${moving ? '' : 'hero-motion-paused'}`} aria-labelledby="hero-title" onPointerMove={trackPointer} onPointerLeave={() => { pointerX.set(0); pointerY.set(0); }}>
      <div className="hero-grid" aria-hidden="true" />
      <motion.div className="hero-background-word" aria-hidden="true" style={{ y: parallax ? wordY : 0 }}>PRECISION</motion.div>
      <div className="container-shell hero-shell">
        <motion.div className="hero-intro" {...reveal()}><span><i aria-hidden="true" /> Pharmaceutical &amp; Process Equipment</span><span className="hero-edition">AUREOLE / ENGINEERED IN INDIA</span></motion.div>
        <div className="hero-composition">
          <motion.div className="hero-copy" style={{ y: parallax ? copyY : 0 }}>
            <h1 id="hero-title" className="hero-title">
              <span className="hero-line"><motion.span {...reveal(0.08)}>Engineering</motion.span></span>
              <span className="hero-line hero-title-accent"><motion.span {...reveal(0.18)}>precision</motion.span></span>
              <span className="hero-line hero-title-last"><motion.span {...reveal(0.28)}>into every process.</motion.span></span>
            </h1>
            <motion.p className="hero-description" {...reveal(0.38)}>Advanced autoclaves, sterilization systems and process equipment engineered for pharmaceutical, healthcare, laboratory and industrial applications.</motion.p>
            <motion.div className="hero-actions" {...reveal(0.48)}>
              <Link to="/products" className="hero-button hero-button-primary">Explore Products <ArrowRight size={19} aria-hidden="true" /></Link>
              <Link to="/contact" className="hero-button hero-button-secondary">Talk to an Engineer <ArrowRight size={19} aria-hidden="true" /></Link>
            </motion.div>
          </motion.div>
          <motion.div className="hero-equipment" style={{ y: parallax ? productY : 0 }}>
            <div className="hero-orbit hero-orbit-outer" aria-hidden="true" /><div className="hero-orbit hero-orbit-inner" aria-hidden="true" /><div className="hero-orbit-cross" aria-hidden="true" />
            <div className="hero-particles" aria-hidden="true">{particles.map((particle, i) => <i key={i} style={particle} />)}</div>
            <div className="hero-system-index" aria-hidden="true">01 <span>/ FEATURED SYSTEM</span></div>
            <motion.div className="hero-product-float" style={{ x: parallax ? x : 0, y: parallax ? y : 0 }}>
              <div className="hero-product-crop"><img src={`${import.meta.env.BASE_URL}images/hero/vertical-autoclave.jpg`} alt="Aureole vertical autoclave with stainless steel enclosure and control panel" width="500" height="500" fetchPriority="high" decoding="async" /></div>
            </motion.div>
            <div className="hero-product-plinth" aria-hidden="true" />
            <div className="hero-equipment-label"><span>STERILIZATION SYSTEMS</span><p>Vertical Autoclave</p><span className="hero-equipment-note">Built for critical processes</span></div>
            <span className="hero-coordinate" aria-hidden="true">APE — 01 / SS</span>
          </motion.div>
        </div>
        <motion.div className="hero-bottom" {...reveal(0.6)}>
          <ul className="hero-promises">{promises.map((promise, i) => <li key={promise}><span aria-hidden="true">0{i + 1}</span>{promise}</li>)}</ul>
          <div className="hero-bottom-controls">
            {!reducedMotion && <button type="button" className="hero-motion-control" aria-label={paused ? 'Resume hero animation' : 'Pause hero animation'} aria-pressed={paused} onClick={() => setPaused(value => !value)}>{paused ? <Play size={15} /> : <Pause size={15} />}</button>}
            <a href="#products-showcase" className="hero-scroll">Explore <ArrowDownRight size={22} aria-hidden="true" /></a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
