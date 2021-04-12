import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import CloseIcon from '@material-ui/icons/Close';
import { IconButton } from '@material-ui/core'
import Auth  from './Auth'

import {
  Card,
  Tabs,
  Tab,
  CardContent,
  CardHeader,
  Typography
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 700,
    padding: 10,
    marginTop: 100,
    marginLeft: 100,
    gridArea: 'main',
    height: 450,
    overflowY: 'hidden',
  },
  cardheader : {
      display: "flex",
    flexDirection: "row", 
  },
  cardheaderLeft : {
    flex: 200
  },  
  cardheaderRight : {
    flex: 10
  },    
  header: {
    textAlign: "center",
      flex: 200 
  },
  tabs: {
    margin: "auto"
  }
}));

export default function Login({ submit, close, error }) {
  const classes = useStyles();

  const [tabValue, setTabValue] = useState(0);

  const handleTabChange = (_, newValue) => {
    setTabValue(newValue);
  };

  return (
    <Card className={classes.root}>
      <CardHeader className={classes.header}
        className={classes.header}
       title={tabValue === 0 ? "Login" : "Sign Up"}
        action={
          <IconButton aria-label="close" onClick={close}>
            <CloseIcon />
          </IconButton>
        }       
      />
      <CardContent>
        <Tabs
          variant="fullWidth"
          className={classes.tabs}
          value={tabValue}
          indicatorColor="primary"
          textColor="primary"
          onChange={handleTabChange}
        >
          <Tab label="LOGIN" />
          <Tab label="SING UP" />
        </Tabs>
      </CardContent>
      <CardContent>
          <Auth tabValue={tabValue} submit = {submit} error={error}/>
      </CardContent>
    </Card>
  );
}