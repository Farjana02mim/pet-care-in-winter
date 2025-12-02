import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Profile = () => {
  const { user } = useContext(AuthContext);

  const handleUpdate = () => {
    toast.info("❄️ Update Profile feature coming soon!", {
      position: "top-center",
      autoClose: 2500,
      theme: "colored",
    });
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-pink-100 via-orange-100 to-gray-200 text-center relative overflow-hidden">

      {/* Toasts */}
      <ToastContainer />

      {/* Floating Winter Icons */}
      <div className="absolute top-10 left-10 text-white text-4xl animate-spin-slow">
        🐾
      </div>
      <div className="absolute bottom-16 right-12 text-white text-4xl animate-bounce">
        ❄️
      </div>

      <h1 className="text-4xl md:text-6xl font-extrabold text-gray-800 drop-shadow-lg">
        🐶 Pet Winter Profile
      </h1>

      {user ? (
        <div className="mt-10 flex flex-col items-center gap-5 bg-white/30 backdrop-blur-md p-8 rounded-2xl shadow-xl">
          {/* User Image */}
          <img
            src={user.photoURL || "https://via.placeholder.com/150"}
            alt={user.displayName || "User"}
            className="w-32 h-32 rounded-full object-cover ring-4 ring-pink-300"
          />

          {/* User Info */}
          <h2 className="text-2xl font-semibold text-gray-800">
            {user.displayName || "No Name"}
          </h2>
          <p className="text-gray-700">{user.email || "No Email"}</p>

          {/* Update Profile Button */}
          <button
            onClick={handleUpdate}
            className="mt-4 px-6 py-2 bg-gradient-to-r from-pink-400 to-orange-300 text-white font-semibold rounded-lg shadow hover:opacity-90 transition"
          >
            Update Profile
          </button>
        </div>
      ) : (
        <p className="mt-10 text-gray-700">
          You need to be logged in to see your profile.
        </p>
      )}
    </div>
  );
};

export default Profile;
