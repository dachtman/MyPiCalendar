import React, { Component } from 'react';
import Moment from 'react-moment';
import AppBar from 'material-ui/AppBar';

//TODO
//look at setting title to all day event if one is present
//EX Birthday
//Multiple BDays can rotate
const TopBar = () => <AppBar title={<Moment format="MMM Do YYYY h:mm:ss a" interval={1000}></Moment>} showMenuIconButton={false}></AppBar>

export default TopBar;