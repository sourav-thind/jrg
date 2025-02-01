import './App.css'
import About from './Components/About'
import Gallary from './Components/Gallary'
import Hero from './Components/Hero'
import Navbar from './Components/Navbar'

function App() {

  return (
    <main>
      <Navbar/>
      <Hero/>
      <About/>
      <Gallary/>
      {/* <Highlight/>  */}

    </main>
  )
}

export default App
