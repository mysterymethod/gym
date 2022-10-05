import React from 'react'
import { Link } from 'react-router-dom'
import { Stack } from '@mui/material'

import Logo from '../assets/images/Logo.png'

function Navbar() {
  return (
    <Stack>
      <Link tp='/'>
        <img src={Logo} style={{
          width: '48px',
          height: '48px',
          margin: '0 20px'
        }} />
      </Link>
    </Stack>
  )
}

export default Navbar