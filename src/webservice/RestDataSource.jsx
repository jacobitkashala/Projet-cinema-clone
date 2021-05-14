import Axios from "axios";

export class RestDataSource {
  
  // all=[];
  // get data(all){
  //   this.all=all;
  // }
  // set data(){
  //   this.getData(d=>{
  //     this.data(d)
  //   })
  // }
  // static status(){
  //   return data?false:true
  // }

  constructor(base_url) {
    this.BASE_URL = base_url;
  }

  async sendRequest(methode, url, callback) {
    callback(
      (
        await Axios.request({
          method: methode,
          url: url,
        })
      ).data
    );
  }

  getData(callback) {
    try {
       this.sendRequest("get", this.BASE_URL, callback);
    } catch (error) {

      
    }
   
  }
  
}
