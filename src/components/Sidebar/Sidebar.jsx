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

const Sidebar = () => {
  return (
    <div className={classes.sidebar_container}>
      <TwitterIcon className={classes.sidebar_twitter_logo} />
      <div className={classes.sidebar_forMobile}>
        <SidebarOptions text={'Home'} Icon={HomeIcon} />
        <SidebarOptions text={'Explore'} Icon={ExploreIcon} />
        <SidebarOptions text={'Notification'} Icon={NotificationsNoneIcon} />
        <SidebarOptions text={'Messages'} Icon={MailOutlineIcon} />
      </div>

      <div className={classes.sidebar_withMoreOptions}>
        <SidebarOptions text={'Bookmarks'} Icon={BookmarkBorderOutlinedIcon} />
        <SidebarOptions text={'Lists'} Icon={SpeakerNotesOutlinedIcon} />
        <SidebarOptions text={'Profile'} Icon={PersonOutlineOutlinedIcon} />
        <SidebarOptions text={'More'} Icon={MoreHorizIcon} />
        <Button className={classes.sidebar_tweetButton}>Tweet</Button>
        <Banner />
      </div>
    </div>
  );
};

export default Sidebar;
