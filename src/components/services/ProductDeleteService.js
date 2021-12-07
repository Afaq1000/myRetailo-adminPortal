import { instance } from "./index";

function ProductServiceDelete(dataa) {
    console.log(dataa.productId);
  instance
    
    .delete("/productsRoutes/products/" + dataa.productId)
    .then(function (response) {
      console.log(response.data);
      return response.data;
    })
    .catch(function (error) {
      console.log(error);
    });
}
export default ProductServiceDelete;
