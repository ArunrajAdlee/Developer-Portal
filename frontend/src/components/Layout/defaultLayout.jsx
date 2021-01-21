import React from 'react';
import Nav from './nav';

const DefaultLayout = (props) => {
  const { pageComponent: Component, matchProps } = props;
  return (
    <>
      <div className="default-layout-container">
        <Nav />
        <Component {...matchProps} />
        <h1>Footer</h1>
      </div>
    </>
  );
};

export default DefaultLayout;
