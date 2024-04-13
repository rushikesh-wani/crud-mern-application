import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { Link, useNavigate, useParams } from "react-router-dom";
import toast from "react-hot-toast";

const UpdateUser = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  //console.log(id);
  const userdetail = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  };

  const inputHandler = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
    // console.log(user);
  };

  const submitForm = async (e) => {
    e.preventDefault();
    await axios
      .put(`https://crud-mern-server-ezz1.onrender.com/api/update/${id}`, user)
      .then((res) => {
        toast.success(res.data?.msg, {
          position: "top-right",
        });
        navigate("/");
      })
      .catch((err) => console.log(err));
  };
  const [user, setUser] = useState(userdetail);
  useEffect(() => {
    axios
      .get(`https://crud-mern-server-ezz1.onrender.com/api/getone/${id}`)
      .then((res) => {
        console.log(res);
        setUser(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="container bg-gray-200 w-screen h-screen pt-10 ">
      <div className="pt-10 flex justify-center items-center">
        <div className="bg-white rounded-lg p-5 w-[345px] sm:w-[500px]">
          <div className="flex space-x-2">
            <Link to={"/"} className="self-center">
              <FaArrowLeft />
            </Link>
            <h1 className="font-bold text-xl">Update User</h1>
          </div>
          <div className="">
            <form className="p-4 " onSubmit={submitForm}>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="firstName"
                >
                  First Name
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="firstName"
                  type="text"
                  placeholder="Enter your first name"
                  name="firstName"
                  onChange={inputHandler}
                  value={user.firstName}
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="lastName"
                >
                  Last Name
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="lastName"
                  type="text"
                  placeholder="Enter your last name"
                  name="lastName"
                  onChange={inputHandler}
                  value={user.lastName}
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  name="email"
                  onChange={inputHandler}
                  value={user.email}
                />
              </div>
              <div className="mb-6">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="password"
                >
                  Password
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="password"
                  type="password"
                  placeholder="Enter your password"
                  name="password"
                  onChange={inputHandler}
                  value={user.password}
                />
              </div>
              <div className="flex items-center justify-between">
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="submit"
                >
                  Register
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateUser;
