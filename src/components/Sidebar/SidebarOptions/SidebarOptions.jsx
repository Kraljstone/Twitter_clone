import React from 'react';
import classes from './sidebarOptions.module.css';

const SidebarOptions = ({ text, Icon }) => {
  return (
    <div className={classes.sidebarOptions_container}>
      <Icon className={classes.sidebarOptions_icons} />
      <h3 className={classes.text}>{text}</h3>
    </div>
  );
};

export default SidebarOptions;
