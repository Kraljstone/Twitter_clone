import React from 'react';
import classes from '../pagesLayout.module.css';
import Sidebar from '../Sidebar/Sidebar';
import ExploreWidgets from './ExploreWidgets/ExploreWidgets';
import SearchIcon from '@material-ui/icons/Search';
import styles from './explore.module.css';
import { FiSettings } from 'react-icons/fi';
import { Avatar } from '@material-ui/core';

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
          <div className={styles.explore_searchbar_container}>
            <Avatar
              className={styles.explore_searchbar_avatar}
              alt="profile img"
              src={
                'https://images.unsplash.com/photo-1494790108377-be9c29b29330?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMDg4MDd8MHwxfHNlYXJjaHwxfHxwZW9wbGV8ZW58MHx8fHwxNjQ2MzUyNjU5&ixlib=rb-1.2.1&q=80&w=1080'
              }
            />
            <div className={styles.explore_searchbar}>
              <SearchIcon className={styles.explore_icon} />
              <input
                placeholder="Search Twitter"
                className={styles.explore_input}
              />
            </div>
            <FiSettings className={styles.explore_settings} />
          </div>
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
