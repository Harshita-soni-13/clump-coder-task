import React from 'react';
import Sidebar from '../sidebar/Sidebar';
import Dashboard from '../dashboard/Dashboard';
import Navbar from '../navbar/Navbar';

const Layout = () => {
  return (
    <div className="flex ">
  
    <Sidebar />
   
    <div className="flex-1 flex flex-col">
     
      <Navbar />
    
      <div className="p-6 bg-gray-100 flex-1">
        <Dashboard />
      </div>
    </div>
  </div>
  );
};

export default Layout;