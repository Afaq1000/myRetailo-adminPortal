import axios from "axios";

const BASE_URL = "http://localhost:3000";
// const BASE_URL = "http://ec2-34-244-97-51.eu-west-1.compute.amazonaws.com:3000";

export const instance = axios.create({
  baseURL: BASE_URL,
  timeout: 3000,
  headers: {
    "x-auth-token": localStorage.getItem("x-auth-token"),
  },
});