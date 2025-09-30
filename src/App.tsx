import './App.css'
import { Footer, Header } from './components/layout';
import { Features, Hero } from './components/sections';
import { About } from './components/sections/About';
import { GymRegister } from './components/sections/GymRegister';
import { SocialMedia } from './components/sections/SocialMedia';
import { Testimonials } from './components/sections/Testimonials';
import './index.css';

function App() {

  return (
    <>
      <Header />
      <main className="min-h-screen space-y-6 mt-20">
        <Hero />
        <Features />
        <About />
        <Testimonials />
        <GymRegister />
        <SocialMedia />
      </main>
      <Footer />
    </>
  )
}

export default App
