import React, { useEffect, useState } from 'react';
import classes from './feed.module.css';
import Post from './Post/Post';
import TweetBox from './TweetBox/TweetBox';
import db from '../firebase';
import { collection, onSnapshot } from 'firebase/firestore';

const Feed = () => {
  const [Posts, setPosts] = useState([{ name: 'Loading...', id: 'initial' }]);

  useEffect(
    () =>
      onSnapshot(collection(db, 'Posts'), snapshot =>
        setPosts(snapshot.docs.map(doc => ({ ...doc.data(), id: doc.id })))
      ),
    []
  );
  return (
    <div className={classes.feed_container}>
      <div className={classes.feed_header}>
        <h2>Home</h2>
      </div>
      <div className={classes.feed}>
        <TweetBox />
      </div>
      <div>
        {Posts.map(post => (
          <Post
            key={post.id}
            displayName={post.displayName}
            username={post.username}
            verified={post.verified}
            text={post.text}
            avatar={post.avatar}
            image={post.image}
          />
        ))}
      </div>
    </div>
  );
};

export default Feed;
