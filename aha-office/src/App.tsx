import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/sections/Hero';
import { StatsBar } from './components/sections/StatsBar';
import { About } from './components/sections/About';
import { TagAffiliation } from './components/sections/TagAffiliation';
import { Services } from './components/sections/Services';
import { Sectors } from './components/sections/Sectors';
import { WhyUs } from './components/sections/WhyUs';
import { Contact } from './components/sections/Contact';

function App() {
  return (
    <div className="font-sans min-h-screen bg-[#0D0D0D] text-white selection:bg-[#C4A35A]/30">
      <Navbar />
      <main>
        <Hero />
        <StatsBar />
        <About />
        <TagAffiliation />
        <Services />
        <Sectors />
        <WhyUs />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
