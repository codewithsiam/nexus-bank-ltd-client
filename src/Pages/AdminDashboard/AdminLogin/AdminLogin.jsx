import React, { useContext, useState } from "react";
import { FaUser, FaLock } from "react-icons/fa";
import { baseUrl } from "../../../config/server";
import axios from "axios";
import { AuthContext } from "../../../providers/AuthProvider";
import { useNavigate } from "react-router-dom";

const AdminLogin = () => {
  const { setUser } = useContext(AuthContext);
  const [error, setError] = useState("");
  let navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    console.log(formData);

    axios
      .post(`${baseUrl}/login`, formData)
      .then((res) => {
        if (res.data.success === true) {
          const { token, result } = res.data;
          console.log("Login Successful!", res.data);
          console.log("User Data:", result);
          console.log("Token:", token);

          // login(token);
          localStorage.setItem("authToken", token);
          setUser(result);
          navigate("/admin/analytics");
        } else {
          console.error("Login Failed:", res.data.message);
          setError(res.data.message);
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        setError("An error occurred during login.");
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-indigo-600">
      <div className="bg-opacity-80 backdrop-blur-lg bg-white p-8 rounded-md shadow-md w-96">
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">
          Admin Login
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <div className="relative">
              <span className="absolute left-3 top-2 text-gray-400"></span>
              <label className="flex gap-2 items-center text-gray-700 text-sm font-bold mb-2">
                <FaUser />
                Username
              </label>
              <input
                type="text"
                id="username"
                name="username"
                value={formData.username}
                onChange={handleChange}
                placeholder="Enter your username"
                className="border rounded-lg pl-10 pr-4 py-2 w-full focus:outline-none focus:border-blue-400"
                required
              />
            </div>
          </div>
          <div className="mb-6">
            <div className="relative">
              <label className=" flex gap-2 items-center text-gray-700 text-sm font-bold mb-2">
                <FaLock /> Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter your password"
                className="border rounded-lg pl-10 pr-4 py-2 w-full focus:outline-none focus:border-blue-400"
                required
              />
            </div>
          </div>
          {error && <p className="text-red-400">{error}</p>}
          <div className="flex items-center justify-center">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-primary text-white font-bold py-2 px-4 rounded-md w-full focus:outline-none focus:shadow-outline-blue transition duration-300 ease-in-out"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
