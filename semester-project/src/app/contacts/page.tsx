import Image from 'next/image';
import Header from '../components/header/header';
import Footer from '../components/footer/footer';
import Contacts from './contacts';

export default function Main() {
  return (
    <>
      <Header />
      <Contacts />
      <Footer />
    </>
  );
}


