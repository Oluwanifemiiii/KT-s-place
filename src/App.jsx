import { useEffect, useRef, useState } from 'react';
import Nav from './components/Nav.jsx';
import Hero from './components/Hero.jsx';
import TrustBar from './components/TrustBar.jsx';
import Intro from './components/Intro.jsx';
import Need from './components/Need.jsx';
import MissionVision from './components/MissionVision.jsx';
import Services from './components/Services.jsx';
import Values from './components/Values.jsx';
import Outcomes from './components/Outcomes.jsx';
import Founder from './components/Founder.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('vis');
        });
      },
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
    );

    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));

    document.querySelectorAll('.stagger').forEach((grid) => {
      Array.from(grid.children).forEach((child, i) => {
        child.classList.add('reveal');
        child.style.transitionDelay = i * 0.09 + 's';
        observer.observe(child);
      });
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Nav />
      <Hero />
      <TrustBar />
      <Intro />
      <Need />
      <MissionVision />
      <Services />
      <Values />
      <Outcomes />
      <Founder />
      <Contact />
      <Footer />
    </>
  );
}
