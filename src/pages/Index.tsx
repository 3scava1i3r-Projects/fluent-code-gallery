
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import Articles from '@/components/Articles';
import Work from '@/components/Work';
import Honors from '@/components/Honors';

const Index = () => {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <About />
        <Projects />
        <Articles />
        <Work />
        <Honors />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
