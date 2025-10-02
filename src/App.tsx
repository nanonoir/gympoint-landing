import './App.css'
import { Footer, Header, Main } from './components/layout';
import { Features, Hero, About, Testimonials, GymRegister, SocialMedia, Contact } from './components/sections';
import './index.css';

function App() {

  return (
    <>
      <Header />
      <Main>
        <Hero />
        <Features />
        <About />
        <Testimonials />
        <GymRegister />
        <SocialMedia />
        <Contact />
      </Main>
      <Footer />
    </>
  )
}

export default App
