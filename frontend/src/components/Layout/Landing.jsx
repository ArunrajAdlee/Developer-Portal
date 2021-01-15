import React from 'react';

const Landing = (props) => {
  const { pageComponent: Component, matchProps } = props;
  return (
    <>
      <div className='landing-layout-container'>
        <h2>Header</h2>
        <Component {...matchProps} />
        <h2>Footer</h2>
      </div>
    </>
  );
};

export default Landing;
