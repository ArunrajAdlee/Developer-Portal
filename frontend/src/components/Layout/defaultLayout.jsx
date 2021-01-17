import React from 'react';

const DefaultLayout = (props) => {
  const { pageComponent: Component, matchProps } = props;
  return (
    <>
      <div>
        <h1>Header</h1>
        <Component {...matchProps} />
        <h1>Footer</h1>
      </div>
    </>
  );
};

export default DefaultLayout;
