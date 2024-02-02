import React, { useState } from "react";
import Container from "../../component/Container/Container";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useAuth } from "../../Providers/AuthContext";
import backgroundImg from '../../assets/image/Bg/backgroundImg.png'
import Navbar from "../../Shared/Navbar";
import { Helmet } from "react-helmet-async";
const Registration = () => {
 
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const employeeId = form.employeeId.value;
    const phoneNumber = form.phoneNumber.value;
    const password = form.password.value;
    const passwordConfirm = form.passwordConfirm.value;
    const role = form.role.value;

    const data = {
      name,
      email,
      employeeId,
      phoneNumber,
      password,
      passwordConfirm,
      role,
    };
    setLoading(true);

    try {
      const res = await fetch(
        `https://staging-api.erpxbd.com/api/v1/users/signup`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      if (!res.ok) {
        const { message } = await res.json();
        throw new Error(message);
      }

      setLoading(false);
      toast.success("Registration successful!");

      navigate("/login");
    } catch (error) {
      toast.error(error.message);

      setLoading(false);
    }
  };
  return (
    <div className=""style={{
      backgroundImage: `url(${backgroundImg})`,
      backgroundPosition: "",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
    }}>
        <Helmet>
        <title>FieldX | Registration</title>
      </Helmet>

      <Navbar/>
      <Container>
       
        <div
          className="bg-[#fff]  md:text-[20px] text-[16px] md:px-24 px-4 rounded-lg
         md:py-[80px]  text-center shadow-lg md:mt-36 mt-4"
        >
          <div className="md:px-[240px] py-12">
            <div>
              <h2 className="md:text-[40px] text-[30px] font-bold">
                Create Account
              </h2>
              <p className="text-paragraphColor md:mt-4 mt-2 md:text-[24px] text-[16px]">
                Fill in the details below to create an account
              </p>
            </div>
            {/* form start ========== */}
            <div className="md:mt-12 mt-4 text-[#898989]">
              <form onSubmit={handleSubmit}>
                <input
                  name="name"
                  type="text"
                  placeholder="Enter Your Full Name"
                  className="border-b-2 border-[#E1E1E1] py-6 focus:border-[#0052CC] outline-none w-full"
                />
                <input
                  name="email"
                  type="email"
                  placeholder="Enter Your Email"
                  className="border-b-2 border-[#E1E1E1] py-6 focus:border-[#0052CC] outline-none w-full"
                />
                <input
                  name="employeeId"
                  type="text"
                  placeholder="Your ID"
                  className="border-b-2 border-[#E1E1E1] py-6 focus:border-[#0052CC] outline-none w-full"
                />
                <input
                  name="phoneNumber"
                  type="text"
                  placeholder="Your Mobile Number"
                  className="border-b-2 border-[#E1E1E1] py-6 focus:border-[#0052CC] outline-none w-full"
                />
                <input
                  name="password"
                  type="password"
                  placeholder="password"
                  className="border-b-2 border-[#E1E1E1] py-6 focus:border-[#0052CC] outline-none w-full"
                />

                <input
                  name="passwordConfirm"
                  type="password"
                  placeholder="Confirm Password"
                  className="border-b-2 border-[#E1E1E1] py-6 focus:border-[#0052CC] outline-none w-full"
                />

                <select
                  id="select"
                  name="role"
                  className="border-b-2 border-[#E1E1E1] py-6 focus:border-[#0052CC] outline-none w-full "
                >
                  <option value="">Select Your Role</option>
                  <option value="HUB">HUB</option>
                </select>
                <div className="flex items-center gap-4 py-6">
                  <input
                    type="checkbox"
                    id="check"
                    name="check"
                    className="w-[24px] h-[28px]"
                  />
                  <h2 className="leading-[20px]">
                    I read and agree to the{" "}
                    <span className="text-[#0052CC]">Terms & Conditions</span>{" "}
                  </h2>
                </div>
                <button
                  type="submit"
                  className="bg-[#0052CC] w-full text-[20px] md:mt-6 text-[#FFF] md:py-6 py-3 rounded-lg"
                >
                  Create Account
                </button>
              </form>
              <span className="md:text-[24px] text-[18px]">
                <h3 className="md:mt-[64px] mt-8">
                  Already have an account?
                  <Link to="/login" className="text-[#0052CC]">
                    {" "}
                    Sign In
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

export default Registration;
