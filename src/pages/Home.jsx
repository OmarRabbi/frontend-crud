import React, { useEffect, useState } from "react";
import axios from "axios";
import EmployeeList from "../components/EmployeeList";
import { Link } from "react-router-dom";

export default function Home() {
  const [data, setData] = useState([]);
  // fetch data
  useEffect(() => {
    axios
      .get("http://localhost:3000/users")
      .then((res) => setData(res.data))
      .catch((err) => console.log("Error on fetch employee:", err));
  }, []);
  // delete data
  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this employee?")) {
      axios
        .delete(`http://localhost:3000/users/${id}`)
        .then(() => {
          setData(data.filter((employee) => employee.id !== id));
        })
        .catch((err) => console.log("Error on deleting employee:", err));
    }
  };

  const handleToggleBlock = (id, blockStatus) => {
    axios
      .patch(`http://localhost:3000/users/${id}`, { blocked: blockStatus })
      .then(() => {
        setData((prevData) =>
          prevData.map((employee) =>
            employee.id === id
              ? { ...employee, blocked: blockStatus }
              : employee
          )
        );
      })
      .catch((err) => console.log("Error on updating blocked status:", err));
  };

  return (
    <div className="flex flex-col justify-center items-center bg-light vh-100">
      <h1 className="text-2xl font-semibold my-4">List of Employees</h1>
      <div className="w-[95%] sm:w-[80%] bg-white border border-gray-200 rounded-md shadow-lg">
        <div className="flex justify-end mr-[5%] my-1">
          <Link to="/create">
            <button className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700">
              Add
            </button>
          </Link>
        </div>
        <EmployeeList
          employees={data}
          onDelete={handleDelete}
          onToggleBlock={handleToggleBlock}
        />
      </div>
    </div>
  );
}
