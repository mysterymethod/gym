import React from 'react'
import { Link } from 'react-router-dom'
import { Stack } from '@mui/material'

import Logo from '../assets/images/Logo.png'

function Navbar() {
  return (
    <Stack>
      <Link tp='/'>
        <img src={Logo} />
      </Link>
    </Stack>
  )
}

export default Navbar