import React from 'react';
import Nav from './nav';
import Footer from './footer';

const DefaultLayout = (props) => {
  const { pageComponent: Component, matchProps } = props;
  return (
    <>
      <div className="default-layout-container">
        <header id="header-content">
          <Nav />
        </header>
        <main id="body-content" className="main-content">
          <Component {...matchProps} />
        </main>
        <footer id="footer-content" className="footer-container">
          <Footer />
        </footer>
      </div>
    </>
  );
};

export default DefaultLayout;
