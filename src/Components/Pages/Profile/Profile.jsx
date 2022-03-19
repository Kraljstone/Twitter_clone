import React from 'react';
import classes from '../pagesLayout.module.css';
import Sidebar from '../Sidebar/Sidebar';
import Widgets from '../WidgetsBar/Widgets';

const HomePage = () => {
  return (
    <div className={classes.home}>
      <div className={classes.layout}>
        <div className={classes.sidebar}>
          {/* SIDEBAR */}
          <Sidebar />
        </div>
        <div className={classes.feed}>{/* PROFILE */}</div>
        <div className={classes.widgets}>
          {/* WIDGETHS */}
          <Widgets />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
