import { useContext } from 'react'
import { Route, Routes } from 'react-router-dom';
import { ThemeContext } from './contexts/theme'
import Header from './components/Header/Header'
import About from './components/About/About'
import Projects from './components/Projects/Projects'
import Skills from './components/Skills/Skills'
import ScrollToTop from './components/ScrollToTop/ScrollToTop'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import Music from './components/Music/Music'
import SinglePagePDFViewer from "./components/PDF/single-page";
import AllPagesPDFViewer from "./components/PDF/all-pages";
import samplePDF from './pdf/Arjun_Srivastava_Resume.pdf'
import './App.css'

const App = () => {
  const [{ themeName }] = useContext(ThemeContext)

  return (
    <div id='top' className={`${themeName} app`}>
      <Header />
      <Routes>
        <Route path="/" element={<Main />}/>  
        <Route path="/resume" element={<SinglePagePDFViewer pdf={samplePDF}/>} />
      </Routes>
      <Footer />
    </div>
  )
}

const Main = () => 
    <div>
        <main>
            <About />
            <Projects />
            <Music />
            <Skills />
            <Contact />
          </main>
          <ScrollToTop />   
    </div>

export default App
