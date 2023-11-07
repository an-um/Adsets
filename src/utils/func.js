const host_address = "https://devc.easylifetraders.com";


async function https_request(root, type, data, cond = false) {
    try {
      
   
    let res;
    if (cond) {
  
      res = await fetch(root, {
        method: type,
        headers: { Accept: "application/json", "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify(data)
  
      })
    } else {
      // console.log("data no");
  
      res = await fetch(root, {
        method: type,
        headers: { Accept: "application/json", "Content-Type": "application/json" },
        // credentials: "include"
      })
    }
  
    res = await res.json();
    return res;
  } catch (error) {
    console.log(error);   
    return {
      status:false,
      msg:"Internal Server Error"
    }
  }
  }

// ========================
const GetCampaignData=async ()=>{
  try {
   
    const response = await https_request(host_address+"/api/campaign","GET");

    if(response.status!==false)
    {
     
     return response;
    }


    

   } catch (error) 
   {
     console.log("error",error);
    
   }

}
// ====================================
const GetAdSets = async ()=>{
  try {
   
   
    const response = await https_request(host_address+"/api/adsets","GET");

    // result": "1",
    // "reach": "1532",
    // "frequency": "1.31",
    // "cost_per_lead": "184.64",
    // "budget": "1000",
    // "amount_spend": "184.64",


    if(response.status!==false)
    {
      // console.log(response);
      // loop on ads sets
      let adsets = [];
      // const draftAdset= {

      // }
      const draftAttributes ={
        result: 0,
reach: 0,
frequency: 0,
cost_per_lead: 0,
budget: 0,
amount_spend: 0,
  }
      let tempAttributes ={
            ...draftAttributes
      };

      // for (let index = 0; index < response.length; index++) {
      //   const e = response[index];
        

      response.forEach((e) => 
      {
        // loop on ads
        e.adds.forEach((ads_ele,i)=>{

          ads_ele.attributes.forEach((attri)=>{

            if(attri.reach !==null)
            {
              const temp = (Number(attri.reach)+Number(tempAttributes.reach)).toFixed(2);
              tempAttributes = { ...tempAttributes,reach:temp  };
            }
            if(attri.result !==null)
            {
              const temp = (Number(attri.result)+Number(tempAttributes.result)).toFixed(2);
              tempAttributes = { ...tempAttributes,result:temp};
            }
            if(attri.frequency !==null)
            {
              const temp = (Number(attri.frequency)+Number(tempAttributes.frequency)).toFixed(2);
              tempAttributes = { ...tempAttributes,frequency:temp  };
            }
            if(attri.cost_per_lead !==null)
            {
              const temp = (Number(attri.cost_per_lead)+Number(tempAttributes.cost_per_lead)).toFixed(2);
              tempAttributes = { ...tempAttributes,cost_per_lead: temp};
            }
            if(attri.budget !==null)
            {
              const temp = (Number(attri.budget)+Number(tempAttributes.budget)).toFixed(2);
              tempAttributes = { ...tempAttributes,budget: temp };
            }
            if(attri.amount_spend !==null)
            {
              const temp = (Number(attri.amount_spend)+Number(tempAttributes.amount_spend)).toFixed(2);
              tempAttributes = { ...tempAttributes,amount_spend: temp };
            }

          })

        })
        

        const tempadset = {
          add_set_name: e.add_set_name,
          id:e.id,
          ...tempAttributes
        }
        adsets.push(tempadset);
        tempAttributes = {...draftAttributes};

      });
    // }
        //  console.log(adsets);
     
     return adsets;
    }


    

   } catch (error) 
   {
     console.log("error",error);
    
   }

}
// =========================================
function fetchAdsetsOnly(campaignsData)
{
  console.log(campaignsData);
    // console.log(response);
    // loop on ads sets
    let adsets = [];
    // const draftAdset= {

    // }
    const draftAttributes ={
      result: 0,
reach: 0,
frequency: 0,
cost_per_lead: 0,
budget: 0,
amount_spend: 0,
}
    let tempAttributes ={
          ...draftAttributes
    };

    // for (let index = 0; index < response.length; index++) {
    //   const e = response[index];
      

    campaignsData.forEach((e) => 
    {
      // loop on ads
      e.adds.forEach((ads_ele,i)=>{

        ads_ele.attributes.forEach((attri)=>{

          if(attri.reach !==null)
          {
            const temp = (Number(attri.reach)+Number(tempAttributes.reach)).toFixed(2);
            tempAttributes = { ...tempAttributes,reach:temp  };
          }
          if(attri.result !==null)
          {
            const temp = (Number(attri.result)+Number(tempAttributes.result)).toFixed(2);
            tempAttributes = { ...tempAttributes,result:temp};
          }
          if(attri.frequency !==null)
          {
            const temp = (Number(attri.frequency)+Number(tempAttributes.frequency)).toFixed(2);
            tempAttributes = { ...tempAttributes,frequency:temp  };
          }
          if(attri.cost_per_lead !==null)
          {
            const temp = (Number(attri.cost_per_lead)+Number(tempAttributes.cost_per_lead)).toFixed(2);
            tempAttributes = { ...tempAttributes,cost_per_lead: temp};
          }
          if(attri.budget !==null)
          {
            const temp = (Number(attri.budget)+Number(tempAttributes.budget)).toFixed(2);
            tempAttributes = { ...tempAttributes,budget: temp };
          }
          if(attri.amount_spend !==null)
          {
            const temp = (Number(attri.amount_spend)+Number(tempAttributes.amount_spend)).toFixed(2);
            tempAttributes = { ...tempAttributes,amount_spend: temp };
          }

        })

      })
      

      const tempadset = {
        add_set_name: e.add_set_name,
        id:e.id,
        ...tempAttributes
      }
      adsets.push(tempadset);
      tempAttributes = {...draftAttributes};

    });
  // }
      //  console.log(adsets);
   
   return adsets;
  
}
function fetchAdsOnly(adsData)
{
  // loop on ads sets
  let allAds = [];
     
  const draftAttributes ={
    result: 0,
reach: 0,
frequency: 0,
cost_per_lead: 0,
budget: 0,
amount_spend: 0,
}
  let tempAttributes ={
        ...draftAttributes
  };


    

  
    // loop on ads
    adsData.forEach((ads_ele,i)=>{

      ads_ele.attributes.forEach((attri)=>{

        if(attri.reach !==null)
        {
          const temp = (Number(attri.reach)+Number(tempAttributes.reach)).toFixed(2);
          tempAttributes = { ...tempAttributes,reach:temp  };
        }
        if(attri.result !==null)
        {
          const temp = (Number(attri.result)+Number(tempAttributes.result)).toFixed(2);
          tempAttributes = { ...tempAttributes,result:temp};
        }
        if(attri.frequency !==null)
        {
          const temp = (Number(attri.frequency)+Number(tempAttributes.frequency)).toFixed(2);
          tempAttributes = { ...tempAttributes,frequency:temp  };
        }
        if(attri.cost_per_lead !==null)
        {
          const temp = (Number(attri.cost_per_lead)+Number(tempAttributes.cost_per_lead)).toFixed(2);
          tempAttributes = { ...tempAttributes,cost_per_lead: temp};
        }
        if(attri.budget !==null)
        {
          const temp = (Number(attri.budget)+Number(tempAttributes.budget)).toFixed(2);
          tempAttributes = { ...tempAttributes,budget: temp };
        }
        if(attri.amount_spend !==null)
        {
          const temp = (Number(attri.amount_spend)+Number(tempAttributes.amount_spend)).toFixed(2);
          tempAttributes = { ...tempAttributes,amount_spend: temp };
        }

      })

      const tempadset = {
        adds_name: ads_ele.adds_name,
        id:ads_ele.id,
        ...tempAttributes
      }
      allAds.push(tempadset);
      tempAttributes = {...draftAttributes};
    })
    



// }
     console.log(allAds);
 
 return allAds;
  
}
// =========================================
function filterData(type,id,sourceData)
{

  if(type==="adsets")
  {
    const  Newdata = sourceData.filter((camp)=>{
         if(id.includes(camp.id))
         {
          return camp;
         }else{
          return null;
         }
    })
    let tempAdsets=[];
    Newdata.forEach((el)=>{
      tempAdsets = [...tempAdsets,...el.addsets];
    })

    const adsets = fetchAdsetsOnly(tempAdsets);

    console.log(adsets,"filterData");
    return adsets;

  }
  else if(type==="ads")
  {
    const  Newdata = sourceData.filter((camp)=>{
          if(id.length===0)
          {
            return camp;
          }
          else if(id.includes("all"))
          {
            
            return camp;
          }
         else if(id.includes(camp.id))
         {
          return camp;
         }else{
          return null;
         }
    })

    let tempAdsets=[];
    Newdata.forEach((el)=>{
      tempAdsets = [...tempAdsets,...el.adds];
    })

    const adsets = fetchAdsOnly(tempAdsets);

    return adsets;

  }

}
// =========================================
function generate_random(n) {
  var add = 1, max = 12 - add;   // 12 is the min safe number Math.random() can generate without it starting to pad the end with zeros.   

  if (n > max) {
    return generate_random(max) + generate_random(n - max);
  }

  max = Math.pow(10, n + add);
  var min = max / 10; // Math.pow(10, n) basically
  var number = Math.floor(Math.random() * (max - min + 1)) + min;

  return ("" + number).substring(add);
}
// =========================================
const GetAllAds = async ()=>{
  try {
   
    const response = await https_request(host_address+"/api/ads","GET");

    // result": "1",
    // "reach": "1532",
    // "frequency": "1.31",
    // "cost_per_lead": "184.64",
    // "budget": "1000",
    // "amount_spend": "184.64",


    if(response.status!==false)
    {
      // loop on ads sets
      let allAds = [];
     
      const draftAttributes ={
        result: 0,
reach: 0,
frequency: 0,
cost_per_lead: 0,
budget: 0,
amount_spend: 0,
  }
      let tempAttributes ={
            ...draftAttributes
      };

    
        

      
        // loop on ads
        response.forEach((ads_ele,i)=>{

          ads_ele.attributes.forEach((attri)=>{

            if(attri.reach !==null)
            {
              const temp = (Number(attri.reach)+Number(tempAttributes.reach)).toFixed(2);
              tempAttributes = { ...tempAttributes,reach:temp  };
            }
            if(attri.result !==null)
            {
              const temp = (Number(attri.result)+Number(tempAttributes.result)).toFixed(2);
              tempAttributes = { ...tempAttributes,result:temp};
            }
            if(attri.frequency !==null)
            {
              const temp = (Number(attri.frequency)+Number(tempAttributes.frequency)).toFixed(2);
              tempAttributes = { ...tempAttributes,frequency:temp  };
            }
            if(attri.cost_per_lead !==null)
            {
              const temp = (Number(attri.cost_per_lead)+Number(tempAttributes.cost_per_lead)).toFixed(2);
              tempAttributes = { ...tempAttributes,cost_per_lead: temp};
            }
            if(attri.budget !==null)
            {
              const temp = (Number(attri.budget)+Number(tempAttributes.budget)).toFixed(2);
              tempAttributes = { ...tempAttributes,budget: temp };
            }
            if(attri.amount_spend !==null)
            {
              const temp = (Number(attri.amount_spend)+Number(tempAttributes.amount_spend)).toFixed(2);
              tempAttributes = { ...tempAttributes,amount_spend: temp };
            }

          })

          const tempadset = {
            adds_name: ads_ele.adds_name,
            id:ads_ele.id,
            ...tempAttributes
          }
          allAds.push(tempadset);
          tempAttributes = {...draftAttributes};
        })
        


    
    // }
     
     return allAds;
    }


    

   } catch (error) 
   {
     console.log("error",error);
    
   }

}


// ============================
 const copyObject = (data) => {
  return data.map((item) => ({
      ...item,
      selected: false       
  }));
 }

  export {
    generate_random,
    https_request,
    GetAdSets,
    GetAllAds,
    GetCampaignData,
    copyObject,
    filterData
  };