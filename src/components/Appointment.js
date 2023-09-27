import React, { useEffect, useState } from "react";
import "./Appointment.css";
import Header from "./Header";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";




const Appointment = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [phone_number, setPhonenumber] = useState();
  const [address, setAddress] = useState("");
  const [department, setDeparment] = useState("");
  const [doctor, setDoctor] = useState("");
  const [date, setDate] = useState("");
  const [fee, setFee] = useState("");
  const [allDepartment, setAllDepartment] = useState(null);
  const [allDoctors, setAllDoctors] = useState(null);
  const [allFee, setAllFee] = useState(null);
  const token = useSelector((state)=>state.user.token)


  useEffect(() => {
    console.log(token.access);
    console.log(allDoctors);
  }, [department]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(doctor);
    try {
      console.log(doctor);
      const response = await axios.post(
        "http://127.0.0.1:8000/api/users/appointment/",
        {
          first_name: name,
          last_name: name,
          age: age,
          gender: gender,
          phone_number: phone_number,
          address: address,
          department: department,
          doctor: doctor,
          slot_date: date,
          fee: fee,
        },
        // {
        //   headers:{
        //     'Authorization': `Bearer ${token.access}`
        //   }
        // }
      );
      if (response.status === 201) {
        console.log("successful");

        navigate("list-appointment");
      }
    } catch (error) {
      console.log(error.response);
    }
  };

  const handleDepartmentChange = async () => {
    try {
      const response = await axios.get(
        "http://127.0.0.1:8000/api/adminpanel/departments/"
      );
      console.log("departments", response.data);
      setAllDepartment(response.data);
    } catch (error) {
      console.log(error.response);
    }
  };

  const handleDoctorChange = async () => {
    try {
      const response = await axios.get(
        "http://127.0.0.1:8000/api/adminpanel/doctors/"
      );
      console.log("doctors", response.data);
      setAllDoctors(response.data);
    } catch (error) {
      console.log(error.response);
    }
  };

  const handleFeeChange = async () => {
    try {
      if (department) {
        const response = await axios.get(
          `http://127.0.0.1:8000/api/adminpanel/departments/?name=${department}`
        );

        // Log the response data to the console for debugging
        console.log("fees", response.data);

        // Check if a matching department is found in the response
        if (response.data.length > 0) {
          // Assuming each department has a 'fee' field, replace 'fee' with the actual field name if different
          const departmentFee = response.data[0].fee;
          setFee(departmentFee);
          setAllFee( response.data)
        } else {
          // Handle the case where no matching department is found
          console.log("No matching department found");

          // Reset the 'fee' state to an empty string
          setFee("");
        }
      } else {
        // Reset the 'fee' state when the department is not selected
        setFee("");
      }
    } catch (error) {
      // Handle any errors that may occur during the Axios GET request
      console.log(error.response);
    }
  };

  useEffect(() => {
    handleDepartmentChange();

    handleDoctorChange();
    handleFeeChange();
  }, []);


  useEffect(()=>{
    console.log(allFee);
  }, [allFee])

  return (
    <div className="whole1">
      <Header />
      <div className="sample2">
        <div className="container">
          <form className="form-group" onSubmit={handleSubmit}>
            <div className="col-md-12 col-12">
              <div className="bind">
                <div>
                  <label className="labels">
                    <strong>Name</strong>
                  </label>
                </div>
                <div>
                  <input
                    type="text"
                    className="form-control"
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
              </div>
              <div className="sample3">
                <div className="col-md-6 col-12 oned">
                  <div>
                    <label className="labels">
                      <strong>Age</strong>
                    </label>
                  </div>
                  <div>
                    <input
                      type="number"
                      className="form-control"
                      name="age"
                      value={age}
                      onChange={(e) => setAge(e.target.value)}
                    />
                  </div>
                </div>

                <div className="col-md-6 col-12 twod">
                  <div>
                    <label className="labels">
                      <strong>Gender</strong>
                    </label>
                  </div>
                  <div>
                    <select
                      className="form-control"
                      name="gender"
                      value={gender}
                      onChange={(e) => setGender(e.target.value)}
                    >
                      <option value="">Select Gender</option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="bind">
                <div>
                  <label className="labels">
                    <strong>Phone number</strong>
                  </label>
                </div>
                <div>
                  <input
                    type="tel"
                    class="form-control"
                    name="phone_number"
                    value={phone_number}
                    onChange={(e) => setPhonenumber(e.target.value)}
                  />
                </div>
              </div>

              <div className="bind">
                <div>
                  <label className="labels">
                    <strong>Address</strong>
                  </label>
                </div>
                <div>
                  <input
                    type="text"
                    class="form-control"
                    name="address"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                  />
                </div>
              </div>

              <div className="sample3">
                <div className="col-md-6 col-12 oned">
                  <div>
                    <label className="labels">
                      <strong>Department</strong>
                    </label>
                  </div>
                  <div>
                    <select
                      className="form-control"
                      name="department"
                      value={department}
                      onChange={(e) => setDeparment(e.target.value)}
                    >
                      <option value="">Select Department</option>
                      {allDepartment &&
                        allDepartment.map((dept) => (
                          <option key={dept.id} value={dept.name}>
                            {dept.name}
                          </option>
                        ))}
                    </select>
                  </div>
                </div>

                <div className="col-md-6 col-12">
                  <div>
                    <label className="labels">
                      <strong>Doctor</strong>
                    </label>
                  </div>
                  <div>
                    <select
                      className="form-control"
                      name="doctor"
                      value={doctor}
                      onChange={(e) => {
                        setDoctor(e.target.value);
                        handleFeeChange(); // Fetch and set the fee based on the selected doctor
                      }}
                    >
                      <option value="">Select Doctor</option>

                      {allDoctors &&
                        allDoctors.map((doct) => {
                          if (doct.department === department) {
                            return (
                              <option key={doct.id} value={doct.name}>
                                {doct.name}
                              </option>
                            );
                          }
                          return null; // Return null for doctors that don't match the condition
                        })}
                    </select>
                  </div>
                </div>
              </div>

              <div className="sample3">
                <div className="col-md-6 col-12 oned">
                  <div>
                    <label className="labels">
                      <strong>Date</strong>
                    </label>
                  </div>
                  <div>
                    <input
                      type="date"
                      className="form-control"
                      name="age"
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                    />
                  </div>
                </div>
                <div className="sample3">
                  <div className="col-md-6 col-12 twod">
                    <div>
                      <label className="labels">
                        <strong>Fee</strong>
                      </label>
                    </div>
                    <div>
                      <select
                        className="form-control"
                        name="fee"
                        style={{width:"200px"}}
                        value={fee}
                        onChange={(e) => {
                          setFee(e.target.value);
                          // Remove the call to handleFeeChange() here to prevent unnecessary re-fetching
                        }}
                      >
                        {allFee &&
                          allFee.map((fee) => {
                            if (fee.name === department) {
                              return <option value={fee.fee}>{fee.fee}</option>;
                            }
                            return null; // Return null for doctors that don't match the condition
                          })}
                      </select>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <button type="submit" className="submit_btn">
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Appointment;
