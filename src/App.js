import logo from "./logo.svg";
import "./App.css";
import "./index.css";
// import { OrdersAdd} from './components/orders/OrdersAdd';
import Routes from "./components/Routes/index";
function App() {
  return (
    <div>
      {/* <OrdersAdd/> */}
      <Routes />
    </div>
  );
}

export default App;

// import React from "react";
// import "./App.css";
// import Navbar from "./components/navbar/Navbar";
// import { BrowserRouter as Router, Route ,Routes} from "react-router-dom";
// import { OrdersAdd } from "./components/orders/OrdersAdd";
// import { SignIn } from "./components/auth/SignIn";
// import { SignUp } from "./components/auth/SignUp";

// function App() {
//   return (
//     <>
//       <Router>
//         <Navbar />
//         <Routes>
//         <Route path="/orderAdd" element={<OrdersAdd />} />
//         <Route exact path="/" element={<SignIn/>} />

//         <Route path="/signup" element={<SignUp />} />
//         </Routes>
//       </Router>
//     </>
//   );
// }

// export default App;
