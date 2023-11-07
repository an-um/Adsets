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

import {FaTimes} from "react-icons/fa";
// import { useSelector } from 'react-redux';


const Sidebar = (e) => {





  return (
    <nav className={`sidarBarcontainer ${e.sidebar===true?"sidebarshow":""}`}>
      <span className='closeIcon' onClick={()=>e.setSidebar(false)}>
     <FaTimes className='icon'/>
      </span>
    <div className='container w-[100%] flex flex-col rounded border-gray-50'>
      <div className='w-12 my-3'>
        <span> <img src={logo} alt="Logo" className='mx-3 '/> </span>
        <div className='text-2xl ml-4 mt-4 rounded-full opacity-100 color-gray content-center'>  
            <h4 className='ml-2'>C</h4>
        </div>  
      </div>
        <div className='m-3 mb-7 content-center'>
        <span> <img className="m-2 w-7" src={group3} alt="Logo" /> </span>
        <span> <img className="m-2 w-8" src={group31} alt="Logo" /> </span>
        <span> <img className="m-2 w-7" src={group32} alt="Logo" /> </span>
        <span> <img className="m-2 w-7" src={PeopleIcon} alt="Logo" /> </span>
        <span> <img className="m-2 w-7" src={group9} alt="Logo" /> </span>
        <span> <img className="m-2 w-7" src={group11} alt="Logo" /> </span>
        <span> <img className="m-2 w-7" src={menuIcon} alt="Logo" /> </span>
        </div>

        <div className='m-3 items-center'>
            <hr />
        <span className='relative flex '> 
            <img className="  m-3 w-7" src={group24} alt="Logo" /> 
            <span className='absolute -right-0 -top-1 span-red rounded-full pl-2'>2</span>
        </span>
        <span> <img className="m-3 w-7" src={featherIcon} alt="Logo" /> </span>
        <span className='relative flex '> 
          <img className="m-3 w-7" src={bellIcon} alt="Logo" />
          <span className='absolute -right-0 -top-1 span-red rounded-full pl-1.5'>25</span>
           </span>
        <span> <img className="m-3" src={searchIcon} alt="Logo" /> </span>
        <span> <img className="m-3" src={questionIcon} alt="Logo" /> </span>
        <span> <img className="m-3" src={bug} alt="Logo" /> </span>
        </div>

      <div>
      </div>

    </div>
    </nav>

  )
}

export default Sidebar
