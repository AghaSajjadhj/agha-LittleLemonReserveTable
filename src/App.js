import React from "react";
 import { Link,Route,Routes } from "react-router-dom";
import Navbar from "./navbar/Navbar";
 import Main from "./components/main/Main";
import Form from "./components/form/Form";
import About from "./pages/About";
import Confirmed from "./components/confirmed/Confirmed";
import Bottom from "./components/bottom/Bottom";




function App() {
  return (
    <>
  <Navbar/>
  <Main/>

  
    <Routes>
   
   <Route path="/about" element={<About/>}/>
   <Route path="/form" element={<Form/>}/>
   <Route path="/home" element={<Main/>}/>
   <Route path="/confirmed" element={<Confirmed/>}/>

    </Routes>
 
    <Bottom/>
 

 
  
   </>   
  );
}

export default App;
