import React from 'react'
import EmployeeForm from '../components/EmployeeForm'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function Create() {
  const navigate = useNavigate()
  const handleSubmit = (employeeData) => {
    axios.post("http://localhost:3000/users",employeeData)
    .then(res => {
        console.log(res)
        navigate('/')
    })
    .catch(err => console.log("Error on creating employee:", err))
  };

  return (
    <div className="flex flex-col justify-center items-center bg-light vh-100">
      <EmployeeForm initialData={null} onSubmit={handleSubmit}/>
    </div>
  )
}
