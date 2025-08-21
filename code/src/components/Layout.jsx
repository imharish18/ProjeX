// src/components/Layout.jsx

import React from 'react';
import { Outlet } from 'react-router-dom';
// We no longer import Navbar here
import Sidebar from './Sidebar';

const Layout = () => {
  return (
    // This container now only needs to manage the sidebar and main content area.
    // 'flex-1' makes it fill the remaining space below the navbar.
    // 'flex' arranges the Sidebar and Outlet side-by-side.
    <div className="flex flex-1">
      <div className="w-64">
        <Sidebar />
      </div>
      <main className="flex-1 p-8 bg-gray-100">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;