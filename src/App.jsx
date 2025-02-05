import './App.css'
import About from './Components/About'
import Creations from './Components/Creations'
import Hero from './Components/Hero'
import Navbar from './Components/Navbar'

function App() {

  return (
    <main className='overflow-x-hidden'>
      <Navbar/>
      <Hero/>
      <About/>
     <Creations/>

    </main>
  )
}

export default App
