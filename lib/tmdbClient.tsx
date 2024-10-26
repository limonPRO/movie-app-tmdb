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

export default apiClient;