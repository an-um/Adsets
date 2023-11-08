import React, { useEffect, useState } from 'react'
import {FcInfo} from "react-icons/fc";
import {BsPinAngleFill} from "react-icons/bs";
import {BiSolidPencil,BiSolidDownArrow} from "react-icons/bi";
import {CgLoadbarSound} from "react-icons/cg";
import { generate_random, https_request } from '../utils/func';
import { useDispatch, useSelector } from "react-redux";
import { addCheckBoxColumns,checkAll,removeCheckBoxColumns, unCheckAll } from '../Store/Slices/checkBox';



function MainTable() {

const [allCampaign,setAllCampaign] = useState([]);

    const dispatch= useDispatch();
    const allAdsState = useSelector((state)=> state.allAds);
    const TabsState = useSelector((state)=> state.TabHandler);
    const checkedColumnsState = useSelector((state)=> state.checkBox);
// ======================= functions ===============
function getActiveTab()
{
  let currentTabName ="";
  Object.entries(TabsState).forEach( (st)=>{

    if(st[1]===true)
    {
      currentTabName = st[0];
    }



})

return currentTabName;

}
//=================================
function handleCheckBoxEvent(event,e)
{

  



    if (event.currentTarget.checked) {
      handleCheckBoxes(e.id,"chekced")
      
    } else {
      handleCheckBoxes(e.id,"unChekced")
      
        }
}
//=================================

//=================================
function GetAllCheckBoxComp(){
  

    if(getActiveTab()==="campaign_tab" && checkedColumnsState.campaigns[0]==="all")
    {
      return <>
      <input
      id={"allChecked"}
      type="checkbox"
      defaultChecked={true}

      onChange={(event)=>{



   if (event.currentTarget.checked) {
     handleCheckBoxes("all","checkAll")
     
   } else {
     handleCheckBoxes("all","unCheckAll")
     
       }
     }}
 className="w-[32px] h-[32] text-black-600 bg-white-100 border-blue-300 rounded focus:ring-gray-100  focus:ring-2  "
/>
   </>
    }
    else if(getActiveTab()==="ad_set_tab" && checkedColumnsState.adSets[0]==="all")
    {

      return <>
      <input
      id={"allChecked"}
      type="checkbox"
      defaultChecked={true}

      onChange={(event)=>{



   if (event.currentTarget.checked) {
     handleCheckBoxes("all","checkAll")
     
   } else {
     handleCheckBoxes("all","unCheckAll")
     
       }
     }}
 className="w-4 h-4 text-black-600 bg-white-100 border-blue-300 rounded focus:ring-gray-100   focus:ring-2  "
/>
   </>
  }
  else if(getActiveTab()==="ads_tab" && checkedColumnsState.ads[0]==="all")
  {

  return <>
      <input
      id={"allChecked"}
      type="checkbox"
      defaultChecked={true}

      onChange={(event)=>{



   if (event.currentTarget.checked) {
     handleCheckBoxes("all","checkAll")
     
   } else {
     handleCheckBoxes("all","unCheckAll")
     
       }
     }}
 className="w-4 h-4 text-black-600 bg-white-100 border-blue-300 rounded focus:ring-gray-100   focus:ring-2  "
/>
   </>
  }
  else 
  {
    return <>
    <input
    id={"allChecked"}
    type="checkbox"
    defaultChecked={false}

    onChange={(event)=>{



 if (event.currentTarget.checked) {
   handleCheckBoxes("all","checkAll")
   
 } else {
   handleCheckBoxes("all","unCheckAll")
   
     }
   }}
className="w-4 h-4 text-black-600 bg-white-100 border-blue-300 rounded focus:ring-gray-100   focus:ring-2  "
/>
 </>
  }
  
   
  
}
//=================================
    const renderTable= async ()=>{

      const AllAdsData = await allAdsState;
      if(TabsState.campaign_tab===true)
      {
        const newData =  AllAdsData.campaigns;
        if(newData===undefined)
        {
          return window.location.href="/";
        }
        setAllCampaign(newData);
         
      }
      else if(TabsState.ad_set_tab===true)
      {
        const newData = await AllAdsData.adSets;
        if(newData===undefined)
        {
          return window.location.href="/";
        }
        setAllCampaign(newData);
        
      }
      else if(TabsState.ads_tab===true)
      {

        const newData = await AllAdsData.ads;
        if(newData===undefined)
        {
          return window.location.href="/";
        }
        setAllCampaign(newData);
      }

    }
    // ----------------------------
  async  function handleCheckBoxes(id,condition)
    {
      if(condition === "chekced")
      {
        
      await dispatch(addCheckBoxColumns({
          type:getActiveTab(),
          id
        }))
      }
      else if(condition === "unChekced")
      {
      await dispatch(removeCheckBoxColumns({
         type:getActiveTab(),
         id
       }))

     }
else if ( condition ==="unCheckAll")
{
  await dispatch(unCheckAll({
    type:getActiveTab()

  }));
}
else if ( condition ==="checkAll")
{
  await dispatch(checkAll({
    type:getActiveTab()

  }));
}

    }
//  -------------------------- functions end ------------------

useEffect(()=>{

  renderTable();



},[allAdsState])





// ================= returing ===========================

return <>

   

 
  <div style={{
        border: "2px solid lightgrey",
        padding: "0px"
  }} 
   className="relative border-gray-300  p-0 my-2 overflow-x-auto  max-[1280px]:w-[1100px] max-[1080px]:w-[800px] max-[800px]:w-[100%]  min-[1100px]:max-w-[1220px]  min-[1400px]:max-w-[1420px] ">


  <table className="w-full text-sm text-left  [&_tr_td]:text-black-700  [&_tr_td]:border [&_tr_td]:border-gray-200 [&_tr_th]:border [&_tr_th]:border-gray-200   text-gray-500">
    <thead className="text-xs text-black [&_tr_th]:capitalize [&_tr_th]:text-base  uppercase bg-white">
      <tr>
        <th scope="col" className=" py-2 px-1">
          <div className="flex items-center justify-content-between">
            
              <GetAllCheckBoxComp/>
            
         
          
            <label htmlFor="checkbox-all-search" className="xl:text-[19px] font-semibold ms-2">
              Off/On
            </label>
          </div>
        </th>
        <th scope="col" style={{borderRight:"none"}} className="px-3 py-3">
          
          {TabsState.campaign_tab===true?"Campaigns":""}
          {TabsState.ad_set_tab===true?"Ad Sets":""}
          {TabsState.ads_tab===true?"Ads":""}
        </th>
        {TabsState.campaign_tab===true?

        <th scope="col"  className="px-3 py-3">
          Delivery
        </th>
        :""
        }
        {/* ================ Result Column Start===========  */}
        <th scope="col" style={{borderLeft:"none"}} className="  text-right border-l px-3 py-3">
          <div className="flex justify-content-center gap-x-1 flex-flex-nowrap items-center">

        <FcInfo className='d-inline  '/>  Result <BiSolidDownArrow className='d-inline text-gray-300 text-xs   ' />
          </div>
        </th>
        {/* ================ Result Column end ===========  */}
        {/* ================ Reach Column Start ===========  */}
        <th scope="col" className="px-3 py-3">
        <div className="flex justify-content-center gap-x-1 flex-flex-nowrap items-center">
          Reach
          <BiSolidDownArrow className='d-inline text-gray-300 text-xs ml-auto  ' />
          </div>
        </th>
        {/* ================ Reach Column End ===========  */}
        {/* ================ Frequency Column Start ===========  */}
        <th scope="col" className="px-3 py-3">
        <div className="flex justify-content-center gap-x-1 flex-flex-nowrap items-center">
          Frequency   <BiSolidDownArrow className='d-inline text-gray-300 text-xs ml-auto  ' />
          </div>
        </th>
        {/* ================ Frequency Column End ===========  */}
        {/* ================ cost per result Column start ===========  */}
        <th scope="col" className="px-3 min-w-[180px] py-3">
        <div className="flex justify-content-center gap-x-1 flex-flex-nowrap items-center">
          Cost Per Result  <BiSolidDownArrow className='d-inline text-gray-300 text-xs  ' />
          </div>
        </th>
        {/* ================ cost per result Column End ===========  */}
        <th scope="col" className="px-3 py-3 min-w-[180px] ">
          Budget  <BiSolidDownArrow className='d-inline text-gray-300 text-xs ml-auto  ' />
        </th>
        <th scope="col" className="px-3 py-3 min-w-[180px] ">
          Amount Spent  <BiSolidDownArrow className='d-inline text-gray-300 text-xs ml-auto  ' />
        </th>
       
      </tr>
    </thead>
    {/* table body startin  */}
    <tbody className='[&_tr_td]:text-right align-top [&_tr_td]:text-black [&_tr_td]:font-bold'>
      {/* ===================  ============================ */}
      {
        allCampaign==="undefined"  ?  ""
        :
        allCampaign.map((e,i)=>  <tr key={"key"+generate_random(4)} className={i%2===0?"bg-gray-100 ":"bg-white"}>
      
      {/* ========= check box starting ======  */}
        <td className=" px-2 py-1">
          <div className="flex items-center justify-content-between">
            
                {/* <GetCheckboxes   e={e} i={i}/> */}
                {
                  getActiveTab()==="campaign_tab"? <input 
            
                  key={"id"+generate_random(3)}
                  defaultChecked={
      
                    (checkedColumnsState.campaigns.includes(e.id) || checkedColumnsState.campaigns.includes("all") )? true:false
      
               } 
                  
                  onChange={(event)=>handleCheckBoxEvent(event,e)}
                      id={"checkbox"+i}
                      type="checkbox"
                      className="w-4 h-4 text-black-600 bg-white-100 border-blue-300 rounded focus:ring-gray-100   focus:ring-2  "
                      /> :""
                }
                {
                  getActiveTab()==="ad_set_tab"? <input 
            
                  key={"id"+generate_random(3)}
                  defaultChecked={
      
                    (checkedColumnsState.adSets.includes("all") || checkedColumnsState.adSets.includes(e.id))? true:false
      
               } 
                  
                  onChange={(event)=>handleCheckBoxEvent(event,e)}
                      id={"checkbox"+i}
                      type="checkbox"
                      className="w-4 h-4 text-black-600 bg-white-100 border-blue-300 rounded focus:ring-gray-100   focus:ring-2  "
                      /> :""
                }
                {
                  getActiveTab()==="ads_tab"? <input 
            
                  key={"id"+generate_random(3)}
                  defaultChecked={
      
                    (checkedColumnsState.ads.includes(e.id) || checkedColumnsState.ads.includes("all"))? true:false
      
               } 
                  
                  onChange={(event)=>handleCheckBoxEvent(event,e)}
                      id={"checkbox"+i}
                      type="checkbox"
                      className="w-4 h-4 text-black-600 bg-white-100 border-blue-300 rounded focus:ring-gray-100   focus:ring-2  "
                      /> :""
                }
              
        

            <label htmlFor="checkbox-table-search-1" className="flex items-center justify-content-between ml-2">
            
            


              {/* ====================
                     toggle button code starting
                    ====================== */}
            <label className="relative inline-flex items-center cursor-pointer">
  <input type="checkbox" defaultValue="" className="sr-only peer" />
  <div className="w-11 h-6 bg-gray-200  rounded-full peer  peer-checked:after:translate-x-full peer-checked:after:border-blue after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600" />
 

</label>
{/* ====================
                     toggle button code Ending
                    ====================== */}
            </label>
          </div>
        </td>
        {/* --------------------------- check box column end -----  */}
        {/* --------------------------- campaign name column start -----  */}
        <td style={{borderRight:"none"}} className="px-3 py-1 font-medium text-gray-900 whitespace-nowrap ">
          
          <div className="w-100 edit_options_container">
            <h3 className='text-[#4878C0] font-semibold text-left text-base'>
              {TabsState.campaign_tab===true?e.campaign_name:""}
              {TabsState.ad_set_tab===true?e.add_set_name:""}
              {TabsState.ads_tab===true?e.adds_name:""}
            </h3>


            <div className="editOptions mt-1 w-100 flex flex-row gap-x-2 [&_button_edit_buttons_icons]:text-black  [&_button]:flex [&_button]:items-center [&_button]:text-xs  ">
              <button className='hover:opacity-[0.5] '><CgLoadbarSound className='editBtnIcons text-base mr-1'/> View Chart</button>
              <button className='hover:opacity-[0.5]' ><BiSolidPencil className='editBtnIcons mr-1' /> Edit</button>
              <button className='hover:opacity-[0.5]' ><BsPinAngleFill  className='editBtnIcons mr-1'/> Pin</button>

            </div>

          </div>

        </td>
        {/* ======= compaign Name end =====  */}
        {/* ======= Delivery Status start =====  */}
        {TabsState.campaign_tab===true?


        <td style={{borderLeft:"none"}} className="px-3 py-1">

        <div className="w-100">
            <h3 className='text-[#707070] text-right text-base font-normal'>Off</h3>
         
          

          </div>
          
        </td>
        :""
}


        {/* ======= Delivery Status end =====  */}
        {/* ======= Result column start =====  */}
        <td style={{borderLeft:"none"}} className="px-3 py-1 w-[20%]">

        <div className="w-100">
            <h3 className='text-[#272727] text-right text-base font-semibold'>{e.result}</h3>
            <h4 className='text-[#707070] font-semibold text-right text-{#707070;}text-xs mt-1'>On Facebook Leads</h4>
          

          </div>
          
        </td>
        {/* ======= Result column End =====  */}
        {/* ======= Reach column Start =====  */}
        <td className="px-3 py-1">
        <h3 className='text-[#272727] text-right text-base font-semibold'>{e.reach}</h3>

          
        </td>
        {/* ======= Reach column End =====  */}
        {/* ======= Frequency column Start =====  */}
        <td className="px-3 py-1">
        <h3 className='text-[#272727] text-right text-base font-semibold'>{e.frequency}</h3>

        </td>
        {/* ======= Frequency column End =====  */}
        {/* ======= cost per result column Start =====  */}
        <td className="px-3 py-1 ">
        <h3 className='text-[#272727] text-right text-base font-semibold'>{e.cost_per_lead}<span>د۔ا</span>
        </h3>
          <h4 className='text-[#707070] mt-1 text-right font-light text-xs'>On Facebook Leads</h4>

          </td>
        {/* ======= cost per result column End =====  */}
        {/* ======= Buget column Start =====  */}
        <td className="px-3 py-1">
        <h3 className='text-[#272727] text-right text-base font-semibold'>{e.budget}<span>د۔ا</span>
          <h4 className='text-[#707070] mt-1 text-right font-light text-xs'>Daily</h4>
        </h3>
          </td>
        {/* ======= Budget column End =====  */}
        {/* ======= Amount spend column Start =====  */}
        <td className="px-3 py-1">
        <h3 className='text-black text-right text-base font-semibold'>{e.amount_spend}<span>د۔ا</span>
        </h3>
          </td>
        {/* ======= Amount Spent column End =====  */}
        
      </tr>)
      }
      {/* ----------------------- row ---------------- */}
    
      {/* ---------------------------------- */}
      
    </tbody>
  </table>
</div>



{/* 
========================================================================== 
                              Code Ended
========================================================================== 
*/}
  </>
}

export default MainTable