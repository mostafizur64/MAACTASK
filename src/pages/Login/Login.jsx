import React, { useState, useEffect } from "react";
import Container from "../../component/Container/Container";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useAuth } from "../../Providers/AuthContext";
import backgroundImg from "../../assets/image/Bg/backgroundImg.png";
import Navbar from "../../Shared/Navbar";
import { Helmet } from "react-helmet-async";
const Login = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const { isAuthenticated, setAuthInfo } = useAuth();

  useEffect(() => {
    // Check if user is already authenticated
    const token = localStorage.getItem("token");
    const user = JSON.parse(localStorage.getItem("user"));

    console.log(user, "user user", token, "token token");

    if (token && user) {
      setAuthInfo(token, user);
      navigate("/dashboard/region");
    }
  }, [setAuthInfo, navigate]);

  const SubmitHandler = async (e) => {
    e.preventDefault();
    const form = e.target;

    const employeeId = form.employeeId.value;
    const password = form.password.value;
    const data = { employeeId, password };

    setLoading(true);

    try {
      const res = await fetch(
        `https://staging-api.erpxbd.com/api/v1/users/login`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );
      const results = await res.json();

      if (!res.ok) {
        throw new Error(results.message);
      }

      const { token, user } = results;

      // Store token and user in local storage
      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(user));

      setAuthInfo(token, user);
      setLoading(false);
      toast.success("Login successful!");
      navigate("/dashboard/region");
    } catch (error) {
      toast.error(error.message);
      setLoading(false);
    }
  };

  return (
    <div
      style={{
        backgroundImage: `url(${backgroundImg})`,
        backgroundPosition: "",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
        <Helmet>
        <title>FieldX | Login</title>
      </Helmet>

      <Navbar />
      <Container>
        <div className="bg-[#fff] md:text-[20px] text-[16px] md:px-24 px-4 rounded-lg md:py-[80px] py-[30px] text-center shadow-lg md:mt-36 mt-4 ">
          <div className="md:px-[240px] ">
            <div>
              <h2 className="md:text-[40px] text-[30px] font-bold">
                Welcome Back!
              </h2>
              <p className="text-paragraphColor md:mt-4 mt-2 md:text-[24px] text-[16px]">
                Please login to your account
              </p>
            </div>
            <div className="md:mt-12 mt-4 text-[#898989]">
              <form onSubmit={SubmitHandler}>
                <input
                  name="employeeId"
                  type="text"
                  placeholder="Enter Your Email"
                  className="border-b-2 border-[#E1E1E1] py-6 focus:border-[#0052CC] outline-none w-full"
                />
                <input
                  name="password"
                  type="password"
                  placeholder="Password"
                  className="border-b-2 border-[#E1E1E1] py-6 focus:border-[#0052CC] outline-none w-full"
                />

                <button
                  type="submit"
                  className="bg-[#0052CC] w-full text-[20px] md:mt-6 text-[#FFF] md:py-6 py-3 rounded-lg"
                >
                  Sign in
                </button>
              </form>
              <span className="md:text-[24px] text-[18px]">
                <h3 className="md:mt-[64px] mt-8">
                  Don’t have any account?
                  <Link to="/registration" className="text-[#0052CC]">
                    {" "}
                    Sign Up
                  </Link>
                </h3>
              </span>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Login;
