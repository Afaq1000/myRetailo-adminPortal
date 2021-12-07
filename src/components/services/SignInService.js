import { instance } from "./index";

 function SignInService(data) {

    instance.post('/signIn',data)
    .then(function (response) {
      localStorage.setItem('x-auth-token',response.data);
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
   
  }
  export default SignInService;