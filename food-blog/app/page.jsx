import Hero from '@components/Hero'
import Nav from '../components/Nav'
import About from '@components/About'
import Footer from '@components/Footer'
const Home = () => {
  return (
    <section className="main">
      <Nav/>
      <Hero/>
      <About/>
      <Footer/>
    </section>
  )
}

export default Home

