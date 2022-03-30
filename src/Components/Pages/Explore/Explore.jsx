import React from 'react';
import classes from '../pagesLayout.module.css';
import Sidebar from '../Sidebar/Sidebar';
import ExploreWidgets from './ExploreWidgets/ExploreWidgets';
import ExploreSearchbar from './ExploreSearchbar/ExploreSearchbar';
import ExploreHeading from './ExploreHeading/ExploreHeading';

const Explore = () => {
  return (
    <div className={classes.home}>
      <div className={classes.layout}>
        <div className={classes.sidebar}>
          {/* SIDEBAR */}
          <Sidebar />
        </div>
        <div className={classes.feed}>
          {/* EXPLORE */}
          <ExploreSearchbar />
          <ExploreHeading />
        </div>
        <div className={classes.widgets}>
          {/* WIDGETHS */}
          <ExploreWidgets />
        </div>
      </div>
    </div>
  );
};

export default Explore;
