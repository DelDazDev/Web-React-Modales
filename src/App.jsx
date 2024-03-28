import './App.css'
import {HashRouter, Routes, Route} from "react-router-dom";
import Collections from "./pages/Collections";
import Men from "./pages/Men";
import Women from "./pages/Women";
import About from "./pages/About";
import Contact from "./pages/Contact";


function App() {

  return (
    <HashRouter>
      <Routes>
        <Route path='/' element={<Collections />}/>
        <Route path='/men' element={<Men />}/>
        <Route path='/women' element={<Women />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/contact' element={<Contact />}/>
      </Routes>
    </HashRouter>
  )
}

export default App
