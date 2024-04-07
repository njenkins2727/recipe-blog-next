import Hero from '@components/Hero'
import Nav from '../components/Nav'
import About from '@components/About'
const Home = () => {
  return (
    <section className="main">
      <Nav/>
      <Hero/>
      <About/>
    </section>
  )
}

export default Home

