import React from "react";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import ClientLogo from './../../../assets/images/ClientLogo.png'

const useStyle = makeStyles(() => ({
    root: {
        backgroundImage: `url(${ClientLogo})`,
        width:'100%',
        height: '80px',
        backgroundSize: '75%',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundColor: '#3FBDED'
    }
}))

export default function(){
    const classes = useStyle();
    return (
        <Grid className={classes.root}></Grid>
        )
} 