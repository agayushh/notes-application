import React, { useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

export default function PasswordInput({ value, onChange, placeholder }) {
  const [isShowPassword, setIsShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setIsShowPassword(!isShowPassword);
  };
  return (
    <div className="flex items-center bg-transparent border-[1.5px] px-3 rounded-lg mb-4">
      <input
        type={isShowPassword ? "text" : "password"}
        value={value}
        onChange={onChange}
        placeholder={placeholder || "Password"}
        className="w-full bg-transparent py-2 rounded-lg outline-none"
      />
      {!isShowPassword ? (
        <FaRegEye
          onClick={toggleShowPassword}
          className="cursor-pointer"
          size={22}
        />
      ) : (
        <FaRegEyeSlash onClick={toggleShowPassword} size={22} />
      )}
    </div>
  );
}
