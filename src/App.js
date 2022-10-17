// import logo from './logo.svg';
import './App.css';
import React from "react";
// import {One} from "./first/one/One";
// import {Two} from "./first/two/Two";
// import {Count} from "./count/Count";
import {Home} from "./pages/home/Home";
import {User} from "./pages/home/User";
import { Menu } from "./pages/home/Menu";
import 'bootstrap/dist/css/bootstrap.min.css';

import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";




function App() {
  return (


    <BrowserRouter> 
      
      <nav>
        <Link to="/home" >Home</Link>{' '}
        <Link to="/user" >User</Link>{' '}
        <Link to="/menu" >Menu</Link>
       </nav>
       
       <div className='container' >
       <Routes>
          <Route path="/home" element={<Home/>}  />
          <Route path="/user" element={<User/>}  />
          <Route path="/menu" element={<Menu/>}  /> 
       </Routes>
       </div>
   </BrowserRouter> 
  

 );
}



export default App;


    
 

