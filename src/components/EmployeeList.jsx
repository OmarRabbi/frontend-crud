import React from "react";
import { Link } from "react-router-dom";

const EmployeeList = ({ employees, onDelete, onToggleBlock }) => {
  return (
    <>
      <table className="min-w-full">
        <thead className="bg-gray-100">
          <tr>
            <th className="py-2 px-4">Full Name</th>
            <th className="py-2 px-4 text-center">Options</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((data) => (
            <tr key={data.id} className="border-b hover:bg-gray-50">
              <td className="py-2 px-4 text-center">
                {`${data.firstName} ${data.lastName}`}
              </td>
              <td className="py-2 px-4 flex items-center justify-center space-x-2">
                <Link to={`/details/${data.id}`}>
                  <button
                    className="bg-blue-500 text-white px-2 py-1 rounded-md hover:bg-blue-600"
                    disabled={data.blocked}
                  >
                    Details
                  </button>
                </Link>
                {data.blocked ? (
                  <button
                    onClick={() => onToggleBlock(data.id, false)}
                    className="bg-green-500 text-white px-2 py-1 rounded-md hover:bg-green-600"
                  >
                    Unblock
                  </button>
                ) : (
                  <button
                    onClick={() => onToggleBlock(data.id, true)}
                    className="bg-orange-500 text-white px-2 py-1 rounded-md hover:bg-orange-600"
                  >
                    Block
                  </button>
                )}
                <button
                  onClick={() => onDelete(data.id)}
                  className="bg-red-500 text-white px-2 py-1 rounded-md hover:bg-red-600"
                  disabled={data.blocked}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default EmployeeList;
