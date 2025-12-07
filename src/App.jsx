import React from 'react'
import Login from './Components/Auth/Login'
import { Route, Routes } from 'react-router-dom'
import EmployeeDashboard from './Components/Dashboard/EmployeeDashboard'
import LocomotiveScroll from 'locomotive-scroll';
import AdminDashboard from './Components/Dashboard/AdminDashboard';

const App = () => {
  const locomotiveScroll = new LocomotiveScroll();

  return (
    <div>
      <Routes>
      <Route path="/Login" element={<Login />} />
      <Route path="/EmployeeDashboard" element={<EmployeeDashboard />} />
      <Route path="/" element={<AdminDashboard />} />

      </Routes>
     
      
    </div>
  )
}

export default App
