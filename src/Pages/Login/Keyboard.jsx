import React, { useContext, useState } from "react";
import "./Keyboard.css";
import { useForm } from "react-hook-form";
import { useNavigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { baseUrl } from "../../config/server";
import axios from "axios";

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
  const { setUser, user, loading } = useContext(AuthContext);
  // console.log(user);

  const [inputValue, setInputValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [activeInput, setActiveInput] = useState("emailInput");
  const [capsLockEnabled, setCapsLockEnabled] = useState(true);
  const [toggleKeyboardEnabled, setToggleKeyboardEnabled] = useState(true);

  const onSubmit = (data) => {
    // const username = data.username;
    // const password = data.password;

    // verify login and send data to the database
    axios
      .post(`${baseUrl}/user-login`, data)
      .then((res) => {
        if (res.data.success === true) {
          const { token, result } = res.data;
          console.log("Login Successful!", res.data);
          console.log("User Data:", result);
          console.log("Token:", token);

          // login(token);
          localStorage.setItem("authToken", token);
          setUser(result);
          loading(false);
          navigate(from);
          
        } else {
          console.error("Login Failed:", res.data.message);
          setError(res.data.message);
          loading(false);
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        setError("An error occurred during login.");
        loading(false);
      });
  };
  console.log(user);

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
    setPasswordValue(passwordValue);
    setToggleKeyboardEnabled(!toggleKeyboardEnabled);
  }

  const keyboardLayout = [
    "1234567890",
    "qwertyuiop",
    "asdfghjkl",
    "zxcvbnm",
    ["CapsLock", "Space", "Clear", "Backspace"],
    ["Password"],
  ];

  return (
    <div className="bg-[#EEEDEB]">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="bg-[#3E639F] flex items-center">
          <input
            {...register("username", { required: true })}
            className="border"
            type="text"
            id="emailInput"
            placeholder="Type your username"
            // value={inputValue}
            onChange={() => {}}
            onClick={() => setActiveInput("emailInput")}
          />
          {errors.email?.type === "required" && (
            <p className="text-red-400 mt-2">Email is required</p>
          )}
          {toggleKeyboardEnabled ? (
            <input
              {...register("password", { required: true })}
              className="border ml-2"
              type="text"
              placeholder="Type your password"
              // value={passwordValue}
              id="passwordInput"
              onChange={() => {}}
              onClick={() => setActiveInput("passwordInput")}
            />
          ) : (
            <input
              {...register("password", { required: true })}
              className="border ml-2"
              type="text"
              placeholder="Type your password"
              value={passwordValue}
              id="passwordInput"
              onChange={() => {}}
              onClick={() => setActiveInput("passwordInput")}
            />
          )}
          {errors.password?.type === "required" && (
            <p className="text-red-400 mt-2">Password is required</p>
          )}
          <button className="bg-[#E40100] text-white ml-2 px-3 py-1 mt-2 rounded mb-4">
            Login
          </button>
        </div>
        <p>{error}</p>
      </form>
      <button
        onClick={() => handleToggleKeyboard() }
        className="btn btn-info"
      >
        Manual Keyboard for password
      </button>
      <div className="keyboard">
        {keyboardLayout.map((row, rowIndex) => (
          <div key={rowIndex} className="keyboard-row">
            {Array.isArray(row) ? (
              row.map((key, keyIndex) => (
                <button
                  key={keyIndex}
                  className={`keyboard-key ${
                    key === "Space" ? "space" : ""
                  }border px-5 py-3`}
                  onClick={() => handleKeyPress(key)}
                >
                  {key === "CapsLock"
                    ? capsLockEnabled
                      ? "Caps Lock ON"
                      : "Caps Lock OFF"
                    : key}
                </button>
              ))
            ) : (
              <div className="keyboard-key-row">
                {row.split("").map((key, keyIndex) => (
                  <button
                    key={keyIndex}
                    className={`keyboard-key ${key === "Space" ? "space" : ""}`}
                    onClick={() => handleKeyPress(key)}
                  >
                    {key}
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
