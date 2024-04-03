import { Route, Routes } from "react-router-dom"
import About from "./Component/About"
import Contactus from "./Component/Contactus"
import Footer from "./Component/Footer"
import Header from "./Component/Header"
import Navbar from "./Component/Navbar"
import OurSkills from "./Component/OurSkills"
import ScrollToTopButton from "./Component/ScrollToTopButton"
import Services from "./Component/Services"
import Skills from "./Component/Skills"
// import CreateFunctionality from "./Components/Createfuntionlity"

const App = () => {
  return (
    <>
      <ScrollToTopButton />
      <Navbar />
      <Header />
      <About />
      {/* <OurSkills /> */}
      <Skills />
      <Services />
      <Contactus />
      <Footer />
      {/* <CreateFunctionality /> */}
    </>
  )
}

export default App
