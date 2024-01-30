import { useState } from 'react'
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import './App.css'
import Login from './assets/Components/Login/Login'
import Dashboard from './assets/Components/MainPage/Dashboard/Dashboard'
import Users from './assets/Components/MainPage/Users/Users'
import Booths from './assets/Components/MainPage/Booths/Booths'
import Reports from './assets/Components/MainPage/Reports.jsx/Reports'
<<<<<<< HEAD
import BoothList from './assets/Components/MainPage/Booths/BoothList'
=======
import Page from './assets/Components/MainPage/Page/page'
>>>>>>> 910bac8f12363d7ce8e28749342062ced92f8d72



function App() {

  

  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='dashboard' element={<Dashboard/>}>
          <Route path='users' element={<Users/>}/>
          <Route path='booths' element={<Booths/>}/>
           <Route path='boothlist' element={<BoothList/>}/>         
          <Route path='reports' element={<Reports/>}/>
          <Route path='page' element={<Page/>}/>
        </Route>
          
       
      </Routes>
    </Router>
      
    </>
  )
}

export default App
