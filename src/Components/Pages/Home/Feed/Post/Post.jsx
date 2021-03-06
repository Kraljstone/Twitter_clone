import React, { useRef, useState } from 'react';
import classes from './post.module.css';
import { Avatar } from '@material-ui/core';
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import RepeatIcon from '@material-ui/icons/Repeat';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import PublishIcon from '@material-ui/icons/Publish';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import DropDown from './DropDown/DropDown';
import useOutsideClick from '../../../../../Hooks/useOutsideClick';

const Post = ({ displayName, username, verified, text, image, avatar }) => {
  const [close, setClose] = useState(false);
  const dropDownMenuRef = useRef();
  useOutsideClick(dropDownMenuRef, () => setClose(false));
  return (
    <div className={classes.post}>
      <div className={classes.post__avatar}>
        <Avatar src={avatar} />
      </div>
      <div className={classes.post__body}>
        <div className={classes.post__header}>
          <div className={classes.post__headerText}>
            <h3>
              {displayName}{' '}
              <span className={classes.post__headerSpecial}>
                {verified && (
                  <VerifiedUserIcon className={classes.post__badge} />
                )}{' '}
                @{username}
              </span>
            </h3>
            <MoreHorizIcon
              className={classes.post_moreOptions}
              onClick={() => {
                setClose(true);
              }}
              ref={dropDownMenuRef}
            />
            {close && <DropDown />}
          </div>
          <div className={classes.post__headerDescription}>
            <p>{text}</p>
          </div>
        </div>
        <img src={image} alt="" />
        <div className={classes.post__footer}>
          <ChatBubbleOutlineIcon
            className={classes.post_icons}
            fontSize="small"
          />
          <RepeatIcon className={classes.post_icons} fontSize="small" />
          <FavoriteBorderIcon className={classes.post_icons} fontSize="small" />
          <PublishIcon className={classes.post_icons} fontSize="small" />
        </div>
      </div>
    </div>
  );
};

export default Post;
