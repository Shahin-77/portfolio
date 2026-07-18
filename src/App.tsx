/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Expertise from './components/Expertise';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { CustomCursor } from './components/CustomCursor';
import { BackToTop } from './components/BackToTop';

export default function App() {
  return (
    <div className="min-h-screen selection:bg-primary/30 selection:text-white bg-white dark:bg-[#0D0D0D] transition-colors duration-500">
      <CustomCursor />
      <BackToTop />
      <Header />
      <main>
        <Hero />
        <About />
        <Expertise />
        <Projects />
        <Experience />
        <Education />
        <Certifications />
        <Achievements />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
