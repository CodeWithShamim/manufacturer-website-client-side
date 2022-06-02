import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Register from "./components/Login/Reqister";
import Footer from "./components/Shared/Footer";
import Navbar from "./components/Shared/Navbar";
import "react-loading-skeleton/dist/skeleton.css";
import Purchase from "./components/Purchase/Purchase";
import RequireAuth from "./components/Shared/RequireAuth";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import Dashboard from "./components/Dashboard/Dashboard";
import MyOrders from "./components/Dashboard/MyOrders/MyOrders";
import AddReview from "./components/Dashboard/AddReview";
import MyProfile from "./components/Dashboard/MyProfile/MyProfile";
import NotFound from "./components/Shared/NotFound";
import MyPortfolio from "./components/MyPortfolio/MyPortfolio";
import Blogs from "./components/Blogs/Blogs";
import Payment from "./components/Dashboard/Payment/Payment";
import AddProduct from "./components/Dashboard/AdminPages/AddProduct";
import MakeAdmin from "./components/Dashboard/AdminPages/MakeAdmin/MakeAdmin";
import ManageProducts from "./components/Dashboard/AdminPages/ManageProducts/ManageProducts";
import ManageOrders from "./components/Dashboard/AdminPages/ManageOrders/ManageOrders";
import RequireAdmin from "./components/Shared/RequireAdmin";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/blogs" element={<Blogs />}></Route>
        <Route path="/myPortfolio" element={<MyPortfolio />}></Route>
        <Route
          path="/purchase/:id"
          element={
            <RequireAuth>
              <Purchase />
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/dashboard"
          element={
            <RequireAuth>
              <Dashboard></Dashboard>
            </RequireAuth>
          }
        >
          <Route index element={<MyProfile />}></Route>
          <Route path="addReview" element={<AddReview />}></Route>
          <Route path="myOrders" element={<MyOrders />}></Route>
          <Route path="payment/:id" element={<Payment />}></Route>

          {/* _____admin route____ */}
          <Route
            path="addProduct"
            element={
              <RequireAdmin>
                <AddProduct />
              </RequireAdmin>
            }
          ></Route>
          <Route
            path="makeAdmin"
            element={
              <RequireAdmin>
                <MakeAdmin />
              </RequireAdmin>
            }
          ></Route>
          <Route
            path="manageProducts"
            element={
              <RequireAdmin>
                <ManageProducts />
              </RequireAdmin>
            }
          ></Route>
          <Route
            path="manageOrders"
            element={
              <RequireAdmin>
                <ManageOrders />
              </RequireAdmin>
            }
          ></Route>
        </Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>

      <Footer></Footer>
      <ToastContainer />
    </div>
  );
}

export default App;
