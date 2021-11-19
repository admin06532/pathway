import React from 'react';
import { Box, Typography, Grid, IconButton } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";
import { Carousel } from '@trendyol-js/react-carousel';
import {KeyboardArrowRight, KeyboardArrowLeft} from '@material-ui/icons';

import KeyboardArrowRightOutlinedIcon from '@material-ui/icons/KeyboardArrowRightOutlined';
import KeyboardArrowLeftOutlinedIcon from '@material-ui/icons/ArrowBackIosOutlined';

import Image1 from './../../../assets/images/clients/1.jpg';
import Image2 from './../../../assets/images/clients/2.jpg';
import Image3 from './../../../assets/images/clients/3.jpg';
import Image4 from './../../../assets/images/clients/4.jpg';
import Image5 from './../../../assets/images/clients/5.jpg';
import Image6 from './../../../assets/images/clients/6.jpg';
import Image7 from './../../../assets/images/clients/7.jpg';
import Image8 from './../../../assets/images/clients/8.jpg';

const useStyles = makeStyles((theme) => ({
    container: {
        maxWidth: '1200px',
        margin: '0 auto'
    },
    root: {
        display:'block',
        margin: '50px 0',
      },
    item: {
    'display': 'inline-block',
    },
    rArrow: {
        position: 'absolute',
        zIndex: '1',
        width: '50px',
        height: '50px',
        borderRadius: '50%',
        background: 'rgba(0,0,0,0.6)',
        color: '#fff',
        transform: 'rotate(180deg)',
        right: '10px',
        marginTop: '-64px'
    },
    lArrow: {
        position: 'absolute',
        zIndex: '1',
        width: '50px',
        height: '50px',
        borderRadius: '50%',
        background: 'rgba(0,0,0,0.6)',
        color: '#fff',
        left: '10px'
    }
}));


export const OurClient = (props) =>  {
    const classes = useStyles();
    const items = [
        Image1,
        Image2,
        Image3,
        Image4,
        Image5,
        Image6,
        Image7,
        Image8
    ];

    return (
        <Grid container direction="column" className={classes.container}>
            <Typography variant="h4" align="center">Our Clients</Typography>
                <Carousel 
                    className={classes.root}
                    show={5}
                    rightArrow={<KeyboardArrowLeftOutlinedIcon className={classes.rArrow } />}
                    leftArrow={<KeyboardArrowLeftOutlinedIcon className={classes.lArrow } />}
                    slide={1}>
                    {
                        items.map( (item, i) => {
                            return (
                                <div key={`item${i}`}>
                                    <Box className={classes.item} sx={{ width: '100%', maxWidth: 215 }}>
                                        <img src={item} alt={item} />
                                    </Box>
                                </div>
                            )
                        })
                    }
                </Carousel>
        </Grid>
    )
}