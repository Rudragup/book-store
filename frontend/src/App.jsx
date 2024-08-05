import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './pages/Home'
import About from './pages/About';
import Contact from './pages/Contact';
import Course from './pages/Course';
import Navbar from './componenets/Navbar';
import Signup from './componenets/Signup';

function App() {
  return (
 <>
<div className='dark:bg-slate-900 dark:text-white'>
<BrowserRouter>
<Routes>
<Route path='/' element={<Home/>}/>
<Route path='/course' element={<Course/>}/>
<Route path='/contact' element={<Contact/>}/>
<Route path='/about' element={<About/>} />
<Route path='/signup' element={<Signup/>} />
</Routes>
</BrowserRouter>
</div>
 </>
  )
}

export default App