import axios from 'axios/index'

export function request(config){
  // 1.创建axios的实例
    const instance = axios.create({
      baseURL: '',
      timeout: 5000
  })
  // 2. axios的拦截器
  //请求拦截器
  instance.interceptors.request.use(config => {
    /*1.config中的信息不符合服务器的要求
    2.每次发送请求时，页面都显示一个请求的图标
    3.登录（token）必须携带一些特殊的信息*/
    return config
  },error => {
    console.log(error);
  });

  //响应拦截器
  instance.interceptors.response.use(res =>{
    return res.data
  },error => {
    console.log(error);
  });
  // 3.发送真正的网络请求
    return instance(config)

  }
