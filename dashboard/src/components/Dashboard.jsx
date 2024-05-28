import React, { useContext, useEffect, useState } from "react";
import { Context } from "../main";
import axios from "axios";
import { Navigate } from "react-router-dom";
import { GoCheckCircleFill } from "react-icons/go";
import { AiFillCloseCircle } from "react-icons/ai";
import { toast } from "react-toastify";

const Dashboard = () => {
  const { isAuthenticated, user } = useContext(Context);
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
<<<<<<< HEAD
        const {data} = await axios.get("https://we-care-vscm.vercel.app/api/v1/appointment/getall", {withCredentials: true});
        setAppointments(data.appointments)
=======
        const { data } = await axios.get(
          "https://wecare-rcx6.onrender.com/api/v1/appointment/getall",
          { withCredentials: true }
        );
        setAppointments(data.appointments);
>>>>>>> b1342a04433d3712c072012d481543d238e6a6b5
      } catch (error) {
        setAppointments([]);
        console.log(
          "SOME ERROR OCCURED WHILE FETCHING APPOINTMENTS",
          error
        );
      }
    };
    fetchAppointments();
  }, []);
  const handleUpdateStatus = async (appointmentId, status) => {
    try {
      const { data } = await axios.put(
<<<<<<< HEAD
        `https://we-care-vscm.vercel.app/api/v1/appointment/update/${appointmentId}`,
=======
        `https://wecare-rcx6.onrender.com/api/v1/appointment/update/${appointmentId}`,
>>>>>>> b1342a04433d3712c072012d481543d238e6a6b5
        { status },
        { withCredentials: true }
      );
      setAppointments((prevAppointments) =>
        prevAppointments.map((appointment) =>
          appointment._id === appointmentId
            ? { ...appointment, status }
            : appointment
        )
      );
      toast.success(data.message);
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  if (!isAuthenticated) {
    return <Navigate to={"/login"} />;
  }
  return (
    <>
      <section className='dashboard page'>
        <div className='banner'>
          <div className='firstBox'>
            <img src='/doc.png' alt='docImg' />
            <div className='content'>
              <div>
                <p>Hello ,</p>
                <h5>
                  {user && `${user.firstName} ${user.lastName}`}
                </h5>
              </div>
              <p>
                As a doctor, I embody compassion, skill, and
                dedication. My empathy guides my patient-centered
                care, while my professionalism ensures reliability and
                trust. Through innovation and collaboration, I provide
                ethical, attentive, and holistic healing, making a
                lasting impact on lives.
              </p>
            </div>
          </div>
          <div className='secondBox'>
            <p>Total Appointments</p>
            <h3>{appointments.length}</h3>
          </div>
          <div className='thirdBox'>
            <p>Registered Doctors</p>
            <h3>10</h3>
          </div>
        </div>
        <div className='banner'>
          <h5>Appointments</h5>
          <table>
            <thead>
              <tr>
                <th>Patient</th>
                <th>Date</th>
                <th>Doctor</th>
                <th>Department</th>
                <th>Status</th>
                <th>Visited</th>
              </tr>
            </thead>
            <tbody>
              {appointments && appointments.length > 0 ? (
                appointments.map((appointment) => {
                  return (
                    <tr key={appointment._id}>
                      <td>{`${appointment.firstName} ${appointment.lastName}`}</td>
                      <td>{`${appointment.appointment_date.substring(
                        0,
                        16
                      )}`}</td>
                      <td>{`${appointment.doctor.firstName} ${appointment.doctor.lastName}`}</td>
                      <td>{appointment.department}</td>
                      <td>
                        <select
                          className={
                            appointment.status === "Pending"
                              ? "value-pending"
                              : appointment.status === "Rejected"
                                ? "value-rejected"
                                : "value-accepted"
                          }
                          value={appointment.status}
                          onChange={(e) =>
                            handleUpdateStatus(
                              appointment._id,
                              e.target.value
                            )
                          }
                        >
                          <option
                            value='Pending'
                            className='value-pending'
                          >
                            Pending
                          </option>
                          <option
                            value='Accepted'
                            className='value-accepted'
                          >
                            Accepted
                          </option>
                          <option
                            value='Rejected'
                            className='value-rejected'
                          >
                            Rejected
                          </option>
                        </select>
                      </td>
                      <td>
                        {appointment.hasVisited === true ? (
                          <GoCheckCircleFill className='green' />
                        ) : (
                          <AiFillCloseCircle className='red' />
                        )}
                      </td>
                    </tr>
                  );
                })
              ) : (
                <h1>NO APPOINTMENTS</h1>
              )}
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
};

export default Dashboard;
