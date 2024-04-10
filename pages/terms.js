import { useState, useEffect } from 'react';
import Head from 'next/head';
import Preloader from 'fitness/components/sections/Preloader';
import Header from 'fitness/components/sections/Header';
import Terms from 'fitness/components/sections/Terms';
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
      <Head>
        <title>Terms of Service</title>
      </Head>
      <>
        <Preloader isLoading={isLoading} />
        <Header />
        <Terms />
        <Footer />
      </>
    </>
  );
}