import axios from "axios";

const championshipApi = axios.create({
  baseURL: "https://brawlhalla-championship-backend.onrender.com/",
  timeout: 30000,
});

export default championshipApi;
