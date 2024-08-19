import React from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'
import { Box } from '@mui/material'

const Layout = () => {
  return (
    <>
      <Box sx={{ backgroundColor: '#000' }}>
        <Navbar />
        <Outlet />
      </Box>
    </>
  )
}

export default Layout