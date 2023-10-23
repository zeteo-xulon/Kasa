import { Routes, Route } from "react-router-dom"
import Header from "./components/Header";
import Home from './components/Home';
import Footer from './components/Footer';
import Page404 from "./components/Page404";
import About from "./components/About";
import Lodging from "./components/Lodging";
import { BannerInt } from "./Models/entities"


function App() {
  const homeBanner:BannerInt = {image: "/src/assets/IMG_01.png", text: "Chez vous, partout et ailleurs"}
  const aboutBanner:BannerInt = {image: "/src/assets/img_unsplash 2.png", text: ""}

  return (
    <div className='app'>
      <Header />
      <Routes>
        <Route path="/" element={<Home data={homeBanner} />} />
        <Route path="/lodging/:id" element={<Lodging />} />
        <Route path="/about" element={<About data={aboutBanner} />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
