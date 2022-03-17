import React, { useEffect, useState } from 'react';
import classes from './widgets.module.css';
import SearchIcon from '@material-ui/icons/Search';
import { FiSettings } from 'react-icons/fi';
import Trending from './Trending/Trending';
import db from '../firebase';
import { collection, onSnapshot } from 'firebase/firestore';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';
import FollowWidget from './Follow Widget/FollowWidget';

const Widgets = () => {
  const [TrendsInfo, setTrendsInfo] = useState([
    { name: <LoadingSpinner />, id: 'initial' },
  ]);

  const [FollowsInfo, setFollowsInfo] = useState([
    { name: <LoadingSpinner />, id: 'initial' },
  ]);
  useEffect(
    () =>
      onSnapshot(collection(db, 'Trends'), snapshot =>
        setTrendsInfo(snapshot.docs.map(doc => ({ ...doc.data(), id: doc.id })))
      ),
    []
  );

  useEffect(
    () =>
      onSnapshot(collection(db, 'FollowRecommendation'), snapshot =>
        setFollowsInfo(
          snapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }))
        )
      ),
    []
  );

  return (
    <div>
      <div className={classes.widgets_container}>
        <div className={classes.widgets_searchbar}>
          <SearchIcon className={classes.widgets_icon} />
          <input
            placeholder="Search Twitter"
            className={classes.widgets_input}
          />
        </div>
        <div className={classes.wigets}>
          <div className={classes.widgets_heading}>
            <h3>Trends for you</h3>
            <FiSettings className={classes.widgets_settings} />
          </div>
          <div>
            {TrendsInfo.map(trendInfo => (
              <Trending
                key={trendInfo.id}
                trendingName={trendInfo.name}
                trendingAsset={trendInfo.item}
                tweets={trendInfo.value}
              />
            ))}
          </div>
          <div className={classes.widgets_showMore}>
            <p>Show more</p>
          </div>
        </div>
        <div className={classes.wigets}>
          <div className={classes.widgets_heading}>
            <h3>Who to follow</h3>
          </div>
          <div>
            {FollowsInfo.map(followInfo => (
              <FollowWidget
                key={followInfo.id}
                avatar={followInfo.avatar}
                name={followInfo.name}
                username={followInfo.username}
              />
            ))}
          </div>
          <div className={classes.widgets_showMore}>
            <p>Show more</p>
          </div>
        </div>
      </div>
      <footer>
        <div className={classes.footer}>
          <span className={classes.footerLinks}>Terms of Service</span>
          <span className={classes.footerLinks}>Privacy Policy</span>
          <span className={classes.footerLinks}>Cookie Policy</span>
        </div>
        <div>
          <span className={classes.footerLinks}>Accessibility</span>
          <span className={classes.footerLinks}>Ads info</span>
          <span className={classes.footerLinks}>More</span>
        </div>
        <div>
          <span className={classes.footerLinks}>&copy; 2022 Twitter,Inc.</span>
        </div>
      </footer>
    </div>
  );
};

export default Widgets;
