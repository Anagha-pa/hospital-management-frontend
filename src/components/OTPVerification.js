import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Dna } from  'react-loader-spinner'
import toast from "react-hot-toast";

const OTPVerification = () => {
  const navigate = useNavigate();
  const [otp, setOTP] = useState("");
  const [error, setError] = useState("");
  const [isResending, setIsResending] = useState(false);
  const [resendMessage, setResendMessage] = useState("");
  const [loding,setLoading] = useState(false)
  const token = localStorage.getItem("token");
  let access = null;

  const handleVerify = async (e) => {
    e.preventDefault();
    if (token) {
      access = JSON.parse(token);
    }

    try {
      setLoading(true)
      console.log(token.access);
      const email = localStorage.getItem("email");
      console.log(email);

      const response = await axios.post(
        "http://127.0.0.1:8000/api/users/verify-otp/",
        { "email": email, "otp": otp },
        {
          headers: {
            Authorization: `Bearer ${access.access}`,
          },
        }
      );
      if (response.status === 200) {
        console.log("success");
        toast.success('OTP Verified')

        navigate("/login"); // Redirect to the profile page after successful verification
      }
    } catch (error) {
      setError("Invalid OTP. Please try again.");
      console.log('Invalid OTP. Please try again');
      toast.error('Invalid Otp')

    }
    finally{
      setLoading(false);
    }
  };

  const handleResendOTP = async () => {
    setIsResending(true);
    setResendMessage("");

    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/api/users/resend-otp/",
        { email: "a@aa.com", otp: otp },
        {}
      );

      setResendMessage(response.data.message);
    } catch (error) {
      setResendMessage("Failed to resend OTP.");
    } finally {
      setIsResending(false);
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-2xl font-semibold mb-6">OTP Verification</h1>
              {loding&&(<Dna
          visible={true}
          height="80"
          width="80"
          ariaLabel="dna-loading"
          wrapperStyle={{}}
          wrapperClass="dna-wrapper"
        />)}
      <form
        className="w-full max-w-sm bg-white dark:bg-gray-800 shadow-md rounded-lg px-6 py-8"
        onSubmit={handleVerify}
      >
        <div className="mb-6">
          <label
            htmlFor="text"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Your OTP
          </label>
          <input
            type="text"
            id="text"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Enter OTP"
            value={otp}
            onChange={(e) => setOTP(e.target.value)}
            required
          />
        </div>
        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Submit
        </button>
      </form>
      <div className="mt-4">
        <a
          onClick={handleResendOTP}
          disabled={isResending}
          style={{ color: "red", cursor: "pointer" }}
        >
          {isResending ? "Resending OTP..." : "Resend OTP"}
        </a>
        <p>{resendMessage}</p>
      </div>
    </div>
  );
};

export default OTPVerification;
