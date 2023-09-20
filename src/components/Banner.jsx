import { Box, styled } from '@mui/material';
import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';


const StyleBanner = styled('img')({
    width:'100%'
})
// Doing destructuring at props area itself.
const Banner = ({movies}) => {

    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 1
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 1
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 1
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

  return (
    <Box  style={{width:"65%"}}>
        <Carousel
            responsive={responsive}
            swipeable={false}
            draggable={false}
            autoPlay={true}
            infinite={true}
            autoPlaySpeed={3000}
            keyBoardControl={true}
        >
            {
                movies.map(movie =>(
                        <StyleBanner src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`} alt='movie-banner'/>    
                ))
            }
        </Carousel>
    </Box>
  )
}

export default Banner