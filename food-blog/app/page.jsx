import Hero from '@components/Hero'
import Nav from '../components/Nav'
import About from '@components/About'
import Footer from '@components/Footer'
import RecipeCard from '@components/RecipeCard'

const Home = () => {
  return (
    <section className="main">
      <Nav/>
      <Hero/>
      <About/>
      <RecipeCard
      // name=
      // desc= 
      // data={}
      // img= 
      // imgAlt=
      />
      <Footer/>
    </section>
  )
}

export default Home

