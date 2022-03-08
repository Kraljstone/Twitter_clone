import React from 'react';
import classes from './loadingSpinner.module.css';

const LoadingSpinner = () => {
  return (
    <>
      <div class={classes.ldsHourglass}></div>
    </>
  );
};

export default LoadingSpinner;
