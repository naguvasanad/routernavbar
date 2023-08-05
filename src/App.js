import './App.css';
import Nav from './Nav';
import Home from './Home';
import {BrowserRouter, Route, Routes } from 'react-router-dom';
import Service from './Service';
import Contact from './Contact';
import Accessories from './Accessories';

function App() {
  return (
   <BrowserRouter>
    <Nav />
    <div className='route-comp' >
    <Routes>
      <Route index path='/' Component={Home}/>
      <Route path='/Service' Component={Service}/>
      <Route path='/Contact' Component={Contact}/>
      <Route path='/Accessories' Component={Accessories}/>
    </Routes>
    </div>
   < div  className="fixed-comp">
     <h1><span>A</span>gri<span>C</span>ulture</h1>
     <p>Agriculture encompasses crop and livestock production, 
      aquaculture, fisheries and forestry for food and non-food products.
       Agriculture was the key development in the rise of sedentary human civilization,
        whereby farming of domesticated species created food surpluses that enabled people to live in cities.</p>
        <p>Agriculture encompasses crop and livestock production, 
      aquaculture, fisheries and forestry for food and non-food products.
       Agriculture was the key development in the rise of sedentary human civilization,
        whereby farming of domesticated species created food surpluses that enabled people to live in cities.</p>
    </div>
    </BrowserRouter>
  );
}

export default App;
