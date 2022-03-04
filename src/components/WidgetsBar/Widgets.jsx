import React from 'react';
import classes from './widgets.module.css';
import SearchIcon from '@material-ui/icons/Search';

const Widgets = () => {
  return (
    <div className={classes.widgets_container}>
      <div className={classes.widgets_searchbar}>
        <SearchIcon className={classes.widgets_icon} />
        <input placeholder="Search Twitter" className={classes.widgets_input} />
      </div>
    </div>
  );
};

export default Widgets;
