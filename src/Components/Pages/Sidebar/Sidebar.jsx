import React from 'react';
import classes from './sidebar.module.css';
import TwitterIcon from '@material-ui/icons/Twitter';
import SidebarOptions from './SidebarOptions/SidebarOptions';
import {
  HomeIcon,
  ExploreIcon,
  NotificationsNoneIcon,
  MailOutlineIcon,
  BookmarkBorderOutlinedIcon,
  SpeakerNotesOutlinedIcon,
  PersonOutlineOutlinedIcon,
  MoreHorizIcon,
} from './index';
import { Button } from '@material-ui/core';
import Banner from './Banner/Banner';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className={classes.sidebar_container}>
      <NavLink to="/" className={classes.navLink}>
        <TwitterIcon className={classes.sidebar_twitter_logo} />
      </NavLink>
      <div className={classes.sidebar_forMobile}>
        <NavLink to="/" className={classes.navLink}>
          <SidebarOptions text={'Home'} Icon={HomeIcon} />
        </NavLink>
        <NavLink to="/explore" className={classes.navLink}>
          <SidebarOptions text={'Explore'} Icon={ExploreIcon} />
        </NavLink>
        <NavLink to="/notification" className={classes.navLink}>
          <SidebarOptions text={'Notification'} Icon={NotificationsNoneIcon} />
        </NavLink>
        <NavLink to="/messages" className={classes.navLink}>
          <SidebarOptions text={'Messages'} Icon={MailOutlineIcon} />
        </NavLink>
      </div>

      <div className={classes.sidebar_withMoreOptions}>
        <NavLink className={classes.navLink} to="/bookmarks">
          <SidebarOptions
            text={'Bookmarks'}
            Icon={BookmarkBorderOutlinedIcon}
          />
        </NavLink>
        <NavLink to="/lists" className={classes.navLink}>
          <SidebarOptions text={'Lists'} Icon={SpeakerNotesOutlinedIcon} />
        </NavLink>
        <NavLink to="/profile" className={classes.navLink}>
          <SidebarOptions text={'Profile'} Icon={PersonOutlineOutlinedIcon} />
        </NavLink>
        <NavLink to="/more" className={classes.navLink}>
          <SidebarOptions text={'More'} Icon={MoreHorizIcon} />
        </NavLink>
        <Button className={classes.sidebar_tweetButton}>Tweet</Button>
        <Banner />
      </div>
    </div>
  );
};

export default Sidebar;
