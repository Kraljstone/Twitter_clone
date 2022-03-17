import React from 'react';
import classes from './followWidget.module.css';
import { Avatar, Button } from '@material-ui/core';

const FollowWidget = ({ avatar, name, username }) => {
  return (
    <div className={classes.followWidget}>
      <div className={classes.followWidget_info}>
        <Avatar
          className={classes.followWidget_avatar}
          alt="widget_followImg"
          src={avatar}
        />
        <div>
          <h3 className={classes.followWidget_name}>
            <span className={classes.followWidget_nameText}>{name}</span>
          </h3>
          <h5 className={classes.followWidget_username}>@{username}</h5>
        </div>
      </div>
      <Button className={classes.followWidget_followButton}>Follow</Button>
    </div>
  );
};

export default FollowWidget;
