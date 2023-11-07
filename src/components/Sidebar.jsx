import React, { useState } from 'react'
import logo from '../assets/meta-1.svg';
import group3 from '../assets/Group 3.svg';
import group31 from '../assets/Group 31.svg';
import group32 from '../assets/Group 32.svg';
import PeopleIcon from '../assets/Icon material-people-outline.svg'
import group9 from '../assets/Group 9.svg';
import group11 from '../assets/Group 11.svg';
import menuIcon from '../assets/Icon ionic-ios-menu.svg';
import group24 from '../assets/Group 24.svg';
import featherIcon from '../assets/Icon feather-settings.svg';
import bellIcon from '../assets/Icon feather-bell.svg';
import searchIcon from '../assets/Icon ionic-ios-search.svg';
import questionIcon from '../assets/Icon metro-question.svg';
import bug from '../assets/bug_7.png';

import { FaTimes } from "react-icons/fa";
// import { useSelector } from 'react-redux';


const Sidebar = (e) => {





  return (
    <nav className={`sidarBarcontainer ${e.sidebar === true ? "sidebarshow" : ""} w-[73px] h-[942px]`}>
      <span className='closeIcon' onClick={() => e.setSidebar(false)}>
        <FaTimes className='icon' />
      </span>
      <div className='container   flex flex-col rounded border border-gray-200 py-6 px-0'>
        <div className='flex flex-col items-center gap-y-5'>
          <img src={logo} alt="Logo" className='w-[60px] ' />
          <div className=' mt-3 mb-2 text-2xl rounded-full color-gray content-center flex justify-center items-center h-[40px] w-[40px]'>
            <h4 className='font-bold text-2xl'>C</h4>
          </div>
        </div>
        <div className=' flex flex-col items-center'>
          <img className="mt-4 w-[32px] cursor-pointer" src={group3} alt="Logo" />
          <img className="mt-3 w-[53px] cursor-pointer" src={group31} alt="Logo" />
          <img className="mt-3 w-[33.27px] cursor-pointer" src={group32} alt="Logo" />
          <img className="mt-3 w-[33px] cursor-pointer" src={PeopleIcon} alt="Logo" />
          <img className="mt-3 w-[29.13px] cursor-pointer" src={group9} alt="Logo" />
          <img className="mt-3 w-[34px] cursor-pointer " src={group11} alt="Logo" />
          <img className="mt-3 w-[25px] cursor-pointer" src={menuIcon} alt="Logo" />
        </div>
        <div className='border border-b-bloack w-[40px] mt-5 mb-2 mx-auto'></div>
        <div className='flex flex-col items-center justify-center'>

          <div className='relative mt-2 flex items-center flex-col'>
            <img className=" w-[25px]" src={group24} alt="Logo" />
            <span className='absolute -right-3 -top-3 span-red rounded-full text-white text-sm font-semibold text-center'>2</span>
          </div>
          <div className='flex justify-center items-center mt-3'>
            <img className="flex items-center flex-col justify-center" src={featherIcon} alt="Logo" />
          </div>

          <div className='relative flex items-center justify-center flex-col mt-4'>
            <img className="w-[25px]" src={bellIcon} alt="Logo" />
            <span className='absolute -right-4 -top-3 px-3 span-red rounded-full text-white text-sm font-semibold flex flex-col items-center justify-center'>25</span>
          </div>
          <img className="w-[25px] mt-3" src={searchIcon} alt="Logo" />
          <img className="w-[25px] mt-3" src={questionIcon} alt="Logo" />
          <img className="w-[25px] mt-3" src={bug} alt="Logo" />
        </div>

        <div>
        </div>

      </div>
    </nav>

  )
}

export default Sidebar
