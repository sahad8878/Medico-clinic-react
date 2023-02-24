import axios from 'axios';
import baseUrl from '../Api/Api';

const instance = axios.create({
  baseURL: baseUrl,
});

// axios.interceptors.request.use((req)=>{
//   let tokenObj = JSON.parse(localStorage.getItem('clientToken'))
//   console.log(tokenObj,'----------------------------');
//   let token =tokenObj.clientToken
//   if(token){
//     req.headers.clientaccess = {clientToken} = JSON.parse(localStorage.getItem('clientToken'));
//   }
//   return req;
// })

export default instance;
