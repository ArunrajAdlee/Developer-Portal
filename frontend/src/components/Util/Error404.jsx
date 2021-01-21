import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSadTear, faStar } from '@fortawesome/free-solid-svg-icons';

const Error404 = () => {
  return (
    <>
      <div className="error-page">
        <FontAwesomeIcon className="error-image" icon={faSadTear} />
        <h1>404</h1>
        <h4>The page you were looking for cannot be found!</h4>
      </div>
    </>
  );
};

export default Error404;
