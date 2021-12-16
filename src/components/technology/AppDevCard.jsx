import React from "react";
import {Grid} from "@material-ui/core";
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
  
export const AppDevCard = () => {
    const classes = useStyle();
    
  return (
            <>
            <Grid
              container
              spacing={2}
              className={classes.container}
            >
              {CARD_CUSTOM.APP_WHY_CHOOSE.map(
                (
                  {avatarLabel, boxHeading, boxPara},
                  index
                ) => (
                  <Grid item xs={12} md={3} key={`card${index}`}>
                    <CustomCard
                      avatarLabel={avatarLabel}
                      boxHeading={boxHeading}
                      boxPara={boxPara}
                    />
                  </Grid>
                )
              )}
            </Grid>
        </>)
    };
