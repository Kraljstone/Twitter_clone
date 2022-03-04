import React from 'react';
import classes from './TweetBox.module.css';
import { Avatar, Button } from '@material-ui/core';
import {
  ImageIcon,
  GifIcon,
  PollIcon,
  SentimentSatisfiedIcon,
  ScheduleIcon,
  LocationOnIcon,
} from './index.js';

const TweetBox = () => {
  return (
    <div className={classes.tweetBox_container}>
      <form>
        <div className={classes.tweetBox_input}>
          <Avatar
            className={classes.twetBox_avatar}
            alt="profile img"
            src={
              'https://images.unsplash.com/photo-1494790108377-be9c29b29330?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMDg4MDd8MHwxfHNlYXJjaHwxfHxwZW9wbGV8ZW58MHx8fHwxNjQ2MzUyNjU5&ixlib=rb-1.2.1&q=80&w=1080'
            }
          />
          <input
            placeholder="What's happening?"
            className={classes.tweetBox_text}
          />
        </div>
        <div className={classes.tweetBox_options}>
          <div className={classes.TweetBox_utility}>
            <ImageIcon />
            <GifIcon />
            <PollIcon />
            <SentimentSatisfiedIcon />
            <ScheduleIcon />
            <LocationOnIcon />
          </div>
          <Button className={classes.tweetBox_tweetButton}>Tweet</Button>
        </div>
      </form>
    </div>
  );
};

export default TweetBox;
