import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { Box, Typography } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles((theme) => ({
    root: {
        padding: theme.spacing(2),
        minHeight: "50",
        position: 'absolute',
        top: 110,
        right: 20,
        width: 400
      },
      item: {
        padding: theme.spacing(1),
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        border: '2px inset #e65100',
        color: '#e65100',
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
        <Carousel className={classes.root}
            stopAutoPlayOnHover={true}
            indicators={false}
            navButtonsAlwaysVisible={false}
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
            <Typography variant="subtitle">{props.item}</Typography>
        </Box>
    )
};