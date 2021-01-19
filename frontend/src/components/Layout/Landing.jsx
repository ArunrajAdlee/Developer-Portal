import React from 'react';

const Landing = (props) => {
  const { pageComponent: Component, matchProps } = props;
  return (
    <>
      <div className='landing-layout-container'>
        <Component {...matchProps} />
      </div>
    </>
  );
};

export default Landing;
