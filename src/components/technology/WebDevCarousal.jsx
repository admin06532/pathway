import React, {useState, useEffect, useLayoutEffect} from "react";
import {Grid} from "@material-ui/core";
import {Carousel} from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {CustomCard} from "./../../components/common";
import {CARD_CUSTOM} from "./../../constant";
import { makeStyles } from "@material-ui/styles";


const useStyle = makeStyles(() => ({
    container: {
        padding: "15px",
        boxSizing: "border-box",
        position: "relative",
        zIndex: 5,
      },
}) );
  
let data;

export const WebDevCarousal = () => {
    const classes = useStyle();
    const [pairedData, setPairData] = useState([]);

    useEffect( () => {
        setPairData(data);
    }, [pairedData])

    useLayoutEffect(() => {
        data = CARD_CUSTOM.WEB_DEV.reduce(function (
            result,
            value,
            index,
            array
        ) {
        if (index % 4 === 0)
                result.push(array.slice(index, index + 4));
                return result;
        }, []);
    }, [])
  return (
    <Grid
    container
    className={classes.container}>
      <Carousel 
        dynamicHeight={true}
        showStatus={false}
      >
      { pairedData && pairedData.map((parentValue, parentIndex) => (
            <>
            <Grid
              container
              spacing={2}
              className={classes.container}
              key={`parent${parentIndex}`}
            >
              {parentValue.map(
                (
                  {avatarLabel, boxHeading, boxPara, boxUrl, boxButtonLabel},
                  index
                ) => (
                  <Grid item xs={12} md={3} key={`card${index}`}>
                    <CustomCard
                      avatarLabel={avatarLabel}
                      boxHeading={boxHeading}
                      boxPara={boxPara}
                      boxUrl={boxUrl}
                      boxButtonLabel={boxButtonLabel}
                    />
                  </Grid>
                )
              )}
              
            </Grid>
        </>
        )
      )}
    </Carousel>
    </Grid>);
};
