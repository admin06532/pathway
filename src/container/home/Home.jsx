import React from 'react';
import { HeroShot } from './../../components/heroshot';
import { Intro } from './../../components/intro';
import { Form } from './../../components/form';
import { Footer } from './../../components/footer';
import { SoftwareConsultancy } from './../../components/softwareConsultancy';
import { OurClient } from './../../components/ourClient';

export const HomeContainer = () => {
    return (<>
                <HeroShot />
                <Intro />
                <SoftwareConsultancy />
                <OurClient />
                <Form />
                <Footer />
        </>
    )
}