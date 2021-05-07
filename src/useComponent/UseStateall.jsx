import axios from "axios";
import {  useState, useEffect } from "react";


export function useGetData(url){
    const [state,setState]=useState({Data:[],loading:true});
    
  useEffect(() => {
    (  async () => {
      const reponse = await axios(url);
      let data=reponse.data.results
    // console.log(state);
        if(reponse.status==200){
            setState({
                Data:data,
                loading:false,
            }) 
            
        }else{
            setState({
                Data:[],
                loading:true,
            })  
        }
    })();
  }, []);
 return [state.Data,state.loading];  


  
}