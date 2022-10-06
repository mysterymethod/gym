import React from 'react'

import { Stack, Typography } from '@mui/material'

import Icon from '../assets/icons/gym.png'

function BodyPart() {
  return (
    <Stack>
      <img 
        src={Icon} 
        alt='dumbbell' 
        style={{
          width: '40px',
          height: '40px'
        }}
      />
    </Stack>
  )
}

export default BodyPart