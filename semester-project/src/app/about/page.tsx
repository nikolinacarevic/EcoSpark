import Image from 'next/image';
import Header from '../components/header/header';
import Footer from '../components/footer/footer';
import About from './about';

export default function Main() {
  return (
    <>
      <Header />
      <About />
      <Footer />
    </>
  );
}
