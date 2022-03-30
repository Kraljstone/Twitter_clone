import React from 'react';
import classes from './exploreSearchbar.module.css';
import SearchIcon from '@material-ui/icons/Search';
import { FiSettings } from 'react-icons/fi';
import { Avatar } from '@material-ui/core';

const ExploreSearchbar = () => {
  return (
    <div className={classes.explore_searchbar_container}>
      <div className={classes.explore_searchbar_avatar_container}>
        <Avatar
          className={classes.explore_searchbar_avatar}
          alt="profile img"
          src={
            'https://images.unsplash.com/photo-1494790108377-be9c29b29330?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMDg4MDd8MHwxfHNlYXJjaHwxfHxwZW9wbGV8ZW58MHx8fHwxNjQ2MzUyNjU5&ixlib=rb-1.2.1&q=80&w=1080'
          }
        />
      </div>
      <div className={classes.explore_searchbar}>
        <SearchIcon className={classes.explore_icon} />
        <input placeholder="Search Twitter" className={classes.explore_input} />
        <div className={classes.explore_settings_container}>
          <FiSettings className={classes.explore_settings} />
        </div>
      </div>
    </div>
  );
};

export default ExploreSearchbar;
