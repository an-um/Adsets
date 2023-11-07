import { createSlice,current} from '@reduxjs/toolkit'
const initialState = {
  campaigns:[],
  adSets:[],
  ads:[]
}
  
export const checkBox = createSlice({
    name:"checkBox",
     initialState,
     reducers:{

        
        addCheckBoxColumns:(state,action)=>{
            if(action.payload.type==="campaign_tab")
            {
               const tempid=   action.payload.id;
                  let tempCurrentState  =  JSON.parse(JSON.stringify(current(state)));
                   tempCurrentState.campaigns.push(tempid);
                   tempCurrentState.adSets = [];
                   tempCurrentState.ads =[]
                   tempCurrentState.campaigns = tempCurrentState.campaigns.reduce(function(a,b){
                    if (a.indexOf(b) < 0 ) a.push(b);
                    return a;
                  },[]);
               return tempCurrentState;
            }
            if(action.payload.type==="ad_set_tab")
            {
                const tempid=   action.payload.id;
                let tempCurrentState  =  JSON.parse(JSON.stringify(current(state)));
                 tempCurrentState.adSets.push(tempid);

                 
                 tempCurrentState.adSets = tempCurrentState.adSets.reduce(function(a,b){
                    if (a.indexOf(b) < 0 ) a.push(b);
                    return a;
                  },[]);
             return tempCurrentState;

            }
            if(action.payload.type==="ads_tab")
            {
                const tempid=   action.payload.id;
                  let tempCurrentState  =  JSON.parse(JSON.stringify(current(state)));
                   tempCurrentState.ads.push(tempid);

                   
                   tempCurrentState.ads = tempCurrentState.ads.reduce(function(a,b){
                    if (a.indexOf(b) < 0 ) a.push(b);
                    return a;
                  },[]);
               return tempCurrentState;
            }
            else 
            {
                return state;
            }

        },
        // ================= remove ===========
        removeCheckBoxColumns:(state,action)=>{
            if(action.payload.type==="campaign_tab")
            {
               const tempid=   action.payload.id;
                  let tempCurrentState  =  JSON.parse(JSON.stringify(current(state)));
                  tempCurrentState.campaigns = tempCurrentState.campaigns.filter((el)=>el!==tempid);
                  tempCurrentState.campaigns = tempCurrentState.campaigns.reduce(function(a,b){
                    if (a.indexOf(b) < 0 ) a.push(b);
                    return a;
                  },[]);


               return tempCurrentState;
            }
            if(action.payload.type==="ad_set_tab")
            {
                const tempid=   action.payload.id;
                let tempCurrentState  =  JSON.parse(JSON.stringify(current(state)));
                tempCurrentState.adSets = tempCurrentState.adSets.filter((el)=>el!==tempid);
                
                tempCurrentState.adSets = tempCurrentState.adSets.reduce(function(a,b){
                    if (a.indexOf(b) < 0 ) a.push(b);
                    return a;
                  },[]);

                 
             return tempCurrentState;

            }
            if(action.payload.type==="ads_tab")
            {
                const tempid=   action.payload.id;
                  let tempCurrentState  =  JSON.parse(JSON.stringify(current(state)));
                  tempCurrentState.ads = tempCurrentState.ads.filter((el)=>el!==tempid);

                  tempCurrentState.ads = tempCurrentState.ads.reduce(function(a,b){
                    if (a.indexOf(b) < 0 ) a.push(b);
                    return a;
                  },[]);

                   
               return tempCurrentState;
            }
            else 
            {
                return state;
            }

        },
        checkAll:(state,action)=>{
            console.log("state",action.payload.type);
            if(action.payload.type==="campaign_tab")            
            {
                const newobj ={...current(state),campaigns:["all"]};
         console.log(newobj);

                return newobj;
                
            }
          else  if(action.payload.type==="ad_set_tab")
            {
                const newobj ={...current(state),adSets:["all"]};
                console.log(newobj);
       
                       return newobj;
                
            }
          else  if(action.payload.type==="ads_tab")
            {
                const newobj ={...current(state),ads:["all"]};
                console.log(newobj);
   
                   return newobj;
              
            }
            
            else {
                return state;
            
            }

        },
        unCheckAll:(state,action)=>{
            if(action.payload.type==="campaign_tab")            
            {
                return {...current(state),campaigns:[]};
                
            }
           else if(action.payload.type==="ad_set_tab")
            {
                return {...current(state),adSets:[]};
                
            }
            else if(action.payload.type==="ads_tab")
           {
             return {...current(state),ads:[]};
           }
            else {
                return state;

            }
        }
      
     }

});

export const { 
    addCheckBoxColumns,
    removeCheckBoxColumns,
    unCheckAll,
    checkAll
  
  
} = checkBox.actions;

export default checkBox.reducer;