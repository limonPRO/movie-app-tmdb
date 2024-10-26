import axios from "axios";

const apiClient = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: "71504700587f58ad7d15bb4caa52febd",
  },
  // headers: {
  //   Authorization: `Bearer ${process.env.ACCESS_TOKEN}`,
  // },
});

// const useAxiosSecure = () => {
//   axiosInstance.interceptors.request.use(
//     (config) => {
//       const token = localStorage.getItem('token')
//       if(token){
//         config.headers["Authorization"] = "Bearer " + token
//       }
//       return config
//     },
//     (error) => {
//       Promise.reject(error)
//     }
//   );
//   return axiosInstance;
// };



export default apiClient;