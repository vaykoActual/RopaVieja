import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

export default function AutoGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs>
          <Card className={classes.card}>xs</Card>
        </Grid>
        <Grid item xs>
          <Card className={classes.card}>xs</Card>
        </Grid>
        <Grid item xs>
          <Card className={classes.card}>xs</Card>
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        <Grid item xs>
          <Card className={classes.card}>xs</Card>
        </Grid>
        <Grid item xs={6}>
          <Card className={classes.card}>xs=6</Card>
        </Grid>
        <Grid item xs>
          <Card className={classes.card}>xs</Card>
        </Grid>
      </Grid>
    </div>
  );
}
