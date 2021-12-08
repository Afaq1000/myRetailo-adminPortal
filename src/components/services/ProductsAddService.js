import { instance } from "./index";

function ProductsAddService(dataa) {
  instance
    .post("/productsRoutes/products", dataa)
    .then(function (response) {
      console.log(response.data);
      return response.data;
    })
    .catch(function (error) {
      console.log(error);
    });
}
export default ProductsAddService;
