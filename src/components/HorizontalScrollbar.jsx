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
            <BodyPart 
              item={item} 
              bodyPart={bodyPart}
              setBodyPart={setBodyPart}
            />
          </Box>
        ))
      }
    </>
  )
}

export default HorizontalScrollbar