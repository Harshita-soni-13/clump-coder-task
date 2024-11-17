import { useState } from 'react';
import { FaBoxes , FaTasks, FaWpforms, FaTable, FaFileAlt  , FaRegEnvelope} from 'react-icons/fa';
import { RiArrowDropDownLine } from 'react-icons/ri';
import { HiOutlineChartPie , HiOutlineInboxArrowDown } from "react-icons/hi2";
import { TbLogin2 } from "react-icons/tb";
import { LiaFileInvoiceSolid } from "react-icons/lia";

const Sidebar = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="bg-gray-900 text-white h-screen w-64 p-4">
      <div className="flex items-center mb-8">
        <div className="w-8 h-8 bg-indigo-500 rounded-full flex items-center justify-center">
          {/* Replace with your logo */}
          <span className="text-lg font-bold text-white">TA</span>
        </div>
        <h1 className="ml-2 text-xl font-bold">TailAdmin</h1>
      </div>

     


      <button className="flex items-center justify-between w-full px-4 py-2  rounded-lg hover:bg-gray-700">
          <div className="flex items-center">
          <FaTasks className="mr-3" />
           <span>Task</span>
          </div>
          <RiArrowDropDownLine className="text-3xl" />
        </button>
      
      <div className="mb-4">
      <button className="flex items-center justify-between w-full px-4 py-2  rounded-lg hover:bg-gray-700">
          <div className="flex items-center">
          <FaWpforms className="mr-3" />
           <span>Forms</span>
          </div>
          <RiArrowDropDownLine className="text-3xl" />
        </button>


        <div className="mt-2 space-y-1">
          <div className="flex justify-between items-center px-4 py-2 hover:bg-gray-700 rounded-lg">
            <span className='text-gray-400'>Form Elements</span>
          
          </div>
          <div className="flex justify-between items-center px-4 py-2 hover:bg-gray-700 rounded-lg">
            <span className='text-gray-400'>Pro Form Elements</span>
            <span className="bg-indigo-500 text-xs px-2 py-1 rounded-lg">Pro</span>
          </div>
          <div className="flex justify-between items-center px-4 py-2 hover:bg-gray-700 rounded-lg">
            <span className='text-gray-400'>Form Layout</span>
           
          </div>
          <div className="flex justify-between items-center px-4 py-2 hover:bg-gray-700 rounded-lg">
            <span className='text-white-400'>Pro Form Layout</span>
            <span className="bg-indigo-500 text-xs px-2 py-1 rounded-lg">Pro</span>
          </div>
        </div>
      </div>

      <div className="space-y-4">

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

      <div  className="space-y-4 ">

      <div className="flex justify-between items-center px-4 py-2 hover:bg-gray-700 rounded-lg">
            <span className='text-gray-400 '>SUPPORT</span>
          
          </div>
        
      <button className="flex items-center justify-between w-full px-4 py-1  rounded-lg hover:bg-gray-700">
          <div className="flex items-center">
          <FaRegEnvelope  className="mr-3" />
          <span className='text-white-400'>Mesaage</span>
          </div>
          <span className="bg-indigo-500 text-xs px-2 py-1 rounded-lg">5</span>
          <span className="bg-indigo-500 text-xs px-2 py-1 rounded-lg">Pro</span>
        </button>

       
        <button className="flex items-center justify-between w-full px-4 py-1 rounded-lg hover:bg-gray-700">
          <div className="flex items-center">
          <HiOutlineInboxArrowDown   className="mr-3" />
          <span className='text-white-400'>Inbox</span>
          </div>
          <span className="bg-indigo-500 text-xs px-2 py-1 rounded-lg">Pro</span>
        </button>

        <button className="flex items-center justify-between w-full px-4 py-1 rounded-lg hover:bg-gray-700">
          <div className="flex items-center">
          <LiaFileInvoiceSolid  className="mr-3"/>
          <span className='text-white-400'>Invoice</span>
          </div>
          <span className="bg-indigo-500 text-xs px-2 py-1 rounded-lg">Pro</span>
        </button>
      </div>

      <div className="space-y-4 ">
      <div className="flex justify-between items-center px-4 py-2 hover:bg-gray-700 rounded-lg">
            <span className='text-gray-400'>OTHERS</span>
          
          </div>

          <button className="flex items-center justify-between w-full px-4 py-1  rounded-lg hover:bg-gray-700">
          <div className="flex items-center">
          <HiOutlineChartPie  className="mr-3" />
           <span>Chart</span>
          </div>
          <RiArrowDropDownLine className="text-3xl" />
        </button>

        <button className="flex items-center justify-between w-full px-4 py-1  rounded-lg hover:bg-gray-700">
          <div className="flex items-center">
          <FaBoxes  className="mr-3" />
           <span>UI Elements</span>
          </div>
          <RiArrowDropDownLine className="text-3xl" />
        </button>

        <button className="flex items-center justify-between w-full px-4 py-1  rounded-lg hover:bg-gray-700">
          <div className="flex items-center">
          <TbLogin2  className="mr-3"  />
           <span>Authentication</span>
          </div>
          <RiArrowDropDownLine className="text-3xl" />
        </button>

      </div>
    </div>
  );
};

export default Sidebar;
