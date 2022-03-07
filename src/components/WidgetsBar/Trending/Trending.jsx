import React from 'react';
import classes from './trending.module.css';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

const Trending = ({ trendingName, trendingAsset, tweets }) => {
  return (
    <div className={classes.trending_container}>
      <div>
        <h5 className={classes.trending_heading}> {trendingName} - Trending</h5>
        <h5>{trendingAsset}</h5>
        <p className={classes.trending_tweetsCounter}>{tweets} Tweets</p>
      </div>
      <MoreHorizIcon className={classes.trending_moreOptions} />
    </div>
  );
};

export default Trending;
