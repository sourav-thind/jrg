import './App.css'
import About from './Components/About'
import Contact from './Components/Contact'
import Creations from './Components/Creations'
import Hero from './Components/Hero'
import Navbar from './Components/Navbar'

function App() {

  return (
    <main className='overflow-x-hidden md:overflow-x-visible w-screen'>
      <Navbar/>
      <Hero/>
      <About/>
     <Creations/>
     <Contact/>

    </main>
  )
}

export default App
