import React, { useContext, useState } from "react";
import "./Keyboard.css";
import { useForm } from "react-hook-form";
import { useNavigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { baseUrl } from "../../config/server";
import axios from "axios";
import KeyboardIcon from "@mui/icons-material/Keyboard";
import LoginIcon from "@mui/icons-material/Login";
import CloseIcon from "@mui/icons-material/Close";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

const Keyboard = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  let navigate = useNavigate();
  let location = useLocation();
  // let from = location.state?.from?.pathname || "/";
  let from = "/dashboard/account-overview";
  const [show, setShow] = useState(false);
  const [error, setError] = useState("");
  const [manualKeyboard, setManualKeyboard] = useState(false);
  const { setUser, user, setIsAdmin, loading } = useContext(AuthContext);
  // console.log(user);

  const [inputValue, setInputValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [activeInput, setActiveInput] = useState("emailInput");
  const [capsLockEnabled, setCapsLockEnabled] = useState(true);
  const [toggleKeyboardEnabled, setToggleKeyboardEnabled] = useState(true);
  const [passwordShow, setPasswordShow] = useState(false);

  const onSubmit = (data) => {
    // const username = data.username;
    // const password = data.password;

    // verify login and send data to the database
    axios
      .post(`${baseUrl}/user-login`, data)
      .then((res) => {
        if (res.data.success === true) {
          const { token, result, isAdmin } = res.data;
          // console.log("Login Successful!", res.data);
          // console.log("User Data:", result);
          // console.log("Token:", token);

          // login(token);
          localStorage.setItem("authToken", token);
          setUser(result);
          setIsAdmin(isAdmin);
          setTimeout(() => {
            navigate(from);
          }, 1000);
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
  // console.log(user);

  const handleKeyPress = (key) => {
    if (key === "Backspace") {
      handleBackspace();
    } else if (key === "Space") {
      handleSpace();
    } else if (key === "Clear") {
      setInputValue("");
      setPasswordValue("");
    } else if (key === "Password") {
      toggleActiveInput();
    } else if (key === "CapsLock") {
      toggleCapsLock();
    } else {
      handleRegularKey(key);
    }
  };

  const handleRegularKey = (key) => {
    if (activeInput === "emailInput") {
      setInputValue(inputValue + (capsLockEnabled ? key.toUpperCase() : key));
    } else {
      setPasswordValue(
        passwordValue + (capsLockEnabled ? key.toUpperCase() : key)
      );
    }
  };

  const handleSpace = () => {
    if (activeInput === "emailInput") {
      setInputValue(inputValue + " ");
    } else {
      setPasswordValue(passwordValue + " ");
    }
  };

  const handleBackspace = () => {
    if (activeInput === "emailInput") {
      setInputValue(inputValue.slice(0, -1));
    } else {
      setPasswordValue(passwordValue.slice(0, -1));
    }
  };

  const toggleActiveInput = () => {
    setActiveInput(
      activeInput === "emailInput" ? "passwordInput" : "emailInput"
    );
  };

  const toggleCapsLock = () => {
    setCapsLockEnabled(!capsLockEnabled);
  };

  const handleToggleKeyboard = () => {
    setPasswordValue("");
    setToggleKeyboardEnabled(!toggleKeyboardEnabled);
  };

  const keyboardLayout = [
    "1234567890",
    "qwertyuiop",
    "asdfghjkl",
    "zxcvbnm",
    ["CapsLock", "Space", "Clear", "Backspace"],
    // ["Password"],
  ];

  return (
    <div className="bg-[#EEEDEB] ">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="bg-gradient-to-r from-[#004F70] to-[#007C9C] rounded-xl px-6 py-10">
          <div className="md:flex gap-4">
            <h4 className="text-white font-medium">Username:</h4>
            <div>
              <input
                {...register("username", { required: true })}
                className="border border-gray-300 rounded-lg py-2 px-4 w-full text-gray-800 placeholder-gray-400 focus:outline-none focus:ring focus:ring-blue-300"
                type="text"
                id="emailInput"
                placeholder="Type your username"
                // value={inputValue}
                onChange={() => {}}
                onClick={() => setActiveInput("emailInput")}
              />
              {errors.username?.type === "required" && (
                <p className="text-red-400 text-sm">Username is required</p>
              )}
            </div>
          </div>

          <div className="md:flex gap-4 my-3">
            <h4 className="text-white font-medium">Password:</h4>
            <div className="">
             <div className="flex gap-2">
             {toggleKeyboardEnabled ? (
                <input
                  {...register("password", { required: true })}
                  className="border border-gray-300 rounded-lg py-2 px-4 w-full text-gray-800 placeholder-gray-400 focus:outline-none focus:ring focus:ring-blue-300"
                  type={`${passwordShow ? "text" : "password"}`}
                  placeholder="Type your password"
                  // value={passwordValue}
                  id="passwordInput"
                  onChange={() => {}}
                  onClick={() => setActiveInput("passwordInput")}
                />
              ) : (
                <input
                  {...register("password", { required: true })}
                  className="border border-gray-300 rounded-lg py-2 px-4 w-full text-gray-800 placeholder-gray-400 focus:outline-none focus:ring focus:ring-blue-300"
                  type={`${passwordShow ? "text" : "password"}`}
                  placeholder="Type your password"
                  value={passwordValue}
                  id="passwordInput"
                  onChange={() => {}}
                  onClick={() => setActiveInput("passwordInput")}
                />
              )}
              
              <button
              type="button" // This prevents the form submission
              onClick={() => setPasswordShow(!passwordShow)}
            >
              {passwordShow ? <VisibilityOff /> : <Visibility />}
            </button>
             </div>

              {errors.password?.type === "required" && (
                <p className="text-red-400 mt-2 text-sm">
                  Password is required
                </p>
              )}
            </div>
            {/* Keyboard Button */}

            <button
              type="button"
              onClick={() => handleToggleKeyboard()}
              className={`${
                toggleKeyboardEnabled
                  ? "bg-[#007C9C] "
                  : "bg-[#35d7ff] shadow-md animate-pulse"
              } px-3 py-2 mt-2 rounded text-white text-sm `}
            >
              <KeyboardIcon />
            </button>
          </div>

          <button className="block md:inline bg-green-500 text-white px-8 py-2 rounded hover:bg-green-700 hover:scale-105 transform transition duration-300 ease-in-out">
            Login <LoginIcon />
          </button>
        </div>
        <p>{error}</p>
      </form>

      <div
        className={`keyboard z-10 fixed md:absolute bg-slate-200 shadow-lg border rounded-lg transition-opacity duration-300 ease-in-out ${
          !toggleKeyboardEnabled ? "opacity-100" : "opacity-0"
        } md:right-56 bottom-0  md:bottom-28 w-full md:w-max`}
      >
        <button
          onClick={handleToggleKeyboard}
          className="w-7 ml-auto cursor-pointer"
        >
          <CloseIcon />
        </button>
        {keyboardLayout.map((row, rowIndex) => (
          <div key={rowIndex} className="keyboard-row flex">
            {Array.isArray(row) ? (
              row.map((key, keyIndex) => (
                <button
                  key={keyIndex}
                  className={`keyboard-key text-sm border shadow-md text-center ${
                    key === "Space" ? "space" : ""
                  }border px-5 py-3 `}
                  onClick={() => handleKeyPress(key)}
                >
                  {key === "CapsLock"
                    ? capsLockEnabled
                      ? "Caps Lock"
                      : "Caps Lock"
                    : key}
                </button>
              ))
            ) : (
              <div className="keyboard-key-row" style={{ width: "100%" }}>
                {row.split("").map((key, keyIndex) => (
                  <button
                    key={keyIndex}
                    className={`keyboard-key border shadow-md ${
                      key === "Space" ? "space" : ""
                    }`}
                    onClick={() => handleKeyPress(key)}
                  >
                    {capsLockEnabled ? key.toLocaleUpperCase() : key}
                  </button>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Keyboard;
