// app/page.tsx
import Navbar from '@/components/layout/Navbar';
import Hero from '@/components/landing/Hero';
import MissionActions from '@/components/landing/MissionActions';
import Branches from '@/components/landing/Branches';
import AboutUs from '@/components/landing/AboutUs';
import WhyChooseUs from '@/components/landing/WhyChooseUs';
import Contact from '@/components/landing/Contact';
import Footer from '@/components/layout/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <AboutUs />
      <MissionActions />
      <Branches />
      <WhyChooseUs />
      <Contact />
      <Footer />
    </main>
  );
}
