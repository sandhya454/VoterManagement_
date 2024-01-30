import React from 'react'
import './Dashboard.css'
import { Outlet } from 'react-router-dom'

function Dashboard() {
  return (
    <div>
        <Outlet/>
    </div>
  )
}

export default Dashboard