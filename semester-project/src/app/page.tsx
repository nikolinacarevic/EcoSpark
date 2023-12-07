import Image from 'next/image'
import Home from './components/home/home'
import Footer from './components/footer/footer'
import Header from './components/header/header'

export default function Main() {
  return (
    <>
      <Header />
      <Home />
      <Footer />
    </>
  )
}