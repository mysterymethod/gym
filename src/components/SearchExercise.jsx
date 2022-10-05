import { useState, useEffect } from 'react'

import { Box, Button, Stack, TextField, Typography } from '@mui/material'

function SearchExercise() {
  return (
    <Stack
      alignItems='center'
      mt='37px'
      justifyContent='center'
      p='20px'
    >
      <Typography
        fontWeight={700}
        sx={{ fontSize: { lg: '44px', sx: '30px' } }}
        mb='50px'
        textAlign='center'

      >
        Awesome Exercise You <br /> Should Know
      </Typography>

      <Box
        position='relative'
        mb='72px'
      >
        <TextField
          sx={{
            input: {
              fontWeight: '700',
              border: 'none',
              borderRadius: '4px'
            },
            width: { lg: '1170px', xs: '350px' },
            backgroundColor: '#fff',
            borderRadius: '40px'
          }}
          height='76px'
          value=''
          onChange={(e) => { }}
          placeholder='Search Exercise'
          type='text'
        />
      </Box>

    </Stack>
  )
}

export default SearchExercise