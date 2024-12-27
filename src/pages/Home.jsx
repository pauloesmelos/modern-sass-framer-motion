import React from 'react';
import Faq from '../components/faq/Faq';
import Footer from '../components/footer/Footer';
import Hero from '../components/hero/Hero';
import Insights from '../components/insights/Insights';
import Navbar from '../components/navbar/Navbar';
import Price from '../components/price/Price';
import Stats from '../components/stats/Stats';
import Testimonials from '../components/testimonials/Testimonials';

const Home = () => {
  return (
    <div className="bg-[url('../assets/bg-lunar.svg')] bg-cover bg-center bg-no-repeat">
      <Navbar />
      <Hero />
      <Insights />
      <Stats />
      <Price />
      <Testimonials />
      <Faq />
      <Footer />
    </div>
  )
}

export default Home;