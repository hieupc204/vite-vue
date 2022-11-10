import axios from 'axios'
// create an axios instance
const service = axios.create({
  // baseURL : "https://jsonplaceholder.typicode.com",
  baseURL: process.env.VUE_APP_API, // url = base url + request url
  // withCredentials: true, // send cookies when cross-domain requests
  timeout: 5000 // request timeout
})

// request interceptor
service.interceptors.request.use(
  config => {
    config.headers['Access-Control-Allow-Origin'] = '*';
        config.headers['Content-Type'] = 'application/json';
        config.headers['brand-code'] = 'qc';
        config.headers['Authorization'] = 'Bearer' + localStorage.getItem('token');
    return config
  },
  error => {
    // do something with request error
    console.log(error) // for debug
    return Promise.reject(error)
  }
)

// response interceptor
service.interceptors.response.use(
  /**
   * If you want to get http information such as headers or status
   * Please return  response => response
  */

  /**
   * Determine the request status by custom code
   * Here is just an example
   * You can also judge the status by HTTP Status Code
   */
  response => {
   
    const res = response.data;
    return res;
    console.log(res); // for
    if(res.ErrorCode == 0){
        return res;
    }else {
        store.dispatch("ERROR/popErrors", {error_code : res.ErrorCode, message:  res.ErrorDescription});
    }
   
    
    // if the custom code is not 20000, it is judged as an error.
    // if (res.ErrorCode !== 0) {
    //     Swal(
    //         {
    //             icon: 'error',
    //             title: res.ErrorDescription,
    //         }
    //     );

    // //   // 50008: Illegal token; 50012: Other clients logged in; 50014: Token expired;
    //   if (res.code === 50008 || res.code === 50012 || res.code === 50014) {
    //     // to re-login
    //     MessageBox.confirm('You have been logged out, you can cancel to stay on this page, or log in again', 'Confirm logout', {
    //       confirmButtonText: 'Re-Login',
    //       cancelButtonText: 'Cancel',
    //       type: 'warning'
    //     }).then(() => {
    //       store.dispatch('user/resetToken').then(() => {
    //         location.reload()
    //       })
    //     })
    //   }
    //   return Promise.reject(new Error(res.message || 'Error'))
    // } else {
    //   return res
    // }
  },
  error => {
    if (error.response && error.response.status == 401) {
        window.location.href = "/";
    }else {
        store.dispatch("ERROR/popErrors", {error_code : 1, message:  error.message});
    }
   
  }
)

export default service