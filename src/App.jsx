import "./App.css";
import About from "./components/About";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills"
import  Project from "./components/Project"
import Myjourney from "./components/Myjourney";
import Contact from "./components/Contact";


function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About/>
      <Skills/>
      <Myjourney/>
      <Project />
      <Contact/>
    </>
  );
}

export default App;
