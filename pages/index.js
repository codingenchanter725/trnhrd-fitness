import { useState, useEffect } from 'react';
import Preloader from 'fitness/components/sections/Preloader';
import Header from 'fitness/components/sections/Header';
import MainBanner from 'fitness/components/sections/MainBanner';
import Explanation from 'fitness/components/sections/Explanation';
import FitnessToLive from 'fitness/components/sections/FitnessToLive';
import PersonalTraining from 'fitness/components/sections/PersonalTraining';
import Testimonial from 'fitness/components/sections/Testimonial';
import Footer from 'fitness/components/sections/Footer';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
  const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Preloader isLoading={isLoading} />
      <Header />
      <MainBanner />
      <Explanation />
      <FitnessToLive />
      <PersonalTraining />
      <Testimonial />
      <Footer />
    </>
  );
}