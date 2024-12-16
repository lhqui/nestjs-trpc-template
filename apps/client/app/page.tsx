"use client";
import { trpc } from "../app/trpc";

import { useState } from "react";

export default function ClientSide() {
  const [birthYear, setBirthYear] = useState("");
  const [inputAge, setAge] = useState<number | null>(null);

  const onHandleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newInput = e.target.value;

    setAge(parseInt(newInput));
  };

  const calculateBirthYear = async () => {
    if (!inputAge) return;

    const { message } = await trpc.birth.query({ age: inputAge });
    setBirthYear(message);
  };

  return (
    <div>
      <div className="w-full max-w-sm">
        <div className="mb-4">
          <label
            htmlFor="number"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Enter your age
          </label>
          <input
            type="number"
            id="number"
            onChange={onHandleChange}
            className="block w-full border border-gray-300 rounded-lg shadow-sm p-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        {/* Button */}
        <button
          onClick={calculateBirthYear}
          className="w-full bg-blue-500 text-white font-medium py-2 rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
        >
          Submit
        </button>
      </div>
      <div className="my-4">{birthYear}</div>
    </div>
  );
}
