import React from 'react';
import {Slide, useScrollTrigger} from '@material-ui/core';

export const HideOnScroll = React.memo((props) => {
    const { children } = props;
    const trigger = useScrollTrigger();
  
    return (
      <Slide appear={false} direction={"down"} in={!trigger}>
        {children}
      </Slide>
    );
  });
