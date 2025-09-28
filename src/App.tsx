import './App.css'
import { Footer, Header } from './components/layout';
import { Features, Hero } from './components/sections';
import './index.css';

function App() {

  return (
    <>
      <Header />
      <main className="min-h-screen space-y-6 mt-20">
        <Hero />
        <Features />
      </main>
      <Footer />
    </>
  )
}

export default App
