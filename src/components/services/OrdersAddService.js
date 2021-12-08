import { instance } from "./index";

  function OrdersAddService(dataa) {

    instance.post('/orderRoutes/orders',dataa)
    .then(function (response) {
        console.log(response.data);
      return(response.data);
      
    })
    .catch(function (error) {
      console.log(error);
    });
   
  }
  export default OrdersAddService;