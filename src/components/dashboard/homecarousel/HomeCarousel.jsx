import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import { Box, Typography } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {HEADER} from './../../../constant';

const useStyles = makeStyles((theme) => ({
    root: {
        minHeight: "50",
        position: 'absolute',
        top: 90,
        left: 'calc(25vw - 300px)',
        width: 290,
      },
      item: {
        padding: theme.spacing(1),
        display: "flex",
        margin: '0 10px',
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: '#3FBDED',
        border: '2px inset #069cd5',
        color: '#ffffff',
        borderRadius: '4px',
        boxShadow: '2px 6px 3px 2px rgba(150,150,150,0.6)',
        transition: 'color 0.25s ease-in',
        fontWeight: '500',
        letterSpacing: '1px', 
        '&:hover': {
            backgroundColor: '#069cd5',
            color: '#ffffff',
            fontWeight: '600',
        }
      },
}));

export const HomeCarousel = (props) =>  {
    const classes = useStyles();
  
    return (
        <Carousel 
            autoPlay={true}
            className={classes.root}
            showIndicators={false}
            showStatus={false}
            infiniteLoop={true}
            showThumbs={false}
            showArrows ={false}
            stopOnHover={true}  
            >
            {
                HEADER.HERO_CAROUSAL.map( (item, i) => <Item classCss={classes.item} key={i} item={item} /> )
            }
        </Carousel>
    )
}

const Item = React.memo(({classCss, item}) => {
    return (
        <Box className={classCss} sx={{ margin:'0 auto', maxWidth: 320 }}>
            <Typography variant='caption'>{item}</Typography>
        </Box>
    )
});