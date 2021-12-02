import axios from "axios";

const BASE_URL = "http://localhost:3000";

const instance = axios.create({
  baseURL: BASE_URL,
  timeout: 1000,
  headers: {
    "x-auth-token": localStorage.getItem("x-auth-token"),
  },
});

function OrderServiceDelete(dataa) {
    console.log(dataa.orderId);
  instance
    
    .delete("orderRoutes/orders/" + dataa.orderId)
    .then(function (response) {
      console.log(response.data);
      return response.data;
    })
    .catch(function (error) {
      console.log(error);
    });
}
export default OrderServiceDelete;
