import React from 'react';
import Sidebar from '../sidebar/Sidebar';
import Navbar from '../navbar/Navbar';
import Form from '../form/Form';

const Layout = () => {
  return (
    <div className="flex ">
    {/* Sidebar */}
    <Sidebar />
    {/* Main Content */}
    <div className="flex-1 flex flex-col">
      {/* Top Navigation */}
      <Navbar />
      {/* Dashboard */}
      <div className="p-6 bg-gray-100 flex-1">
        <Form />
      </div>
    </div>
  </div>
  );
};

export default Layout;