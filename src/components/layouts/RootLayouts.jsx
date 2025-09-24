import React from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Headers from './headers';
import Footer from './footer';
import ScrollToTop from '../ui/ScrollToTop';

const RootLayouts = () => {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <div className="relative flex flex-col min-h-screen bg-white">
      <Headers />
      <main
        className="flex-grow"
        style={{ paddingTop: isHome ? "80px" : "0px" }}
      >
        <Outlet />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default RootLayouts;