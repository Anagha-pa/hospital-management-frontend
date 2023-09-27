import React, { useEffect, useState } from 'react'
import './AppointmentHistory.css'
import Header  from './Header'
import axios from 'axios';

const AppointmentHistory = () => {
  const [appointmentData,setAppointmentData] = useState([]);

  useEffect(()=>{
    // Make an Axios GET request to your Django API endpoint
    axios.get('http://127.0.0.1:8000/api/appointment-history/')
      .then((response) => {
        // Set the fetched data in the state
        setAppointmentData(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  return (
    <div className='ap-his'>
        <Header/>
        <div className="tablemargins flex flex-col">
        <div className="sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
            <div className="overflow-x-auto">
              <table className="min-w-full text-left text-sm font-light">
                <thead className="border-b font-medium dark:border-neutral-500">
                  <tr>
                    <th scope="col" className="px-6 py-4">NAME</th>
                    <th scope="col" className="px-6 py-4">AGE</th>
                    <th scope="col" className="px-6 py-4">GENDER</th>
                    <th scope="col" className="px-6 py-4">DATE</th>
                    <th scope="col" className="px-6 py-4">DEPARTMENT</th>
                    <th scope="col" className="px-6 py-4">DOCTOR</th>
                    <th scope="col" className="px-6 py-4">AMOUNT</th>
                    <th scope="col" className="px-6 py-4">PAYMENT STATUS</th>
                  </tr>
                </thead>
                <tbody>
                  {appointmentData.map((appointment, index) => (
                    <tr key={index} className="border-b dark:border-neutral-500">
                      <td className="whitespace-nowrap px-6 py-4">{appointment.first_name} {appointment.last_name}</td>
                      <td className="whitespace-nowrap px-6 py-4">{appointment.age}</td>
                      <td className="whitespace-nowrap px-6 py-4">{appointment.gender}</td>
                      <td className="whitespace-nowrap px-6 py-4">{appointment.slot_date}</td>
                      <td className="whitespace-nowrap px-6 py-4">{appointment.department}</td>
                      <td className="whitespace-nowrap px-6 py-4">{appointment.doctor}</td>
                      <td className="whitespace-nowrap px-6 py-4">{appointment.fee}</td>
                      <td className="whitespace-nowrap px-6 py-4">
                  {appointment.payment_status ? 'Paid' : 'Not Paid'}
                  </td>
                </tr>
                ))}
                </tbody>

              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default AppointmentHistory
