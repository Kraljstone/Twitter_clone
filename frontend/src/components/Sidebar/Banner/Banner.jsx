import React from 'react';
import classes from './banner.module.css';
import { Avatar } from '@material-ui/core';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

const Banner = () => {
  return (
    <div className={classes.banner_container}>
      <Avatar
        className={classes.banner_img}
        alt="profile img"
        src={
          'https://images.unsplash.com/photo-1494790108377-be9c29b29330?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMDg4MDd8MHwxfHNlYXJjaHwxfHxwZW9wbGV8ZW58MHx8fHwxNjQ2MzUyNjU5&ixlib=rb-1.2.1&q=80&w=1080'
        }
      />
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
