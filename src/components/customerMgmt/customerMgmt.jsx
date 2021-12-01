import React from "react";
import { Grid, List, ListItem, Typography } from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import AboutImage from "./../../assets/images/heroshot/banner_2-min.png";

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
    backgroundPosition: "center right 50px",
    backgroundRepeat: "no-repeat",
    paddingBottom: "50px",
  },
  deskTopMaxWidth: {
    maxWidth: "1200px",
    margin: "0 auto",
  },
  banner: {
    boxSizing: "border-box",
    paddingTop: "100px",
    minHeight: "100vh",
    width: "100%",
    backgroundImage: `url(${AboutImage})`,
    backgroundSize: "cover",
    position: "relative",
    "& .MuiTypography-h2": {
      position: "absolute",
      left: "50%",
      top: "28%",
      fontWeight: "400",
    },
  },
  box: {
    position: "absolute",
    left: "50%",
    top: "50%",
    maxWidth: "450px",
  },
}));


export const CustomerMgmt = () => {
    const classes = useStyles();
    return (
        <Grid container>
         <div className={classes.banner}>
        <Typography
          variant='h2'
          className={classes.deskTopMaxWidth}
          component='div'
          align='left'
        >
          CRM Application Development
        </Typography>
        <div className={classes.box}>
        <Typography gutterBottom={true}>
            CRM stands for customer relationship management. The primary goal of a business should be clinching 100% client or customer satisfaction. CRM service makes business processes modernized and more customer-friendly.
        </Typography>
        </div>
      </div>
      <Grid container className={classes.deskTopMaxWidth} >
            <Typography variant="h5">
            Our Ecommerce Development Services
            </Typography>
            <Typography variant="body2">
            At Dpathway, we offer an extensive range of ecommerce website development service. Find a glimpse on our ecommerce development service below.
            </Typography>
            <List>
                <ListItem>Online Store Development: Obtain a fully functional, agile, and powerful ecommerce store from our ecommerce development team. We have developed ecommerce stores for various industries.</ListItem>
                <ListItem>Auction Platforms: Apart from developing ecommerce stores, we have expertise in developing auction and bidding platforms. Developing a robust and secured auction or bidding platform is our commitment</ListItem>
                <ListItem>B2B Marketplace: Want to develop a platform for B2B marketplace? Our ecommerce developers are poised with skills and experience to craft such platforms. We develop highly efficient B2B marketplaces.</ListItem>
                <ListItem>CMS Integration: Our team has knowledge and experience to work with different CMS platforms for ecommerce development. Our team can provide service on Wordpress, Magento, Joomla, Drupal, and other CMS platforms.</ListItem>
                <ListItem>Update and Migration: Do you want your online store too migrate from Wordpress to Magento? We offer secured and flawless migration service. Find online store update and migration service from our team for any CMS platform.</ListItem>
                <ListItem>API Integration: We simplify ecommerce operations through our API integration support. You can integrate your website to Google Analytics, PayPal, QuickBooks, FedEx, and other APIs as per your preferences.</ListItem>
            </List>
            <Typography variant="h5">
                Why Choose Us?
            </Typography>
                <Typography variant="body2">
                So, why should you choose Dpathway for ecommerce development service? Find the reasons for choosing our advanced and seamless ecommerce development service.
                  </Typography>
                
                <List>
                <ListItem>Agile Approach: We adopt agile approach for developing the ecommerce store. Agile approach ensures top-quality ecommerce stores with advanced features.</ListItem>
                <ListItem>Responsive: The ecommerce development service we provide is responsive by default. Your web store will be accessible from both cell phone and desktop.</ListItem>
                <ListItem>
                Rich Features: We commit to provide a feature-rich ecommerce web store development service. It gives many options to the ecommerce owners to manage business easily.
                </ListItem>
                <ListItem>Appealing UI: Our developers give special attention of the user interface of the ecommerce store. A visually attractive ecommerce website fetches more buyers.</ListItem>
                <ListItem>Excellent UX: We assure top user experience. A good experience for the buyers helps the businesses to retain loyal customers.</ListItem>
                <ListItem>Timely Delivery: Dpathway has a team of efficient and skilled personnel. We assure quick development service for the ecommerce stores.</ListItem>
            </List>
            <Typography variant="h5">
                An Affordable Service Provider
            </Typography>
            <Typography variant="body2" gutterBottom={true}>
            At Dpathway, we maintain transparency in our service packages. Our goal is providing top-quality ecommerce website development solution at the most affordable budget. Moreover, satisfaction of the clients is a crucial concern for us. We offer custom ecommerce development service at your suitable budget.</Typography>
            <Typography variant="body2" gutterBottom={true}>
For an advanced ecommerce development service, you can contact us anytime. Call us or write emails to us to get in touch with our team.
            </Typography>
            </Grid>
          </Grid>
        )
    } 