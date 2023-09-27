import React from 'react'
import DoctorSideBar from './DoctorSideBar';
import { Link } from "react-router-dom";

const DoctorProfile = () => {
  return (
    <div className="flex h-screen">
      <DoctorSideBar />

      <div className="w-3/4 bg-secondary p-4 h-screen">
      <h1 className="mb-4 text-white"><b>User Profile</b></h1>
        <div className="bg-white shadow-md rounded-md overflow-hidden">
          <div className="p-4">
            <div className="mb-4">
              <h6 className="font-semibold">Name</h6>
              <p className="text-gray-700">Kenneth</p>
            </div>
             <hr className="my-4" />
             <div className="mb-4">
              <h6 className="font-semibold">Qualification</h6>
              <p className="text-gray-700">MBBS</p>
            </div>
            <hr className="my-4" />

            <div className="mb-4">
              <h6 className="font-semibold">Department</h6>
              <p className="text-gray-700">22</p>
            </div>
            <hr className="my-4" />

            <div className="mb-4">
              <h6 className="font-semibold">Branch</h6>
              <p className="text-gray-700">Calicut</p>
            </div>
             <hr className="my-4" />
            <div className="mb-4">
              <h6 className="font-semibold">Phone number</h6>
              <p className="text-gray-700">(239) 816-9029</p>
            </div>
            <hr className="my-4" />
            <div className="flex justify-end">
              <Link 
                 to = "/profile-update"
                className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition duration-300"
    
              >
                Edit

              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default DoctorProfile;
