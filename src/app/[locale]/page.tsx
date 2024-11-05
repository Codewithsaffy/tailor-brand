import HeroSection from '@/components/sections/Hero';
import AboutUs from '@/components/sections/AboutUs';
import Services from '@/components/sections/Services';
import Testinomial from '@/components/sections/Testinomial';

export default function HomePage() {
  

  return (
    <main className='overflow-hidden'>
      <HeroSection/>
      <AboutUs/>
      <Services/>
      <Testinomial/>
    </main>
  );
}
