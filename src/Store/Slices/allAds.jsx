import { createSlice,current} from '@reduxjs/toolkit'
import { GetAdSets, GetAllAds, GetCampaignData } from '../../utils/func';
const initialState = {
  campaigns:[],
  adSets:[],
  ads:[]
}
  
export const allAds = createSlice({
    name:"allAds",
     initialState,
     reducers:{

        changeState:(state,action)=>{
          if(action.payload==="campaigns")
          {
             return {
              campaign_tab:true,
              ad_set_tab:false,
              ads_tab:false 
            } ;
            }
            else if(action.payload==="ad_sets")
            {
            return {
              campaign_tab:false,
              ad_set_tab:true,
              ads_tab:false 
            } ;

          }
          else if(action.payload==="ads")
         {
          return {
            campaign_tab:false,
            ad_set_tab:false,
            ads_tab:true
          } ;
         }
         else{

           return current(state);
         }
        },
        setAds: async (state,action)=>{
            if(action.payload==="campaign_tab")
            {
               
                
           

                const temp =   await GetCampaignData();
                const tempnewState = {...initialState,campaigns:temp};
                return tempnewState;
          
            }
            else if(action.payload==="ad_set_tab")
            {
                const temp=    await GetAdSets()

               const tempnewState = {...initialState,adSets:temp};
               return tempnewState;

            }
           else if(action.payload==="ads_tab")
            {
                const temp= await   GetAllAds();
                const tempnewState = {...initialState,ads:temp};
                return tempnewState;
            }
            else 
            {
                return state;
            }

        },
        showFilteredAds:async (state,action)=>{
            if(action.payload.type==="campaign_tab")
            {
               const temp=   await GetCampaignData();
               const tempnewState = {...initialState,campaigns:temp};
               return tempnewState;
            }
           else  if(action.payload.type==="ad_set_tab")
            {
                const temp=   action.payload.data;
               const tempnewState = {...initialState,adSets:temp};
               return tempnewState;

            }
            else if(action.payload.type==="ads_tab")
            {
                const temp=   action.payload.data;
               const tempnewState = {...initialState,ads:temp};
               return tempnewState;
            }
            else 
            {
                return state;
            }

        },
      
     }

});

export const { 
  changeState, 
  setAds,
  showFilteredAds
  
  
} = allAds.actions;

export default allAds.reducer;