import React, { useEffect, useState } from "react";
import axios from "axios";
import { Trash2, Pencil, Plus } from "lucide-react";
import { useNavigate } from "react-router-dom";

const UserData = () => {
  const [user, setUser] = useState([]);
  const naviagate = useNavigate()
  const token = localStorage.getItem("token");

  useEffect(() => {
    getUser();
  }, []);

  const getUser = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/get-user", {
        headers:{
          "Content-Type": "Application/json",
          "Authorization": "Bearer " + token
        }
      });

      setUser(response.data.data);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleEdit = async (id) => {
    naviagate(`/edit-user/${id}`)
  }

  const handleDelete = async (id) => {
    try {
      const response = await axios.delete(`http://localhost:5000/api/delete-user/${id}`, {
        headers:{
          "Content-Type": "Application/json",
          "Authorization": "Bearer " + token
        }
      });
      if(response.data) {
        getUser()
      }
    } catch (error) {
      console.log(error);
    }
  }

  const handleSignOut = () => {
    localStorage.removeItem("token");
  }

  return (
    <div className="min-h-screen bg-gray-100 px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Users</h1>
          </div>
          <div>
            <button onClick={handleSignOut}
              className="inline-flex items-center gap-2 rounded-lg bg-blue-50 px-3 py-2 text-sm font-medium text-blue-600 transition hover:bg-blue-100"
            >
              Sign Out
            </button>
          </div>
        </div>

        <div className="overflow-hidden rounded-2xl bg-white shadow-lg ring-1 ring-gray-200">
          <div className="border-b border-gray-200 px-6 py-5">
            <h2 className="text-lg font-semibold text-gray-900">User List</h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-gray-500">
                    ID
                  </th>

                  <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-gray-500">
                    Image
                  </th>

                  <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-gray-500">
                    Name
                  </th>

                  <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-gray-500">
                    Email
                  </th>

                  <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-gray-500">
                    Phone
                  </th>

                  <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-gray-500">
                    Address
                  </th>
                  <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-gray-500">
                    Actions
                  </th>
                </tr>
              </thead>

              <tbody className="divide-y divide-gray-100">
                {user.map((data, index) => {
                  return (
                    <tr
                      key={index}
                      className="transition hover:bg-indigo-50/50"
                    >
                      <td className="whitespace-nowrap px-6 py-5">
                        {data._id}
                      </td>

                      <td className="whitespace-nowrap px-6 py-5">
                        <div className="flex items-center gap-3">
                          <div>
                            <img src={data.image} width="100px" accept="image/*" />
                          </div>
                        </div>
                      </td>

                      <td className="whitespace-nowrap px-6 py-5">
                        <div className="flex items-center gap-3">
                          <div>
                            <p className="font-semibold text-gray-900">
                              {data.name}
                            </p>
                          </div>
                        </div>
                      </td>
                      
                      <td className="whitespace-nowrap px-6 py-5">
                        <div className="flex items-center gap-2 text-sm text-gray-700">
                          {data.email}
                        </div>
                      </td>

                      <td className="whitespace-nowrap px-6 py-5">
                        <div className="flex items-center gap-2 text-sm text-gray-700">
                          {data.phone}
                        </div>
                      </td>

                      <td className="px-6 py-5">
                        <p className="max-w-xs text-sm text-gray-600">
                          {data.address}
                        </p>
                      </td>
                      <td className="px-6 py-5">
                        <div className="flex items-center justify-center gap-2">
                          {/* UPDATE BUTTON */}
                          <button
                            onClick={() => handleEdit(data._id)}
                            className="inline-flex items-center gap-2 rounded-lg bg-blue-50 px-3 py-2 text-sm font-medium text-blue-600 transition hover:bg-blue-100"
                          >
                            <Pencil size={16} />
                            Edit
                          </button>
                          {/* DELETE BUTTON */}
                          <button
                            onClick={() => handleDelete(data._id)}
                            className="inline-flex items-center gap-2 rounded-lg bg-red-50 px-3 py-2 text-sm font-medium text-red-600 transition hover:bg-red-100"
                          >
                            <Trash2 size={16} />
                            Delete
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserData;
