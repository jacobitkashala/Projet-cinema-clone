// import axios from "axios";
// import {useState, useEffect } from "react";

// export function useGetData(url){
//   console.log("useData true");
//   const [state,setState]=useState({Data:[],loading:true});

//   const f=( async () => {
//     const reponse = await axios(url);
//     let data=reponse.data.results
//       if(reponse.status===200){
//           setState({Data:data,loading:false,}) 
//           console.log('false');
//           console.log('ok data');
//       }else{
//           setState({Data:[],loading:true, })  
//       }
//   })();
// return [state.Data,state.loading];    
// }
// // export function useGetData(url){
// //     console.log("useData true");
// //     const [state,setState]=useState({Data:[],loading:true});
// //   useEffect(() => {
// //     (  async () => {
// //       const reponse = await axios(url);
// //       let data=reponse.data.results
// //         if(reponse.status===200){
// //             setState({Data:data,loading:false,}) 
// //             console.log('false');
// //             console.log('ok data');
// //         }else{
// //             setState({Data:[],loading:true, })  
// //         }
// //     })();
// //   }, []);
// //   return [state.Data,state.loading];    
// // }