import React from "react";
import {Typography, Grid, List, ListItem} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import TechImage from "./../../assets/images/techbanner.png";
import {
  CustomCard,
  SectionTitle,
  SectionBackground,
} from "./../../components/common";
import {CARD_CUSTOM} from "./../../constant";
import clsx from "clsx";

const useStyles = makeStyles(() => ({
  deskTopMaxWidth: {
    maxWidth: "1200px",
    margin: "0 auto",
  },
  banner: {
    boxSizing: "border-box",
    paddingTop: "100px",
    minHeight: "100vh",
    width: "100%",
    backgroundImage: `url(${TechImage})`,
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
    top: "42%",
    maxWidth: "450px",
  },
  paddingTop: {
    paddingTop: "40px",
  },
}));

export const Whypathway = () => {
  const classes = useStyles();

  return (
    <>
      <Grid container>
        <div className={classes.banner}>
          <Typography
            variant='h2'
            className={classes.deskTopMaxWidth}
            component='div'
            align='left'
          >
            Why Us
          </Typography>
          <div className={classes.box}>
            <Typography gutterBottom={true}>
              D Pathway was founded to provide businesses of all sizes with IT
              consulting, publishing, and web application development services.
              We help you and your business connect with customers, integrate
              with vendors, and empower employees to do their best work.
            </Typography>
          </div>
        </div>
      </Grid>
      <section className={clsx("container", classes.paddingTop)}>
        <Typography gutterBottom={true}>
          By providing quality solutions to diverse business operations, Digital
          Pathway strives to provide substantial value and productivity
          advantages for its clients. By constantly merging our strategic
          thinking with the best in Technology, People, and Process, we bring a
          wealth of experience in information technology, customer service, and
          worldwide operations.
        </Typography>
        <Typography gutterBottom={true}>
          We are committed to building a fantastic relationship with our
          customers by transforming their work into digital form and providing
          high-quality services in the field of digital transformation to our
          clients within time and budget constraints. To bring out the best in
          our distinguished clients, we deploy cutting-edge technologies and
          innovative approaches.
        </Typography>
        <Typography variant='h5' className={classes.paddingTop}>
          Digital Pathway solely focuses on a mission:
          <br />
          “Building the Tech-Driven Future for Businesses”
        </Typography>
        <Typography gutterBottom={true} className={classes.paddingTop}>
          We have knowledge and expertise in a variety of fields, and our
          talented squad can assist you in achieving the best results. We have a
          brilliant team that employs the best industry standards based on
          extensive research and expertise. You can acquire a wide range of
          services from us, including eBook design, publication, IT support, and
          third-party payroll. We have a team of highly skilled and experienced
          specialists who provide innovative digital solutions without breaking
          your bank.
        </Typography>
        <Typography gutterBottom={true}>
          With a perfect blend of young and experienced IT professionals, the
          team has a dual-edged advantage of being both dynamic and stable. We
          support users in many countries by providing tech-driven solutions
          across Europe, South Africa, Asia, and the Americas.
        </Typography>
        <Typography variant='h5' className={classes.paddingTop}>
          Let’s move down the Digital Pathway:
        </Typography>
        <Typography gutterBottom={true}>
          Digital Pathway has the expertise that can help companies make use of
          digital technology to leverage their content and get new valuable
          products. With fantastic solutions from our experts, you can
          streamline the workflows and generate better revenues. We will
          increase your brand awareness and enhancement with our services and
          make sure that the entire operations run smoothly.
        </Typography>
        <Typography gutterBottom={true}>
          At Digital Pathway, we design, enrich, and convert the existing
          content so that it can be repurposed and managed. Content is available
          in many forms like books, training materials, and other marketing
          materials and we have industry veterans with unmatched expertise. We
          make use of complex technology and offer solutions that are efficient
          and low cost. We turn flat and unappealing content into a smart one so
          that this digital information can be monetized and utilized freely.
        </Typography>
        <Typography variant='h5' className={classes.paddingTop}>
          Our Mission:
        </Typography>
        <Typography gutterBottom={true}>
          We provide high quality services in the field of digital
          transformation to our clients within prescribed time and budget and
          are committed to build a great relationship with the customers by
          converting their work in digital form. We use the latest technology
          and innovation to bring out the best for our prestigious clients.
        </Typography>
        <Typography variant='h5' className={classes.paddingTop}>
          Our Vision:
        </Typography>
        <Typography>
          We aim to achieve the best in eBook designing, IT solutions and third
          party payroll services and we help unlock the potential of the
          companies using the digital mediums.
        </Typography>
        <Typography variant='h5' className={classes.paddingTop}>
          Who are we?
        </Typography>
        <Typography gutterBottom={true}>
          Digital Pathway is committed to helping companies transform business
          in an innovative manner. We have experience and expertise in several
          domains and help you get the best output with our expert team. We have
          an amazing team that uses best practices with great research and
          experience. With us, you will get a wide range of services like eBook
          designing, publishing, IT services, and third party payroll. We have a
          team of highly skilled team of experienced professionals that offers
          smart solutions in the digital field.
        </Typography>

        <List>
          <ListItem>Great performance:</ListItem>
          <ListItem>
            We help the companies in achieving their goals by designing
            strategies for them.
          </ListItem>
          <ListItem>Committed to growth:</ListItem>
          <ListItem>
            We are committed to provide problem solving strategies for their
            continuous improvement.
          </ListItem>
          <ListItem>Well-experienced team:</ListItem>
          <ListItem>
            We have a team that collaborates and helps achieve goals in an
            efficient manner.
          </ListItem>
          <ListItem>Modesty:</ListItem>
          <ListItem>
            We have a team that dives into the client’s shoes and helps them
            face the challenges that they face.
          </ListItem>
          <ListItem>Global clients:</ListItem>
          <ListItem>
            We have clients located globally and go above and beyond to be
            useful to our clients and we try our best to implement and
            internalize.
          </ListItem>
          <ListItem>High-quality:</ListItem>
          <ListItem>
            We make use of strong processes and well tested methods to provide
            high-quality services that help clients grow.
          </ListItem>
        </List>
      </section>
    </>
  );
};
