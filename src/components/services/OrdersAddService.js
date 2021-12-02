import axios from "axios";

const BASE_URL = "http://localhost:3000";

const instance = axios.create({
  baseURL: BASE_URL,
  timeout: 1000,
  headers: {
    "x-auth-token": localStorage.getItem("x-auth-token"),
  },
});

function OrdersAddService(dataa) {
  instance
    .post("/orderRoutes/orders", dataa)
    .then(function (response) {
      console.log(response.data);
      return response.data;
    })
    .catch(function (error) {
      console.log(error);
    });
}
export default OrdersAddService;
