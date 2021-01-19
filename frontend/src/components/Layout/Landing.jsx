import React from 'react';
import GlobalAlert from '../Util/globalAlert';

const Landing = (props) => {
  const { pageComponent: Component, matchProps } = props;
  return (
    <>
      <div className='landing-layout-container'>
        <GlobalAlert />

        <Component {...matchProps} />
      </div>
    </>
  );
};

export default Landing;
