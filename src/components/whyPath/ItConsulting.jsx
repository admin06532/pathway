import React from "react";
import {Grid, Typography} from "@material-ui/core";
import {makeStyles} from "@material-ui/styles";
import AboutImg from "./../../assets/images/about_u.png";
import Polygon from "./../../assets/images/polygon.png";
import {SectionBackground} from "./../common";


const useStyles = makeStyles((theme) => ({
    root: {
      position: "relative",
      flexGrow: 1,
      backgroundImage: `url(${Polygon})`,
      backgroundColor: "#f3f4fd",
      backgroundPosition: "center left -10px",
      backgroundSize: "32%",
      backgroundRepeat: "no-repeat",
      paddingBottom: "50px",
      paddingTop: 50,
      [theme.breakpoints.down("md")]: {
        paddingTop: 50,
      },
    },
    paper: {
      height: 140,
      width: 100,
    },
    control: {
      padding: theme.spacing(2),
    },
  
    bannerImage: {
      position: "absolute",
      right: "-5%",
      borderRadius: "40px",
      width: "40%",
      textAlign: "center",
      padding: 0,
      top: "15%",
      zIndex: 2,
      "&::before": {
        content: '""',
        display: "block",
        position: "absolute",
        borderRadius: "40px",
        zIndex: 0,
        top: "-20px",
        left: 0,
        height: "100%",
        width: "110%",
        background: "linear-gradient( 45deg,#3FBDED 0%,#00A4E8 100%)",
        transform: "rotate(10deg)",
      },
    },
    img: {
      height: "100%",
      margin: "auto",
      borderRadius: "80px 0px 0px 80px",
      boxShadow: "5px 5px 36px rgb(64 189 237 / 50%)",
      backgroundColor: "#ffffff",
      position: "relative",
    },
    container: {
      paddingTop: "10px",
      boxSizing: "border-box",
      position: "relative",
      zIndex: 5,
    },
    flexItem: {
      marginLeft: 50,
      marginTop: 50,
      textAlign: "left",
      [theme.breakpoints.down("md")]: {
        marginLeft: 0,
        marginTop: 0,
        paddingTop: 20,
      },
    },
  }))

const WhyIntro = () => {
  const classes = useStyles();

  return (
    <Grid container className={classes.root}>
      <SectionBackground imagePath={AboutImg} align='right' />
      <section className='container'>
        <Grid container spacing={2}>
          <Grid item xs={12} md={7}>
            <Typography variant='body2'>
              By providing quality solutions to diverse business operations,
              Digital Pathway strives to provide substantial value and
              productivity advantages for its clients. By constantly merging our
              strategic thinking with the best in Technology, People, and
              Process, we bring a wealth of experience in information
              technology, customer service, and worldwide operations.
            </Typography>
            <Typography variant='body2' gutterBottom={true}>
              We are committed to building a fantastic relationship with our
              customers by transforming their work into digital form and
              providing high-quality services in the field of digital
              transformation to our clients within time and budget constraints.
              To bring out the best in our distinguished clients, we deploy
              cutting-edge technologies and innovative approaches.
            </Typography>

            <Typography component={"h2"} variant='h4' gutterBottom={true}>
              Digital Pathway solely focuses on a mission:
              <br />
              “Building the Tech-Driven Future for Businesses”
            </Typography>
            <Typography variant='body2' gutterBottom={true}>
              We have knowledge and expertise in a variety of fields, and our
              talented squad can assist you in achieving the best results. We
              have a brilliant team that employs the best industry standards
              based on extensive research and expertise. You can acquire a wide
              range of services from us, including eBook design, publication, IT
              support, and third-party payroll. We have a team of highly skilled
              and experienced specialists who provide innovative digital
              solutions without breaking your bank.
            </Typography>
            <Typography variant='body2' gutterBottom={true}>
              With a perfect blend of young and experienced IT professionals,
              the team has a dual-edged advantage of being both dynamic and
              stable. We support users in many countries by providing
              tech-driven solutions across Europe, South Africa, Asia, and the
              Americas.
            </Typography>
          </Grid>
        </Grid>
     </section>
    </Grid>
  );
};
export default WhyIntro;
