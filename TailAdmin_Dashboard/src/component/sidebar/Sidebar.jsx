
import { FaTh, FaCalendarAlt, FaUser, FaTasks, FaWpforms, FaTable, FaFileAlt } from 'react-icons/fa';
import { RiArrowDropDownLine } from 'react-icons/ri';

const Sidebar = () => {
  
  return (
    <div className="bg-gray-900 text-white h-screen w-64 p-4">
      <div className="flex items-center mb-8">
        <div className="w-8 h-8 bg-indigo-500 rounded-full flex items-center justify-center">
         
          <span className="text-lg font-bold text-white">TA</span>
        </div>
        <h1 className="ml-2 text-xl font-bold">TailAdmin</h1>
      </div>

      <div className="text-gray-400 uppercase mb-2">Menu</div>
      
      <div className="mb-4">
        <button className="flex items-center justify-between w-full px-4 py-2 bg-gray-800 rounded-lg hover:bg-gray-700">
          <div className="flex items-center">
            <FaTh className="mr-3" />
            <span>Dashboard</span>
          </div>
          <RiArrowDropDownLine className="text-3xl" />
        </button>

        <div className=' flex items-center px-4 py-2 hover:bg-gray-700 rounded-lg '>
          <span>Ecommerce</span>
        </div>

        <div className="mt-2 space-y-1">
          <div className="flex justify-between items-center px-4 py-2 hover:bg-gray-700 rounded-lg">
            <span className='text-gray-400'>Analytics</span>
            <span className="bg-indigo-500 text-xs px-2 py-1 rounded-lg">Pro</span>
          </div>
          <div className="flex justify-between items-center px-4 py-2 hover:bg-gray-700 rounded-lg">
            <span className='text-gray-400'>Marketing</span>
            <span className="bg-indigo-500 text-xs px-2 py-1 rounded-lg">Pro</span>
          </div>
          <div className="flex justify-between items-center px-4 py-2 hover:bg-gray-700 rounded-lg">
            <span className='text-gray-400'>CRM</span>
            <span className="bg-indigo-500 text-xs px-2 py-1 rounded-lg">Pro</span>
          </div>
          <div className="flex justify-between items-center px-4 py-2 hover:bg-gray-700 rounded-lg">
            <span className='text-gray-400'>Stocks</span>
            <span className="bg-indigo-500 text-xs px-2 py-1 rounded-lg">Pro</span>
          </div>
        </div>
      </div>

      <div className="space-y-4">

        <button className="flex items-center justify-between w-full px-4 py-2  rounded-lg hover:bg-gray-700">
          <div className="flex items-center">
           <FaCalendarAlt className="mr-3" />
           <span>Calendar</span>
          </div>
          <RiArrowDropDownLine className="text-3xl" />
        </button>

       

        <button className="flex items-center justify-between w-full px-4 py-2  rounded-lg hover:bg-gray-700">
          <div className="flex items-center">
          <FaUser className="mr-3" />
           <span>Profile</span>
          </div>
          <RiArrowDropDownLine className="text-3xl" />
        </button>


        <button className="flex items-center justify-between w-full px-4 py-2  rounded-lg hover:bg-gray-700">
          <div className="flex items-center">
          <FaTasks className="mr-3" />
           <span>Task</span>
          </div>
          <RiArrowDropDownLine className="text-3xl" />
        </button>

       

        <button className="flex items-center justify-between w-full px-4 py-2  rounded-lg hover:bg-gray-700">
          <div className="flex items-center">
          <FaWpforms className="mr-3" />
           <span>Forms</span>
          </div>
          <RiArrowDropDownLine className="text-3xl" />
        </button>


        <button className="flex items-center justify-between w-full px-4 py-2  rounded-lg hover:bg-gray-700">
          <div className="flex items-center">
          <FaTable className="mr-3" />
           <span>Tables</span>
          </div>
          <RiArrowDropDownLine className="text-3xl" />
        </button>

        <button className="flex items-center justify-between w-full px-4 py-2  rounded-lg hover:bg-gray-700">
          <div className="flex items-center">
          <FaFileAlt className="mr-3" />
           <span>Pages</span>
          </div>
          <RiArrowDropDownLine className="text-3xl" />
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
