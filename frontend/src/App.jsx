import React from 'react'
import {BrowserRouter,Navigate,Routes,Route} from 'react-router-dom';
import Home from './pages/Home'
import About from './pages/About';
import Contact from './pages/Contact';
import Course from './pages/Course';
import Navbar from './componenets/Navbar';
import Signup from './componenets/Signup';
import { Toaster } from 'react-hot-toast';

import { useAuth } from "./context/AuthProvider"

function App() {
  const [authUser, setAuthUser] = useAuth();
  console.log(authUser)
  return (
 <>
<div className='light:bg-white dark:bg-slate-900 dark:text-white'>
<BrowserRouter>

<Routes>
<Route path='/' element={<Home/>}/>
<Route
            path="/course"
            element={authUser ? <Course/> : <Navigate to="/signup" />}
          />
<Route path='/contact' element={<Contact/>}/>
<Route path='/about' element={<About/>} />
<Route path='/signup' element={<Signup/>} />
</Routes>
<Toaster />

</BrowserRouter>
</div>
 </>
  )
}

export default App