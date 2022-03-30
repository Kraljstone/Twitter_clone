import React from 'react';
import classes from './exploreHeading.module.css';

const ExploreHeading = () => {
  return (
    <div className={classes.exploreHeading_container}>
      <div className={classes.exploreHeading_overlay}></div>
      <img
        className={classes.exploreHeading_image}
        src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2F9b16f79ca967fd0708d1-2713572fef44aa49ec323e813b06d2d9.ssl.cf2.rackcdn.com%2F1140x_a10-7_cTC%2FLLWS-Mo-ne-Impact-Baseball-1567828651.jpg&f=1&nofb=1"
        alt=""
      />
      <div className={classes.exploreHeading_text}>
        <p>Women's Cricket World Cup - LIVE</p>
        <h3>
          Australia take on West Indies on the ICC Women's Cricket World Cup
          clash
        </h3>
      </div>
    </div>
  );
};

export default ExploreHeading;
