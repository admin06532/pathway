import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import { Box, Typography } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";
import "react-responsive-carousel/lib/styles/carousel.min.css";


const useStyles = makeStyles((theme) => ({
    root: {
        minHeight: "50",
        position: 'absolute',
        bottom: 0,
        left: 'calc(25vw - 200px)',
        width: 400,
      },
      item: {
        padding: theme.spacing(1),
        display: "flex",
        margin: '0 10px',
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: '#3FBDED',
        border: '2px inset #e65100',
        color: '#ffffff',
        borderRadius: '4px',
        boxShadow: '2px 6px 3px 2px rgba(150,150,150,0.6)',
        transition: 'color 0.25s ease-in',
        fontWeight: '500',
        '&:hover': {
            backgroundColor: '#e65100',
            color: '#ffffff',
            fontWeight: '600',
            borderColor: 'transparent'  
        }
      },
}));

export const HomeCarousel = (props) =>  {
    const classes = useStyles();
    const items = [
        "Recruitment Process Outsourcing",
        "Application Development",
        "Publishing & conversion",
        "CRM Application Development",
        "ERP School Management System",
        "API Integration",
        "Nodejs Development",
        ".Net Development",
        "Java Website Development",
        "Python Web Application",
        "PHP Website Development",
        "Laravel Website Development",
        "Hybrid App Development",
        "React Native App Development",
        "Android App Development",
        "iOS App Development",
        "Machine Learning Development",
        "Html5 Mobile App Development",
        "Real Estate Portal Development",
        "Search Engine Optimization",
        "Social Media Optimization",
        "Digital Marketing Services",
        "Pay Per Click",
        "Content Marketing",
        "Internet Marketing",
        "Bulk SMS Services",
        "Website Optimization & Testing",
        "Job Web Portal Development",
        "Tour and Travel Web Development",
        "B2B Web Portal Development",
        "Hotel Booking Web Development",
        "Hospital Web Portal Development"
        ];

    return (
        <Carousel 
            axis="horizontal"
            autoPlay={true}
            centerMode={true}
            className={classes.root}
            showIndicators={false}
            showStatus={false}
            infiniteLoop={true}
            >
            {
                items.map( (item, i) => <Item classCss={classes.item} key={i} item={item} /> )
            }
        </Carousel>
    )
}

const Item = (props) => {
    return (
        <Box className={props.classCss} sx={{ width: '100%', maxWidth: 320 }}>
            <Typography variant='body1'>{props.item}</Typography>
        </Box>
    )
};