
import React, { useState } from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import { Grid, makeStyles } from '@material-ui/core';

const useStyle = makeStyles(() => ({
    root: {
      width: '100%',
      height: '100vh'  
    }
})) 

export const MapContainer = (props) => {
    const onMarkerClick = () => {
        setDisplayMarkerInfo(true);
    }  
    const onInfoWindowClose = () => {

        setDisplayMarkerInfo(false);
    }  
    const [displayMarkerInfo, setDisplayMarkerInfo ] = useState(false);
    
    const classes =  useStyle();
    
    
    return (
        <Grid container spacing={1} className={classes.root}>

        
        <Map 
            google={props.google}
            initialCenter={{
                lat: 28.5801879,
                lng: 77.3158979
              }}
             zoom={14}>
   
          <Marker onClick={onMarkerClick}
                  name={'Current location'} />
   
          <InfoWindow onClose={onInfoWindowClose}>
              <div>
                <h1>{`hello`}</h1>
              </div>
          </InfoWindow>
        </Map>
        </Grid>
      );
    }
   
  export default GoogleApiWrapper({
    apiKey: "AIzaSyDL2NssjscdKsRX0QEXng63YHcw2HJuYdQ"
  })(MapContainer)
