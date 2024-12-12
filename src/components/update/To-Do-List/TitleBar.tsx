import React from 'react';
import icon from "../../../../public/favicon.ico"
import { CiMinimize1 } from "react-icons/ci";
import { IoIosClose } from "react-icons/io";


const TitleBar: React.FC = () => {
  // Minimize the window
  const handleMinimize = () => {
    (window as any).electronAPI.minimizeWindow();
  };

  // Maximize/Restore the window
  const handleMaximizeRestore = () => {
    (window as any).electronAPI.toggleMaximizeRestore();
  };

  // Close the window
  const handleClose = () => {
    (window as any).electronAPI.closeWindow();
  };

  return (
    <div
      className="w-full h-10 bg-gray-800 text-white flex items-center justify-between select-none"
      style={{ WebkitAppRegion: 'drag' }} // Enable dragging
    >
      {/* App Icon and Title */}
      <div className="flex items-center gap-2 pl-4">
        <img src= {icon} alt="App Icon" className="w-5 h-5" />
        <span className="text-sm font-semibold">To do list</span>
      </div>

      {/* Window Controls */}
      <div className="flex items-center gap-2 pr-4" style={{ WebkitAppRegion: 'no-drag' }}>
        <button
          className="w-8 h-8 flex items-center justify-center hover: bg-black rounded"
          onClick={handleMinimize}
        >
          <CiMinimize1 className=' text-white text-center  text-lg' />
        </button>
        
        <button
          className="w-8 bg-black h-8 flex items-center justify-center hover:bg-red-600 rounded"
          onClick={handleClose}
        >
          <IoIosClose className=' text-center text-white text-2xl'/>
        </button>
      </div>
    </div>
  );
};

export default TitleBar;
