import React from 'react';
import { Link } from 'react-router-dom';
import {
    Container,
    Typography,
    Grid,
    makeStyles,
    Toolbar,
    AppBar,
    Avatar,
  } from '@material-ui/core';

  const useStyles = makeStyles(theme => {
    return {
      root: {
        display: 'flex-wrap',
        flexDirection: 'column',
        background: '#0a1017c0;',
        height: '100%',
        width: '100%',
        marginTop: 80,
        
      },
      page: {
        marginTop: 50,
      },
      appbar: {
        backgroundColor: '#0B0C10',
        display: 'flex',
        paddingTop: 5,
        paddingBottom: 5,
        fontFamily: 'Roboto',
      },
      title: {
        fontFamily: 'Righteous,',
        fontSize: '20pt',
        color: '#66FCf1',
        flexGrow: 1,
        marginBottom: 10,
      },
      navRight: {
        display: 'flex',
        margin: 5,
        padding: '5px',
      },
      avatarDiv: {
        display: 'flex',
        paddingLeft: 10,
      },
      text: {
        paddingTop: 7,
      },
      avatar: {
        fontFamily: 'Righteous,',
        fontSize: '20pt',
        color: '#66FCf1',
        flexGrow: 1,
        marginLeft: 10,
      },
      date: {
        marginTop: 5,
        fontSize: '9pt',
      },
    };
  });

  const Navbar=()=>{
    const classes = useStyles()
    return (
        <Container className={classes.root}>
          <AppBar className={classes.appbar} elevation={3}>
            <Toolbar>
              <Link to="/" variant="h3" className={classes.title}>
                SLACK REACTIONS
              </Link>
              {/* <Link to='token' className={classes.avatar}>Get Started Here</Link> */}
            </Toolbar>
          </AppBar>
    
          
        </Container>
      );
  }

export default Navbar