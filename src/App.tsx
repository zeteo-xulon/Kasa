import { Routes, Route } from "react-router-dom"
import Header from "./components/Header";
import Home from './components/Home';
import Footer from './components/Footer';
import Page404 from "./components/Page404";
import About from "./components/About";
import Lodging from "./components/Lodging";


function App() {

  return (
    <div className='app'>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/lodging/:id" element={<Lodging />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
