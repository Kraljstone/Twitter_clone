import React from 'react';
import classes from './loadingSpinner.module.css';

const LoadingSpinner = () => {
  return (
    <>
      <div className={classes.ldsHourglass}></div>
    </>
  );
};

export default LoadingSpinner;
