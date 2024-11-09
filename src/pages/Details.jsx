import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function Details() {
  const [data, setData] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    axios
      .get(`http://localhost:3000/users/${id}`)
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="bg-white p-4 border border-gray-200 rounded-md shadow-md max-w-md mx-auto mt-12">
      <h2 className="text-2xl font-semibold mb-4">Employee Details</h2>
      <p className="text-gray-700 mb-2 text-start">
        <strong>Full Name:</strong> {data.firstName} {data.lastName}
      </p>
      <p className="text-gray-700 mb-2 text-start">
        <strong>Email:</strong> {data.email}
      </p>
      <p className="text-gray-700 mb-4 text-start">
        <strong>Phone Number:</strong> {data.phone}
      </p>
      <Link to={`/update/${id}`}>
        <button className="w-[20%] bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700">
          Edit
        </button>
      </Link>
      <Link to="/">
        <button className="w-[20%] ml-8 my-4 w-[30%] bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
          Back
        </button>
      </Link>
    </div>
  );
}
