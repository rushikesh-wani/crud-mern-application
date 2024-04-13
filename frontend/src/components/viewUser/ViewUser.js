import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaArrowLeft, FaUserAlt } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";

const ViewUser = () => {
  const { id } = useParams();
  const [userDetails, setUserDetails] = useState();
  const getDetails = async () => {
    await axios
      .get(`https://crud-mern-server-ezz1.onrender.com/api/getone/${id}`)
      .then((res) => {
        setUserDetails(res.data);
        console.log(userDetails);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getDetails();
  }, [id]);

  const createdAt = new Date(userDetails?.createdAt);
  const updatedAt = new Date(userDetails?.updatedAt);
  return (
    <div className="h-screen w-screen bg-gray-200 flex justify-center items-center px-5">
      {userDetails ? (
        <div className="bg-white rounded-md p-5 w-96 shadow-2xl  ">
          <Link to={"/"}>
            <FaArrowLeft />
          </Link>
          <div className="py-2">
            <div className="flex justify-center my-2">
              <FaUserAlt className=" bg-lime-600 p-2 rounded-full w-20 h-20 text-white" />
            </div>
            <div className="text-gray-950 text-lg font-semibold text-center pb-2">
              <span>
                {userDetails?.firstName} {userDetails?.lastName}
              </span>
            </div>

            <div>
              <div className="text-gray-500 font-semibold">
                Id: <span className="text-gray-700">{userDetails?._id}</span>
              </div>
              <div className="text-gray-500 font-semibold">
                First Name:{" "}
                <span className="text-gray-700">{userDetails?.firstName}</span>
              </div>
              <div className="text-gray-500 font-semibold">
                Last Name:{" "}
                <span className="text-gray-700">{userDetails?.lastName}</span>
              </div>

              <div className="text-gray-500 font-semibold">
                Email:{" "}
                <span className="text-gray-700">{userDetails?.email}</span>
              </div>
              <div className="text-gray-500 font-semibold">
                Password:{" "}
                <span className="text-gray-700">{userDetails?.password}</span>
              </div>
              <div className="text-gray-500 font-semibold">
                Created on:{" "}
                <span className="text-gray-700">
                  {createdAt.toLocaleDateString()}{" "}
                  {createdAt.toLocaleTimeString()}
                </span>
              </div>
              <div className="text-gray-500 font-semibold">
                Updated on:{" "}
                <span className="text-gray-700">
                  {updatedAt.toLocaleDateString()}{" "}
                  {updatedAt.toLocaleTimeString()}
                </span>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="bg-white rounded-md p-5 w-96 shadow-2xl ">
          <Link to={"/"}>
            <FaArrowLeft />
          </Link>
          <div className="py-2 animate-pulse">
            <div className="flex justify-center my-2">
              <div className="bg-gray-200 p-2 rounded-full w-20 h-20"></div>
            </div>
            <div className="text-gray-950 text-lg font-semibold text-center pb-2">
              <span className="text-gray-700 bg-gray-200 h-4 w-36 rounded-xl inline-block"></span>
            </div>

            <div>
              <div className="text-gray-500 font-semibold">
                Id:{" "}
                <span className="text-gray-700 bg-gray-200 h-4 w-40 rounded-xl inline-block"></span>
              </div>
              <div className="text-gray-500 font-semibold">
                First Name:{" "}
                <span className="text-gray-700 bg-gray-200 h-4 w-40 rounded-xl inline-block"></span>
              </div>
              <div className="text-gray-500 font-semibold">
                Last Name:{" "}
                <span className="text-gray-700 bg-gray-200 h-4 w-36 rounded-xl inline-block"></span>
              </div>

              <div className="text-gray-500 font-semibold">
                Email:{" "}
                <span className="text-gray-700 bg-gray-200 h-4 w-44 rounded-xl inline-block"></span>
              </div>
              <div className="text-gray-500 font-semibold">
                Password:{" "}
                <span className="text-gray-700 bg-gray-200 h-4 w-24 rounded-xl inline-block"></span>
              </div>
              <div className="text-gray-500 font-semibold">
                Created on:{" "}
                <span className="text-gray-700 bg-gray-200 h-4 w-28 rounded-xl inline-block"></span>
              </div>
              <div className="text-gray-500 font-semibold">
                Updated on:{" "}
                <span className="text-gray-700 bg-gray-200 h-4 w-32 rounded-xl inline-block"></span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ViewUser;
