import axios from "axios";

const BASE_URL = "http://localhost:3000";

const instance = axios.create({
    baseURL: BASE_URL,
    timeout: 1000,
    headers: {'X-Custom-Header': 'foobar'}
  });

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