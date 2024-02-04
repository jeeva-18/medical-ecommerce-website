import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/TopBar";
import Home from "./pages/home/Home";
import UserList from "./pages/userList/UserList";
import "./app.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate,
} from "react-router-dom";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import ProductList from "./pages/productList/ProductList";
import Product from "./pages/product/Product";
import NewProduct from "./pages/newProduct/NewProduct";
import Login from "./pages/login/Login";
function App() {
  const admin = JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser.isAdmin;
  console.log(admin);
  return (
    <Router>     
        <Routes>
          <Route path="/login" element={admin ? <Navigate to="/" /> : <Login />} />
          {admin && (
          <>
          <Route exact path="/" element={<Home />} />
          <Route path="/users" element={<UserList />} />
          <Route path="/user/:userId" element={<User />} />
          <Route path="/newUser" element={<NewUser />} />
          <Route path="/Products" element={<ProductList />} />
          <Route path="/product/:productId" element={<Product />} />
          <Route path="/newproduct" element={<NewProduct />} />
          </>)}
        </Routes>
    </Router>
  );
}

export default App;
