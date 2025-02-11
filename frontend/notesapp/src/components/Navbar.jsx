import React from "react";
import ProfileInfo from "./ProfileInfo";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate;
  const onLogOut = () => {
    navigate("/login");
  };

  return (
    <div className="bg-white flex items-center justify-between px-6 py-2 drop-shadow">
      <h2 className="text-2xl font-medium text-black py-2 hover:scale-105 transition duration-300">
        Notes
      </h2>
      <ProfileInfo logout={onLogOut} />
    </div>
  );
}
