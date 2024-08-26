import Image from 'next/image';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import Products from './products';

export default function Main() {
  return (
    <>
      <Header />
      <Products />
      <Footer />
    </>
  );
}
