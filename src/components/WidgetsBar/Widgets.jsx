import React from 'react';
import classes from './widgets.module.css';
import SearchIcon from '@material-ui/icons/Search';
import { FiSettings } from 'react-icons/fi';
import Trending from './Trending/Trending';

const Widgets = () => {
  return (
    <div className={classes.widgets_container}>
      <div className={classes.widgets_searchbar}>
        <SearchIcon className={classes.widgets_icon} />
        <input placeholder="Search Twitter" className={classes.widgets_input} />
      </div>
      <div className={classes.wigets_trands}>
        <div className={classes.widgets_heading}>
          <h3>Trends for you</h3>
          <FiSettings className={classes.widgets_settings} />
        </div>
        <div className={classes.widges_items}>
          <Trending
            trendingName={'Digital assets'}
            trendingAsset={'#crytocurrencies'}
            tweets={'21.4k'}
          />
          <Trending
            trendingName={'Trending in Serbia'}
            trendingAsset={'Serbs'}
            tweets={'1,980'}
          />
          <Trending
            trendingName={'Technology'}
            trendingAsset={'Elon'}
            tweets={'102k'}
          />
          <Trending
            trendingName={'Politics'}
            trendingAsset={'USSR'}
            tweets={'30.5k'}
          />
          <Trending
            trendingName={'Gaming'}
            trendingAsset={'Ubisoft'}
            tweets={'11.4k'}
          />
        </div>
        <div className={classes.widgets_trandsMore}>
          <p>Show more</p>
        </div>
      </div>
    </div>
  );
};

export default Widgets;
