import React from 'react';
import classes from './feed.module.css';
import TweetBox from './TweetBox/TweetBox';

const Feed = () => {
  return (
    <div className={classes.feed_container}>
      <div className={classes.feed_header}>
        <h2>Home</h2>
      </div>
      <div className={classes.feed}>
        <TweetBox />
      </div>
    </div>
  );
};

export default Feed;
