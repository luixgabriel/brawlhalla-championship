import axios from 'axios';

const brawlhallaApi = axios.create({
  baseURL: "https://brawlhalla.fly.dev/v1/",
  timeout: 30000,
});

export default brawlhallaApi;