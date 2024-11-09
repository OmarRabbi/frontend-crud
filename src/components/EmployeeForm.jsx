import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const EmployeeForm = ({ initialData, onSubmit }) => {
  const [employee, setEmployee] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });
  useEffect(() => {
    if (initialData) {
      setEmployee(initialData);
    }
  }, [initialData]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(employee);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-4 border border-gray-200 rounded-md shadow-md w-[95%] sm:w-[80%] md:w-[60%] mx-auto my-12"
    >
      <h2 className="text-2xl font-semibold mb-4">
        {initialData ? "Edit" : "Add"} a Employee
      </h2>
      <div className="mb-4">
        <label className="block text-gray-700">First Name</label>
        <input
          type="text"
          name="firstName"
          value={employee.firstName}
          onChange={(e) =>
            setEmployee({ ...employee, firstName: e.target.value })
          }
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Last Name</label>
        <input
          type="text"
          name="lastName"
          value={employee.lastName}
          onChange={(e) =>
            setEmployee({ ...employee, lastName: e.target.value })
          }
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Email</label>
        <input
          type="email"
          name="email"
          value={employee.email}
          onChange={(e) => setEmployee({ ...employee, email: e.target.value })}
          disabled={!!initialData}
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-100"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Phone Number</label>
        <input
          type="tel"
          name="phone"
          value={employee.phone}
          onChange={(e) => setEmployee({ ...employee, phone: e.target.value })}
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>
      <button
        type="submit"
        className="w-fit sm:w-[20%] bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700"
      >
        {initialData ? "Update" : "Create"}
      </button>
      <Link to="/">
        <button className="w-fit sm:w-[20%] ml-8 my-4 w-[30%] bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
          Back
        </button>
      </Link>
    </form>
  );
};

export default EmployeeForm;
