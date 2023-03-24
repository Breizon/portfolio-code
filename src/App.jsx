import './App.css'
import About from './components/about/About'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import Navbar from './components/navbar/Navbar'
import Portfolio from './components/portfolio/Portfolio'
import Skills from './components/skill/Skills'

function App() {

  return (
    <div className="App">
      <main>
        <Header />
        <Navbar />
        <About />
        <Skills />
        <Portfolio />
        <Contact />
        <Footer />
      </main>
    </div>
  )
}

export default App
