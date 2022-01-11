import React, { useContext } from "react";
import {Grid, Typography} from "@material-ui/core";
import DemoImage from "./../../../assets/images/3.png";
import {CustomCard, SectionTitle, SectionBackground} from "./../../common";
import {CARD_CUSTOM} from "../../../constant";
import { SectionContext } from "../../../contexts/theme";
 
 const ITConsulting = () => {
  const {classes} = useContext(SectionContext);

  return (
    <Grid container className={classes.containerWrapper}>
      <SectionBackground imagePath={DemoImage} />
      <section className='container'>
        <Grid container spacing={2} direction='row-reverse'>
          <Grid item xs={12} md={8}>
            <SectionTitle>Best IT Consulting Company India for All Your Digital Needs</SectionTitle>
            <Typography variant='body2'>
            Digital Pathway, a leading IT consulting company in India, has the expertise that can help companies make use of digital technology to leverage their content and get new valuable products. With fantastic solutions from our experts, you can streamline the workflows and generate better revenues. As a renowned IT consulting services provider in India, we will increase your brand awareness and enhancement with our services and make sure that the entire operations run smoothly.
            </Typography>
            <Typography variant='body2' gutterBottom={true}>
              At Digital Pathway, we design, enrich, and convert the existing content so that it can be repurposed and managed. Content is available in many forms like books, training materials, and other marketing materials and we have industry veterans with unmatched expertise. Digital Pathway, a widely acknowledged IT consulting services provider in India, makes use of complex technology and offers solutions that are efficient and low cost. We turn flat and unappealing content into a smart one so that this digital information can be monetized and utilized freely
            </Typography>
            </Grid>
          </Grid>
          <Grid container spacing={3} className={classes.container} gutterBottom={true}>
          {CARD_CUSTOM.IT_CONSULTANCY.map(
            ({avatarLabel, boxHeading, boxPara, boxUrl, boxButtonLabel}, index) => {
              return (
                <Grid item xs={12} md={3}  key={`card${index}`}>
                  <CustomCard
                    avatarLabel={avatarLabel}
                    boxHeading={boxHeading}
                    boxPara={boxPara}
                    boxUrl={boxUrl}
                    boxButtonLabel={boxButtonLabel}
                  />
                </Grid>
              );
            }
          )}
        </Grid>
        <br/><br/>
            
            <Typography component={"h2"} variant='h4' gutterBottom={true}>
              Hire Right Talent with Top Recruitment/Staffing Company India
            </Typography>
            <Typography variant='body2' gutterBottom={true}>
              DPathway, the best recruitment company in India, offers contract-to-hire personnel for project-based support, with the opportunity to hire our contractors as permanent employees or discover permanent top talent to match your company's requirements. We have obtained a unique perspective on how we may contribute to organizational goals by listening to our client's business requirements.
            </Typography>
            <Typography variant='body2' gutterBottom={true}>
              Our professional consultants are local market experts who work with you to understand your business objectives and specific personnel requirements. Digital Pathway is a popular staffing company in India that uses the most up-to-date technologies to find the greatest talent, and they put their people skills to good use to make sure the best talent finds its way to you. This is how we help you move your company forward so you can gain a competitive edge.
            </Typography>
          
       
      </section>
    </Grid>
  );
}
export default ITConsulting;