import MainTable from "./components/MainTable";
import "./App.css";
import Sidebar from "./components/Sidebar";
import { Navbar } from "./components/Navbars/Navbar";
import Colum from "./components/Cloumn";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { setAds, showFilteredAds } from "./Store/Slices/allAds";
import { GetCampaignData, filterData, https_request } from "./utils/func";

function App() {


    const dispatch= useDispatch();
    const TabsState = useSelector((state)=> state.TabHandler);
    const allAdsState = useSelector((state)=> state.allAds);
    const checkedColumnsState = useSelector((state)=> state.checkBox);
    const [sidebar,setSidebar] = useState(false);
// ================================
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
// ================================
  const  starter = async ()=>{

    if(getActiveTab()==="ad_set_tab")
    {
          if(checkedColumnsState.campaigns[0]!=="all" && checkedColumnsState.campaigns.length!==0)
    {
         const tempData = await GetCampaignData();
      const filter_Data = filterData("adsets",checkedColumnsState.campaigns,tempData);

      await dispatch(showFilteredAds({
        type:getActiveTab(),
        data: filter_Data
      }));

    }
    else
    {
      await dispatch(setAds(getActiveTab()));

    }
      

    }
   else if(getActiveTab()==="ads_tab")
    {
    if(checkedColumnsState.adSets[0]!=="all" && checkedColumnsState.adSets.length!==0 )
    {
         const tempData = await https_request("https://devc.easylifetraders.com/api/adsets","get");
        //  ========================
        const filter_Data = filterData("ads",checkedColumnsState.adSets,tempData);

      await dispatch(showFilteredAds({
        type:getActiveTab(),
        data: filter_Data
      }));
      
        //  ========================

    }
    else if((checkedColumnsState.adSets.includes("all")))
    {
      // if(checkedColumnsState.campaigns.length!==0)   
      // {
        const tempData = await GetCampaignData();
        const  getFilteredCampaigns = tempData.filter((camp)=>{

          if(checkedColumnsState.campaigns.includes("all"))
          {
            return camp;
  
          }
          else if(checkedColumnsState.campaigns.includes(camp.id))
          {
           return camp;
          }else{
           return null;
          }
     })
     
       //  ======================================
     
   let tempAdsets=[];
   getFilteredCampaigns.forEach((el)=>{
      tempAdsets = [...tempAdsets,...el.addsets];
    })
  //  ======================================
      const filter_Data = filterData("ads",checkedColumnsState.adSets,tempAdsets);

      await dispatch(showFilteredAds({
        type:getActiveTab(),
        data: filter_Data
      }));
     
    // }
    }
    else if((checkedColumnsState.adSets.length===0 && checkedColumnsState.campaigns.length!==0)  )
    {
      const tempData = await GetCampaignData();
      //  ======================================
      const  getFilteredCampaigns = tempData.filter((camp)=>{

        if(checkedColumnsState.campaigns.includes("all"))
        {
          return camp;

        }
        else if(checkedColumnsState.campaigns.includes(camp.id))
        {
         return camp;
        }else{
         return null;
        }
   })
   let tempAdsets=[];
   getFilteredCampaigns.forEach((el)=>{
      tempAdsets = [...tempAdsets,...el.addsets];
    })
  //  ======================================
      const filter_Data = filterData("ads",checkedColumnsState.adSets,tempAdsets);

      await dispatch(showFilteredAds({
        type:getActiveTab(),
        data: filter_Data
      }));
    }
    else
    {
      await dispatch(setAds(getActiveTab()));

    }
      

    }
    else 
    {
      await dispatch(setAds(getActiveTab()));

    }
    //     Object.entries(TabsState).forEach(async (st)=>{

    //             if(st[1]===true)
    //             {
    //               console.log(st[0]);
    //               await dispatch(setAds(st[0]));
    //             }     
      
    // })

  }




 useEffect(()=>{
  starter();
 },[TabsState])






  return (
    <>
    <div className=" parent_wrapper flex flex-row"> 
 
 
      <Sidebar  setSidebar={setSidebar} sidebar={sidebar} />
      <div className="w-[100%]  pb-5 inner_wrapper">
 <Navbar setSidebar={setSidebar} sidebar={sidebar}/>
  <Colum setSidebar={setSidebar} sidebar={sidebar} />
      <MainTable/>
      </div>
    </div>
    </>
  );
}

export default App;
