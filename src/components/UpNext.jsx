import styled from '@emotion/styled'
import { Box, Typography } from '@mui/material'
import React from 'react'

const Component = styled(Box)`
  width: 40%;
`

const Poster = styled('img')({
  width: 88
})

const UpNext = ({movies}) => {
  return (
   <Component>
     <Typography>
        {
          movies.slice(0, 3).map(movie =>(
            <Box>
              <Poster src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt="poster" />
              <Typography>{movie.original_title}</Typography>
            </Box>
          ))
        }
     </Typography>
     {
        
     }
   </Component> 
  )
}

export default UpNext