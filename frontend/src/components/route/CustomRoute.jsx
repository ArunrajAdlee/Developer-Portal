import React from 'react';
import { Route } from 'react-router-dom';

const CustomRoute = (props) => {
  const {
    pageComponent: PageComponent, layoutComponent: LayoutComponent, ...rest
  } = props;
  return (
    <Route
      {...rest}
      render={(matchProps) => (
        <LayoutComponent matchProps={matchProps} pageComponent={PageComponent} />
      )}
    />
  );
};

export default CustomRoute;