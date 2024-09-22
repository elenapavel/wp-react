import React from "react";

export const Header = () => {
  return (
    <div className="sticky top-0 h-20 bg-primary border-b-4 border-secondary w-full flex items-center px-40 py-4 justify-between z-50">
      <div className="h-full">
        <img
          src="/wp-content/uploads/2024/09/Asset-12.png"
          className="h-full"
        />
      </div>
      <div className="flex">
        <div className='cursor-pointer text-white ml-14 px-2 after:mt-1 relative inline-block after:absolute after:left-0 after:block after:h-[2px] after:w-0 after:bg-accent after:transition-all after:content-[""] hover:after:w-full'>
          Trainings
        </div>
        <div className='cursor-pointer text-white ml-14 px-2 after:mt-1 relative inline-block after:absolute after:left-0 after:block after:h-[2px] after:w-0 after:bg-accent after:transition-all after:content-[""] hover:after:w-full'>
          Echipa
        </div>
        <div className='cursor-pointer text-white ml-14 px-2 after:mt-1 relative inline-block after:absolute after:left-0 after:block after:h-[2px] after:w-0 after:bg-accent after:transition-all after:content-[""] hover:after:w-full'>
          Tabere
        </div>
      </div>
    </div>
  );
};
