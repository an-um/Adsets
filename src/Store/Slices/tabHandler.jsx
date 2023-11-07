import { createSlice,current} from '@reduxjs/toolkit'
const initialState = {
  campaign_tab:true,
  ad_set_tab:false,
  ads_tab:false 
}
  
export const TabHandler = createSlice({
    name:"TabHandler",
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
        decreaseQuantity(state,action){
           
              const id  = action.payload;
              state.map((e)=>{
              if(Number(e.id)===Number(id) && Number(e.quantity) !== 1)
              {
                e.quantity-=1;

              }
            })
            return state;
                
            },
        increaseQuantity(state,action){
             const id  = action.payload;
             state.map((e)=>{
              if(Number(e.id)===Number(id))
              {
                e.quantity+=1;
              }
            })
            return state;
        
            },

    
        removeItem:(state,action)=>
        {
          const id  = action.payload;
          const NewState = state.filter((e)=>Number(e.id)!==Number(id));
         return NewState;
        },
        removeAll:(state)=>{}
     }

});

export const { 
  changeState, 
  
  removeItem, 
  removeAll,
  increaseQuantity,
  decreaseQuantity
  
} = TabHandler.actions;

export default TabHandler.reducer;