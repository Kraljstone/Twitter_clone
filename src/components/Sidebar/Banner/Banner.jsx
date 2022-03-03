import React from 'react';
import classes from './banner.module.css';
import { Avatar } from '@material-ui/core';
import img from '../assets/jurica-koletic-RcVzx4burTY-unsplash.jpg';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

const Banner = () => {
  return (
    <div className={classes.banner_grid}>
      <Avatar className={classes.banner_gmg} alt="profile img" src={img} />
      <div className={classes.banner_info}>
        <h4 className={classes.banner_name}>Jurica Koletic</h4>
        <h5 className={classes.banner_twitter_name}>@jurica.K</h5>
      </div>
      <div className={classes.banner_more}>
        <MoreHorizIcon />
      </div>
    </div>
  );
};

export default Banner;
