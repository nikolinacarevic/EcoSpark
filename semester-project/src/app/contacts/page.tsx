import Image from 'next/image';
import Header from '../components/header/header';
import Footer from '../components/footer/footer';

export default function Main() {
  return (
    <>
      <Header />
      <p style={{ paddingTop: '200px' }}>Ovo je CONTACTS page</p>
      <Footer />
    </>
  );
}
