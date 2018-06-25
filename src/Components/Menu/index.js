import React, { Component } from 'react'
import Logo from '../../Images/logo-officium.png'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import { NavLink } from 'react-router-dom';

const styles = {
  root: {
    flexGrow: 1,
  },
  flex: {
    flex: 1,
  },
  Button: {
    backgroundColors:'#000000',
    marginLeft: 10,
    marginRight: 10,
  },
};


function ButtonAppBar(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <div className="Menu" position="static">
        <Toolbar>
        <img src={Logo} className="logoOfficium" alt="Logo"/>
        </Toolbar>
      </div>
    </div>
  );
}



export default withStyles(styles)(ButtonAppBar);