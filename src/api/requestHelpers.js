import  axios  from "axios";


const api=axios.create({
    baseURL:"https://plan-backend.vercel.app/",
    // baseURL:"http://localhost:5000",
    // baseURL:"https://43c1-2405-201-d03f-61ee-bce8-a669-5154-76a.ngrok-free.app",
    timeout:10000,
})


api.interceptors.request.use(function (config) {
  let access=localStorage.getItem("accessToken")
// let refresh=localStorage.getItem("refreshToken")

  // Do something before request is sent
  config.headers.cookies = `token=${access}`;
  config.headers["Authorization"] = `Bearer ${access}`;
  // config.headers["ngrok-skip-browser-warning"] = true;


  return config;
}, function (error){
  // Do something with request error
  return Promise.reject(error);
});



// Add a response interceptor
api.interceptors.response.use(function (response) {
  // Any status code that lie within the range of 2xx cause this function to trigger
  // Do something with response data
  return response;
}, async (error)=> {
  // Any status codes that falls outside the range of 2xx cause this function to trigger
  // Do something with response error
  console.log(error)
if(error?.response?.status===401){
// let refreshToken=JSON.parse(localStorage?.getItem('refreshToken'))
// console.log(refreshToken)
// let payload={
//   refresh_token:refreshToken
// }

// let apiResponse=await axios.post("/users/refresh",payload)
// localStorage.setItem("accessToken",JSON.stringify(apiResponse.data.access_token))
// localStorage.setItem("refreshToken",JSON.stringify(apiResponse.data.refresh_token))

// error.config.headers["Authorization"]=`bearer ${apiResponse.data.access_token}`
// return axios(error.config);
localStorage.clear();

}
else{
  console.log(error)
  
  return Promise.reject(error)
  
}
});



export const hitApi = (method, url, data) => {
    return api({
      method: method,
      url: url,
       data
    }).then((response) => {
      return response;
    }).catch((error) => {
      return error;
    });
  }

export async function uploadImage(url, data, config = {}) {
  return api
    // .post(url, { ...data }, { ...config })
    .post(url, data , { ...config })
    .then(response => response.data)
}