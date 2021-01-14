import React from 'react'

const Landing = (props) => {
  const { pageComponent: Component, matchProps } = props;
  return (
    <>
      <h2>Header</h2>
      <Component {...matchProps} />
      <h2>Footer</h2>
    </>
  )
};

export default Landing;
