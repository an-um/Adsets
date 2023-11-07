import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { changeState } from '../Store/Slices/tabHandler';


function Colum() {
 

  const TabHandlerState = useSelector(state=>state.TabHandler);
  const dispatch = useDispatch();
  const checkedColumnsState = useSelector((state)=> state.checkBox);



  return (
    <>
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-4 mt-4">


<div onClick={()=>dispatch(changeState("campaigns"))}  class={`bg-[#FAFAFA] ${TabHandlerState.campaign_tab===true?"active":""} p-3 flex cursor-pointer tab_buttons_container items-center rounded-xl`}>
  <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5v11a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H1Zm0 0V2a1 1 0 0 1 1-1h5.443a1 1 0 0 1 .8.4l2.7 3.6H1Z"/>
  </svg>
  <b class="mx-2">Campaigns</b>
  {
        checkedColumnsState.campaigns.length===0?"":
        <span className="p-1 ml-auto px-3 rounded-full text-white bg-blue-500 ">
        {checkedColumnsState.campaigns.includes("all")?"All":checkedColumnsState.campaigns.length} Selected
        </span>
        
      }
</div>


<div onClick={()=>dispatch(changeState("ad_sets"))}   class={`  ${TabHandlerState.ad_set_tab===true?"active":""}  bg-[#FAFAFA] p-3 flex tab_buttons_container items-center rounded-xl`}>
  <svg class="text-blue-800 h-8" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"  viewBox="0 0 18 18">
    <path stroke="black" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6.143 1H1.857A.857.857 0 0 0 1 1.857v4.286c0 .473.384.857.857.857h4.286A.857.857 0 0 0 7 6.143V1.857A.857.857 0 0 0 6.143 1Zm10 0h-4.286a.857.857 0 0 0-.857.857v4.286c0 .473.384.857.857.857h4.286A.857.857 0 0 0 17 6.143V1.857A.857.857 0 0 0 16.143 1Zm-10 10H1.857a.857.857 0 0 0-.857.857v4.286c0 .473.384.857.857.857h4.286A.857.857 0 0 0 7 16.143v-4.286A.857.857 0 0 0 6.143 11Zm10 0h-4.286a.857.857 0 0 0-.857.857v4.286c0 .473.384.857.857.857h4.286a.857.857 0 0 0 .857-.857v-4.286a.857.857 0 0 0-.857-.857Z"/>
  </svg>
  <b class="ml-2 " >Ad Sets 
  {checkedColumnsState.campaigns.includes("all")?" for all Campaigns":""}
  {(checkedColumnsState.campaigns.length!==0 && checkedColumnsState.campaigns.includes("all")!==true )?` for ${checkedColumnsState.campaigns.length} Campaign`:""}

  </b>
</div>

 
<div onClick={()=>dispatch(changeState("ads"))}   class={`bg-[#FAFAFA] p-3 rounded-xl flex tab_buttons_container  items-center ${TabHandlerState.ads_tab===true?"active":""}`}>
  <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="20" height="18" fill="none" viewBox="0 0 20 18">
    <path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M1 7h18M4 4h.01M7 4h.01M10 4h.01M3 17h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2H3a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2Z"/>
  </svg>
  <b class="ml-2">Ads 
  {checkedColumnsState.campaigns.includes("all")?" for all Campaigns":""}
  {(checkedColumnsState.campaigns.length!==0 && checkedColumnsState.campaigns.includes("all")!==true )?` for ${checkedColumnsState.campaigns.length} Campaign`:""}
  </b>
</div>

</div>

    <div className="flex flex-wrap mt-0 mb-2 items-center bg-white-200 w-full ">
  <div className="w-full ">
<div className='flex inline-flex space-x-20'>
<div className=' table_filter_button_container flex flex-wrap items-center'>
<button className='bg-[#60BF09] rounded-lg pl-8 pr-4 py-2 text-white'>Create</button>
<div className='flex gap-1'>
  <button className='bg-[#E6E6E6] p-2 rounded-l-lg'><svg class="h-[22px] w-[22px]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 20">
    <path d="M2 18V5.828a4.979 4.979 0 0 1 .332-1.761A.992.992 0 0 0 2 4a2 2 0 0 0-2 2v12a1.97 1.97 0 0 0 1.934 2h8.1a1.99 1.99 0 0 0 1.994-2H2ZM9 5V.13a2.98 2.98 0 0 0-1.293.749L4.879 3.707A2.98 2.98 0 0 0 4.13 5H9Z"/>
    <path d="M14.066 0H11v5a2 2 0 0 1-2 2H4v7a1.97 1.97 0 0 0 1.934 2h8.132A1.97 1.97 0 0 0 16 14V2a1.97 1.97 0 0 0-1.934-2Z"/>
  </svg>
  </button>
  <button className='bg-[#E6E6E6] p-2 rounded-r-lg'><svg class="h-[22px] w-[9px] " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 10">
    <path d="M15.434 1.235A2 2 0 0 0 13.586 0H2.414A2 2 0 0 0 1 3.414L6.586 9a2 2 0 0 0 2.828 0L15 3.414a2 2 0 0 0 .434-2.179Z"/>
  </svg>
  </button>
  </div>
  <div className='flex gap-1'>
  <button  className='bg-[#E6E6E6] p-2 rounded-l-lg'><svg class="h-[20px] w-[20px]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
    <path d="M12.687 14.408a3.01 3.01 0 0 1-1.533.821l-3.566.713a3 3 0 0 1-3.53-3.53l.713-3.566a3.01 3.01 0 0 1 .821-1.533L10.905 2H2.167A2.169 2.169 0 0 0 0 4.167v11.666A2.169 2.169 0 0 0 2.167 18h11.666A2.169 2.169 0 0 0 16 15.833V11.1l-3.313 3.308Zm5.53-9.065.546-.546a2.518 2.518 0 0 0 0-3.56 2.576 2.576 0 0 0-3.559 0l-.547.547 3.56 3.56Z"/>
    <path d="M13.243 3.2 7.359 9.081a.5.5 0 0 0-.136.256L6.51 12.9a.5.5 0 0 0 .59.59l3.566-.713a.5.5 0 0 0 .255-.136L16.8 6.757 13.243 3.2Z"/>
  </svg>
  <span className='font-bold ps-1'>Edit</span>
  </button>
<button className='bg-[#E6E6E6] p-2 rounded-r-lg' >
  <svg class=" h-[22px] w-[9px]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 10">
    <path d="M15.434 1.235A2 2 0 0 0 13.586 0H2.414A2 2 0 0 0 1 3.414L6.586 9a2 2 0 0 0 2.828 0L15 3.414a2 2 0 0 0 .434-2.179Z"/>
  </svg>
  </button>
  </div>
 <button className='bg-[#E6E6E6] p-2 rounded-lg '>
  <svg className='w-[21px] h-[21px]' xmlns="http://www.w3.org/2000/svg" width="40" height="21.13" viewBox="0 0 19.557 21.13">
 <path id="Icon_ionic-ios-flask" data-name="Icon ionic-ios-flask" d="M23.458,18.938,17.53,9.059a.188.188,0,0,1-.03-.107V5a.2.2,0,0,1,.2-.2.611.611,0,0,0,.61-.61v-.2a.611.611,0,0,0-.61-.61H10.78a.611.611,0,0,0-.61.61v.2a.611.611,0,0,0,.61.61.2.2,0,0,1,.2.2V8.957a.183.183,0,0,1-.03.1L5.086,18.938a4.716,4.716,0,0,0-.615,2.316A3.267,3.267,0,0,0,7.783,24.5H20.816a3.178,3.178,0,0,0,3.21-3.251A4.7,4.7,0,0,0,23.458,18.938Zm-14-3.373a.407.407,0,0,1-.35-.615l3.073-5.166a1.638,1.638,0,0,0,.229-.828V5c0-.071-.005-.137-.01-.2h3.693a1.328,1.328,0,0,0-.01.2V8.957a1.6,1.6,0,0,0,.234.833l3.068,5.161a.407.407,0,0,1-.35.615Z" transform="translate(-4.47 -3.375)" fill="#272727"/>
</svg>
<b className='text-black ps-2'>A/BTest</b>
</button>
  <button className='bg-[#E6E6E6] p-2 rounded-lg '>
    <svg class="w-[22px] h-[22px]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 20">
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 2h4a1 1 0 0 1 1 1v15a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h4m6 0a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1m6 0v3H6V2M5 5h8m-8 5h8m-8 4h8"/>
  </svg></button>
 <button className='bg-[#E6E6E6] p-2 rounded-lg'> 
 <svg class="w-[22px] h-[22px]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 14">
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 7 1 4l3-3m0 12h6.5a4.5 4.5 0 1 0 0-9H2"/>
  </svg></button> 
 
  <button className='bg-[#E6E6E6] p-2 rounded-lg'>
    <svg class="w-[22px] h-[22px]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
    <path d="M17 4h-4V2a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v2H1a1 1 0 0 0 0 2h1v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V6h1a1 1 0 1 0 0-2ZM7 2h4v2H7V2Zm1 14a1 1 0 1 1-2 0V8a1 1 0 0 1 2 0v8Zm4 0a1 1 0 0 1-2 0V8a1 1 0 0 1 2 0v8Z"/>
  </svg></button>
  <button className='bg-[#E6E6E6] p-2 rounded-lg'>
    <svg class="w-[22px] h-[22px]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
    <path d="M14 2a3.963 3.963 0 0 0-1.4.267 6.439 6.439 0 0 1-1.331 6.638A4 4 0 1 0 14 2Zm1 9h-1.264A6.957 6.957 0 0 1 15 15v2a2.97 2.97 0 0 1-.184 1H19a1 1 0 0 0 1-1v-1a5.006 5.006 0 0 0-5-5ZM6.5 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM8 10H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Z"/>
  </svg></button>
  <button className='bg-[#E6E6E6] p-2 rounded-lg'>
    <svg class="w-[22px] h-[22px] ml-3 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 14">
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 10H1m0 0 3-3m-3 3 3 3m1-9h10m0 0-3 3m3-3-3-3"/>
  </svg></button>
  <b className='bg-[#E6E6E6] p-2 rounded-lg'>Rules</b><button className='bg-[#E6E6E6] p-2 rounded-lg'>
    <svg class="w-[9px] h-[20px]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 10">
    <path d="M15.434 1.235A2 2 0 0 0 13.586 0H2.414A2 2 0 0 0 1 3.414L6.586 9a2 2 0 0 0 2.828 0L15 3.414a2 2 0 0 0 .434-2.179Z"/>
  </svg></button>
  
  <b className='ml-20'>Setup</b><label class="cursor-pointer">
 <div class="relative w-12 h-6 bg-gray-400 rounded-full shadow-inner transition duration-300 ease-in-out">

  <input type="checkbox" class="hidden" id="toggle" />
            <div class="absolute left-0 top-0 w-6 h-6 bg-white rounded-full shadow-md transform translate-x-0 transition duration-300 ease-in-out"></div>
      
        </div>
    </label>
    <button className='bg-[#E6E6E6] p-2 rounded-lg'>
      <svg class="w-[15px] h-[20px] ml-3 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
    <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h3V0H2Zm16 0h-3v16h3a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5 0H7v16h6V0Z"/>
  </svg></button>
  <button className='bg-[#E6E6E6] p-2 rounded-lg'><svg class="h-[22px] w-[9px] text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 10">
    <path d="M15.434 1.235A2 2 0 0 0 13.586 0H2.414A2 2 0 0 0 1 3.414L6.586 9a2 2 0 0 0 2.828 0L15 3.414a2 2 0 0 0 .434-2.179Z"/>
  </svg></button>
  <button className='bg-[#E6E6E6] p-2 rounded-lg'>
    <svg class="h-[22px] w-[15px]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 1h8M1 5h12M3 9h8M1 13h12"/>
  </svg></button>
  <button className='bg-[#E6E6E6] p-2 rounded-lg'><svg class="h-[22px] w-[9px] text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 10">
    <path d="M15.434 1.235A2 2 0 0 0 13.586 0H2.414A2 2 0 0 0 1 3.414L6.586 9a2 2 0 0 0 2.828 0L15 3.414a2 2 0 0 0 .434-2.179Z"/>
  </svg></button>
  <b className='bg-[#E6E6E6] p-2 rounded-lg'>Reports</b>
  <button className='bg-[#E6E6E6] p-2 rounded-lg'><svg class="h-[22px] w-[9px] ml-2 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 10">
   <path d="M15.434 1.235A2 2 0 0 0 13.586 0H2.414A2 2 0 0 0 1 3.414L6.586 9a2 2 0 0 0 2.828 0L15 3.414a2 2 0 0 0 .434-2.179Z"/>
  </svg></button>
</div>


  



     

</div>
   


  
</div>
</div>


  

  





    </>
  )
}

export default Colum