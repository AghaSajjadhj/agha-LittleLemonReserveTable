import React from "react";
 import { Link,Route,Routes } from "react-router-dom";
// import Navbar from "./navbar/Navbar";
//  import Main from "./components/main/Main";
import Form from "./components/form/Form";
import About from "./pages/About";



function App() {
  return (
    <>
  
    <Routes>
   
   <Route path="/about" element={<About/>}/>
   <Route path="/form" element={<Form/>}/>

    </Routes>
    
    

 
  
   </>   
  );
}

export default App;
