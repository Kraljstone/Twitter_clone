import React, { useEffect, useState } from 'react';
import classes from './widgets.module.css';
import SearchIcon from '@material-ui/icons/Search';
import { FiSettings } from 'react-icons/fi';
import Trending from './Trending/Trending';
import db from '../firebase';
import { collection, onSnapshot } from 'firebase/firestore';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';

const Widgets = () => {
  const [TrendsInfo, setTrendsInfo] = useState([
    { name: <LoadingSpinner />, id: 'initial' },
  ]);
  useEffect(
    () =>
      onSnapshot(collection(db, 'Trends'), snapshot =>
        setTrendsInfo(snapshot.docs.map(doc => ({ ...doc.data(), id: doc.id })))
      ),
    []
  );

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
        <div className={classes.widgets_trandsMore}>
          <p>Show more</p>
        </div>
      </div>
    </div>
  );
};

export default Widgets;
