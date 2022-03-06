import React from 'react';
import classes from './widgets.module.css';
import SearchIcon from '@material-ui/icons/Search';
import { FiSettings } from 'react-icons/fi';

const Widgets = () => {
  return (
    <div className={classes.widgets_container}>
      <div className={classes.widgets_searchbar}>
        <SearchIcon className={classes.widgets_icon} />
        <input placeholder="Search Twitter" className={classes.widgets_input} />
      </div>
      <div className={classes.wigets_tranding}>
        <div className={classes.widgets_heading}>
          <h3>Trends for you</h3>
          <FiSettings className={classes.widgets_settings} />
        </div>
      </div>
    </div>
  );
};

export default Widgets;
