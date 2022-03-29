import React, { useEffect, useState } from 'react';
import classes from './exploreWidgets.module.css';
import { db } from '../../../../Database/firebase';
import { collection, onSnapshot } from 'firebase/firestore';
import LoadingSpinner from '../../Home/LoadingSpinner/LoadingSpinner';
import ExploreFollowWidget from './ExploreFollowWidget/ExploreFollowWidget';

const ExploreWidgets = () => {
  const [ExploreFollowsInfo, setExploreFollowsInfo] = useState([
    { name: <LoadingSpinner />, id: 'initial' },
  ]);

  useEffect(
    () =>
      onSnapshot(collection(db, 'FollowRecommendation'), snapshot =>
        setExploreFollowsInfo(
          snapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }))
        )
      ),
    []
  );

  return (
    <div>
      <div className={classes.exploreWidgets_container}>
        <div className={classes.exploreWigets}>
          <div className={classes.exploreWidgets_heading}>
            <h3>Who to follow</h3>
          </div>
          <div>
            {ExploreFollowsInfo.map(followInfo => (
              <ExploreFollowWidget
                key={followInfo.id}
                avatar={followInfo.avatar}
                name={followInfo.name}
                username={followInfo.username}
              />
            ))}
          </div>
          <div className={classes.exploreWidgets_showMore}>
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

export default ExploreWidgets;
