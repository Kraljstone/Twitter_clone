import React from 'react';
import classes from './exploreFollowWidget.module.css';
import { Avatar, Button } from '@material-ui/core';

const ExploreFollowWidget = ({ avatar, name, username }) => {
  return (
    <div className={classes.exploreFollowWidget}>
      <div className={classes.exploreFollowWidget_info}>
        <Avatar
          className={classes.exploreFollowWidget_avatar}
          alt="widget_followImg"
          src={avatar}
        />
        <div>
          <h3 className={classes.exploreFollowWidget_name}>
            <span className={classes.exploreFollowWidget_nameText}>{name}</span>
          </h3>
          <h5 className={classes.exploreFollowWidget_username}>{username}</h5>
        </div>
      </div>
      <Button className={classes.exploreFollowWidget_followButton}>
        Follow
      </Button>
    </div>
  );
};

export default ExploreFollowWidget;
