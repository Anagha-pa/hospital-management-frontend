import React, { useEffect, useState } from "react";
import AdminSideBar from "./AdminSideBar";
import axios from "axios";
import { useActionData } from "react-router-dom";

const ListDoctor = () => {
  const [doctors, setDoctors] = useState("");

  const fetchDoctor = async () => {
    try {
      const response = await axios.get(
        "http://127.0.0.1:8000/api/adminpanel/doctors/"
      );
      if (response.status === 200) {
        setDoctors(response.data);
        console.log(response.data);
      }
    } catch (error) {
      console.log(error.response);
    }
  };

  useEffect(() => {
    fetchDoctor();
  }, []);

  return (
    <div>
      <AdminSideBar />
      <div className="container mt-20" style={{display:"flex"}}>
      <div className="col-md-2"></div>
      <div className="col-md-10">
      <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" class="px-6 py-3">
                NAME
              </th>
              <th scope="col" class="px-6 py-3">
                GENDER
              </th>
              <th scope="col" class="px-6 py-3">
                DEPARTMENT
              </th>
              <th scope="col" class="px-6 py-3">
                QUALIFICATION
              </th>
              <th scope="col" class="px-6 py-3">
                EXPERIENCE
              </th>
              <th scope="col" class="px-6 py-3">
                PH.NO
              </th>
            </tr>
          </thead>
          <tbody>
            {doctors &&
              doctors.map((item) => {
                return (
                  <tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                    
                    <td class="px-6 py-4">{item.name}</td>
                    <td class="px-6 py-4">{item.gender}</td>
                    <td class="px-6 py-4">{item.department}</td>
                    <td class="px-6 py-4">{item.qualification}</td>
                    <td class="px-6 py-4">{item.experience}</td>
                    <td class="px-6 py-4">{item.phone_number}</td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
      </div>
      </div>
    </div>
  );
};
export default ListDoctor;
