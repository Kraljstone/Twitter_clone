import React from 'react';
import classes from './dropDown.module.css';
import { FaRegSadCry } from 'react-icons/fa';
import { RiUserUnfollowFill } from 'react-icons/ri';
import { GoReport } from 'react-icons/go';

const DropDown = () => {
  return (
    <div className={classes.dropDown_container}>
      <div>
        <div className={classes.dropDown_options}>
          <FaRegSadCry className={classes.dropDown_options_icon} />
          <h5 className={classes.dropDown_options_text}>
            Not Interested in this Tweet
          </h5>
        </div>
        <div className={classes.dropDown_options}>
          <RiUserUnfollowFill className={classes.dropDown_options_icon} />
          <h5 className={classes.dropDown_options_text}>Unfollow</h5>
        </div>
        <div className={classes.dropDown_options}>
          <GoReport className={classes.dropDown_options_icon} />
          <h5 className={classes.dropDown_options_text}>Report Tweet</h5>
        </div>
      </div>
    </div>
  );
};

export default DropDown;
