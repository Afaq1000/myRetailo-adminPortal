import { instance } from "./index";

 function SignUpService(data) {
     console.log({...data});

    instance.post('/signUp',{...data})
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
   
  }
  export default SignUpService;