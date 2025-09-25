import './App.css'
import { Footer } from './components/layout/Footer/Footer';
import { Header } from './components/layout/Header/Header'
import './index.css';

function App() {

  return (
    <>
      <Header/>
      <main>
        <div id="home" className="h-screen bg-gray-100 dark:bg-slate-800">
          <h1 className="text-4xl text-center pt-40">Contenido de la Página</h1>
        </div>
      </main>
      <Footer />
    </>
  )
}

export default App
