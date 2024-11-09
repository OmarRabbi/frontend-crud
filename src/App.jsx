import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./pages/Home.jsx";
import Create from "./pages/Create.jsx";
import Update from "./pages/Update.jsx";
import Details from "./pages/Details.jsx";
import './App.css';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/create" element={<Create/>}/>
          <Route path="/update/:id" element={<Update/>}/>
          <Route path="/details/:id" element={<Details/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
