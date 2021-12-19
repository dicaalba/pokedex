import React from 'react'
import { Routes, Route } from "react-router-dom";
import Home from './Home'
import MyTeam from './MyTeam'

export default function Layout() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="MyTeam" element={<MyTeam />} />
    </Routes>
  )
}
