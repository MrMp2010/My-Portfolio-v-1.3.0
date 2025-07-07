import Navbar from "./Navbar" 
import Users from "./Users" 
import Home from "./Home" 
import Register from "./Register" 
import Login from "./Login" 
import User from "./User" 
import {Route,Routes, useLocation} from "react-router-dom" 
import Notfound from "./Notfound"
import Dashbord from "./Dashbord"

const Page3 = () => {
  const location = useLocation();
  const hideNavbar = location.pathname.includes('/users/') && location.pathname.split('/').length > 3;
  
  return (
    <>
      {!hideNavbar && <Navbar />}
      <div className="container mt-3">
        <Routes>
          <Route path="" element={<Home />} />
          <Route path="users/:id" element={<User />} /> 
          <Route path="users" element={<Users />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="dashbord" element={<Dashbord />} />
          <Route path="*" element={<Notfound />} />
        </Routes>
      </div>
    </>
  );
};

export default Page3;