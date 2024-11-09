import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import EmployeeForm from '../components/EmployeeForm';
import axios from 'axios';

export default function Update() {
  const { id } = useParams();
  const [employeeData, setEmployeeData] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://localhost:3000/users/${id}`)
      .then((res) => {
        setEmployeeData(res.data);
      })
      .catch((err) => {
        console.log("Error on fetch employee:", err);
      });
  }, [id]);

  const handleSubmit = (updatedData) => {
    axios.put(`http://localhost:3000/users/${id}`, updatedData)
      .then(() => {
        navigate(`/details/${id}`);
      })
      .catch((err) => {
        console.error('Error updating employee:', err);
      });
  };

  return (
    <div className="flex flex-col justify-center items-center bg-light vh-100">
      <EmployeeForm initialData={employeeData} onSubmit={handleSubmit} />
    </div>
  );
}
