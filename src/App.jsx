import React from "react";
import { useState } from "react";
export default function PasswordGenerator() {
  const [parol1, setParol1] = useState("");
  const [parol2, setParol2] = useState("");
  
  function generate() {
    const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+{}[]<>?";
    let pasword = ''
    for (let i = 0; i < 12; i++) {
      let index = Math.floor(Math.random() * charset.length);
      pasword +=charset[index];
      console.log("Hello world")
    }
    return pasword;
  }
    const HandleCLick = () => {
    setParol1(generate());
    setParol2(generate());
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#111827]">
      <div className="bg-[#1e293b] text-white p-10  shadow-lg w-[420px]">
        <h1  className="text-3xl font-bold leading-tight">
          Generate a <br />
          <span className="text-green-500">random password</span>
        </h1>

        <p className="text-gray-400 mt-2 text-sm">
          Never use an insecure password again.
        </p>

        <button
        onClick={HandleCLick}
          className="mt-6 bg-green-500 text-[#1e293b] font-semibold px-5 py-2 rounded-md hover:bg-green-400 transition w-fit"
        >
          Generate passwords
        </button>

        <div className="mt-6 border-t border-gray-700 pt-4 flex gap-4">
          <input
            value={parol1}
            type="text"
            readOnly
            placeholder=""
            className="bg-[#24324a] w-full py-2 px-3 rounded-md text-center text-sm tracking-wide outline-none"
          />
          <input
            value={parol2}
            type="text"
            readOnly
            placeholder=""
            className="bg-[#24324a] w-full py-2 px-3 rounded-md text-center text-sm tracking-wide outline-none"
          />
        </div>
      </div>
    </div>
  );
}
