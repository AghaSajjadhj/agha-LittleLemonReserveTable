import React from "react";
 import { Link,Route,Routes } from "react-router-dom";
import Navbar from "./navbar/Navbar";
 import Main from "./components/main/Main";
import Form from "./components/form/Form";
import About from "./pages/About";
import Confirmed from "./components/confirmed/Confirmed";


function App() {
  return (
    <>
  <Navbar/>

  
    <Routes>
   
   <Route path="/about" element={<About/>}/>
   <Route path="/form" element={<Form/>}/>
   <Route path="/home" element={<Main/>}/>
   <Route path="/confirmed" element={<Confirmed/>}/>

    </Routes>
    
    

 
  
   </>   
  );
}

export default App;
