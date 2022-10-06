import React from 'react'

import { Box } from '@mui/material'

function HorizontalScrollbar({data}) {
  return (
    <>
      {
        data.map((item, index) => (
          <Box
            key={item.id || item}
            itemId={item.id || item}
            title={item.id || item}
            m='0 40px'
          >
            {item.id || item}
          </Box>
        ))
      }
    </>
  )
}

export default HorizontalScrollbar