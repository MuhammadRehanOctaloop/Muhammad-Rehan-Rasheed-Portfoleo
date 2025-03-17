import Hero from "./components/Hero"
import NevBar from "./components/Nevbar"
import About from "./components/About"
import Technologies from "./components/Technologies"
import Experience from "./components/Experience"
import Projects from "./components/Projects"
import Contact from "./components/Contact"



const App = () => {
  return (
    <div className="overflow-hidden w-full px-5 text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900 bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">
      <div className="container mx-auto">
        <NevBar />
        <Hero />
        <About />
        <Technologies />
        <Experience />
        <Projects />
        <Contact />
      </div>
    </div>
  )
}

export default App