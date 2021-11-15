import React from 'react';
import { HeroShot } from './../../components/heroshot';
import { Intro } from './../../components/intro';
import { Form } from './../../components/form';
import { BoxHome } from './../../components/box';
import { IntroApp } from './../../components/introApp';
import { IntroEcom } from './../../components/introEcom';

import { SoftwareConsultancy } from './../../components/softwareConsultancy';
import { OurClient } from './../../components/ourClient';

export const HomeContainer = () => {
    return (<>
                <HeroShot />
                <Intro />
                <SoftwareConsultancy />
                <IntroApp />
                <BoxHome />
                <IntroEcom />
                <Form />
                <OurClient />
        </>
    )
}