import React from 'react'
import Navbar from '../Navbar/Navbar'
import { Outlet, ScrollRestoration } from 'react-router-dom'
import Footer from '../Footer/Footer'

export default function MainLayout() {
  return (
    <div>
        <Navbar />
        <ScrollRestoration />
        <Outlet />
        <Footer />
    </div>
  )
}
