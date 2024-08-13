import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import About from './Components/About'
import Tech from './Components/Tech'
import Work from './Components/Work'
import Contect from './Components/Contect'
import Services from './Components/Services'
function App() {
  const [count, setCount] = useState(0)

  return (
  
      <div className={('container mx-auto ')}>
    <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection-cyan-900">
      <div className='fixed top-0 -z-10 h-full w-full'>
      <div class="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      
      </div >
   
      <div className='container mx-auto px-4'>
      <Navbar/>
      <Hero/>
      <About/>
      <Tech/>
      <Services/>
      <Work/>
      <Contect/>
      </div>
    </div></div>
  )
}

export default App
