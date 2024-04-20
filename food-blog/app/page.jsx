import Hero from '@components/Hero'
import Nav from '../components/Nav'
import About from '@components/About'
import Footer from '@components/Footer'
import Feed from '../components/Feed'

const Home = () => {
  return (
    <section className="main">
      <Nav/>
      <Hero/>
      <About/>
      <Feed/>
      <Footer/>
    </section>
  )
}

export default Home

