import React, { Fragment } from 'react';
import spinner from '../../images/ballSpinner.gif'; // Updated path (inside src/)

export default () => {
  return (
    <Fragment>
      <img
        src={spinner}
        style={{ width: '200px', margin: 'auto', display: 'block' }}
        alt="Loading..."
      />
    </Fragment>
  );
};