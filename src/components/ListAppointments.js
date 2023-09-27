import React, { useEffect,useState } from 'react';
import './ListAppointments.css';
import Header from '../components/Header';
import AxiosInstance from './AxiosInstance';
import axios from 'axios';
const ListAppointments = () => {

  // const Axios = AxiosInstance();
  const [listappointmentData,setListAppointmentData] = useState([]);
  
  
const fetchAppointment = async ()=>{
  try{
    const response = await axios.get('http://127.0.0.1:8000/api/users/appointment/')
    if(response.status === 200){
      setListAppointmentData(response.data)
      console.log(response.data);
  
    }
  }
  catch(error){
    console.log(error.response);
  }
 
}


useEffect(()=>{

  fetchAppointment()

},[])



 
  
  return (
    <div className='list-ap'>
      <Header />
      <div className="tablemargin flex flex-col">
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
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b dark:border-neutral-500">
                    <td className="whitespace-nowrap px-6 py-4"></td>
                    <td className="whitespace-nowrap px-6 py-4"></td>

                    
                    <td className="whitespace-nowrap px-6 py-4"></td>
                    <td className="whitespace-nowrap px-6 py-4"></td>
                    <td className="whitespace-nowrap px-6 py-4"></td>
                    <td className="whitespace-nowrap px-6 py-4"></td>
                    <td className="whitespace-nowrap px-6 py-4"></td>
                  </tr>
                  <tr className="border-b dark:border-neutral-500">
                    
                  <td className="whitespace-nowrap px-6 py-4"></td>
                    <td className="whitespace-nowrap px-6 py-4"></td>
                    <td className="whitespace-nowrap px-6 py-4"></td>
                    <td className="whitespace-nowrap px-6 py-4"></td>
                    <td className="whitespace-nowrap px-6 py-4"></td>
                    <td className="whitespace-nowrap px-6 py-4"></td>
                    <td className="whitespace-nowrap px-6 py-4"></td>
                  </tr>
                  <tr className="border-b ">
                  <td className="whitespace-nowrap px-6 py-4"></td>
                    <td className="whitespace-nowrap px-6 py-4"></td>
                    <td className="whitespace-nowrap px-6 py-4"></td>
                    <td className="whitespace-nowrap px-6 py-4"></td>
                    <td className="whitespace-nowrap px-6 py-4"></td>
                    <td className="whitespace-nowrap px-6 py-4"></td>
                    <td className="whitespace-nowrap px-6 py-4"></td>
                  </tr>
                  <tr className="border-b ">
                    <td className="whitespace-nowrap px-6 py-4"></td>
                    <td className="whitespace-nowrap px-6 py-4"></td>
                    <td className="whitespace-nowrap px-6 py-4"></td>
                    <td className="whitespace-nowrap px-6 py-4"></td>
                    <td className="whitespace-nowrap px-6 py-4"></td>
                    <td className="whitespace-nowrap px-6 py-4"></td>
                    <td className="whitespace-nowrap px-6 py-4"><span className='totalp'>Total</span>: </td>
                    <td className="whitespace-nowrap px-6 py-4"><button className='btn btn-warning'>Pay Amount</button></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListAppointments;
