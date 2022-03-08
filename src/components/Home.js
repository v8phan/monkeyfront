import React from "react";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import { makeStyles } from "@mui/styles";

import Blogbox from "./Blogbox";
import Posts from "./Posts";
import Comment from "./Comment";

const useStyles = makeStyles({
  container: {
    marginLeft: 10,
    marginRight: 10,
    flexGrow: 1,
    backgroundColor: "gray",
  },
});

const Home = () => {
  const classes = useStyles();

  return (
    <Container className={classes.container}>
      {Posts.map((post) => {
        return (
          <Grid container spacing={0}>
            <Grid item xs={12} sm={6}>
              <Blogbox
                name={post.name}
                text={post.text}
                image={post.image}
                alt={post.alt}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Comment blog_id={post.id} />
            </Grid>
          </Grid>
        );
      })}
    </Container>
  );
};

export default Home;