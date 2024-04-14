import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { FaEye, FaPen, FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
const Users = () => {
  const [user, setUser] = useState();

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const res = await axios.get(
      "https://crud-mern-server-ezz1.onrender.com/api/getall"
    );
    setUser(res.data);
    // console.log(res);
  };

  const deleteUser = async (id) => {
    await axios
      .delete(`https://crud-mern-server-ezz1.onrender.com/api/delete/${id}`)
      .then((res) => {
        // This line of code is needed to refresh the table data but rather we have added state user in dependency array in useEffect()
        setUser((prevUser) => prevUser.filter((user) => user._id !== id));
        console.log(res);
        toast.success(res.data.msg, {
          position: "top-right",
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <div className=" bg-gray-200 w-screen h-screen pt-10 sm:p-20">
        <div className="flex justify-between mx-2 sm:mx-56">
          <h1 className="font-bold text-2xl py-4 uppercase">Records</h1>
          <div className="self-center">
            <Link
              to={"/add"}
              className="px-4 py-1 sm:py-2 rounded-xl text-white font-semibold bg-emerald-600 hover:bg-emerald-500 shadow-lg"
            >
              Add User
            </Link>
          </div>
        </div>

        <div className="mx-2 sm:mx-56 relative overflow-x-auto shadow-md rounded-lg sm:rounded-lg max-h-[500px] no-scrollbar">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-md text-gray-700 uppercase bg-opacity-75 backdrop-filter backdrop-blur-lg bg-emerald-50 dark:bg-gray-700 dark:text-gray-400 sticky top-0 z-10">
              <tr>
                <th scope="col" className=" px-6 py-3">
                  Sr.no.
                </th>
                <th scope="col" className="px-6 py-3">
                  First_Name
                </th>
                <th scope="col" className="px-6 py-3">
                  Last_Name
                </th>
                <th scope="col" className="px-6 py-3">
                  Email
                </th>
                <th scope="col" className="px-6 py-3">
                  Password
                </th>
                <th scope="col" className="px-6 py-3">
                  Action
                </th>
              </tr>
            </thead>

            {user ? (
              <tbody className="h-44 overflow-auto">
                {user.map((user, index) => (
                  <tr
                    key={user._id}
                    className="odd:bg-white odd:dark:bg-gray-900 even:bg-emerald-50 even:dark:bg-gray-800 border-b dark:border-gray-700"
                  >
                    {/* <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-600 whitespace-nowrap dark:text-white"
                    >
                      {index + 1}
                    </th>
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-600 whitespace-nowrap dark:text-white"
                    >
                      {user?.firstName}
                    </th> */}
                    <td className="px-6 py-4 font-medium text-gray-600">
                      {index + 1}
                    </td>
                    <td className="px-6 py-4 font-medium text-gray-600">
                      {user?.firstName}
                    </td>
                    <td className="px-6 py-4 font-medium text-gray-600">
                      {user?.lastName}
                    </td>
                    <td className="px-6 py-4 font-medium text-gray-600">
                      {user?.email}
                    </td>
                    <td className="px-6 py-4 font-medium text-gray-600">
                      {user?.password}
                    </td>
                    <td className="px-6 py-4 flex space-x-3">
                      <Link
                        to={"/view/" + user._id}
                        className="bg- bg-sky-600 hover:bg-sky-500  shadow-md shadow-sky-300 text-white p-2 rounded-full"
                      >
                        <FaEye />
                      </Link>
                      <Link
                        to={"/edit/" + user._id}
                        className="bg-emerald-600 hover:bg-emerald-500 shadow-md shadow-emerald-300 p-2 rounded-full text-white"
                      >
                        <FaPen />
                      </Link>

                      <button
                        onClick={(e) => {
                          deleteUser(user._id);
                        }}
                        className="bg-red-600 hover:bg-red-500 shadow-md shadow-red-300 text-white p-2 rounded-full"
                      >
                        <FaTrashAlt />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            ) : (
              <tbody className="px-6 py-4 font-medium text-gray-600 border text-center">
                <tr role="status" className="">
                  <td colSpan="6" className="py-10">
                    <div className="flex justify-center items-center">
                      <svg
                        aria-hidden="true"
                        className="inline w-10 h-10 text-white animate-spin dark:text-gray-600 fill-blue-600"
                        viewBox="0 0 100 101"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                          fill="currentColor"
                        />
                        <path
                          d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                          fill="currentFill"
                        />
                      </svg>
                    </div>
                  </td>
                </tr>
              </tbody>
            )}
          </table>
        </div>
      </div>
    </>
  );
};

export default Users;
