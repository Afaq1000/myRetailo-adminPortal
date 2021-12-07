import { instance } from "./index";

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
