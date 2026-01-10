"use client";

import { UseFormRegisterReturn } from "react-hook-form";

interface InputLineProps {
  label: string;
  placeholder?: string;
  type?: string;
  error?: string;
  register: UseFormRegisterReturn;
}

export function InputLine({ label, placeholder, type = "text", error, register }: InputLineProps) {
  return (
    <div className="flex w-full flex-col items-start">
      <label className="mb-1 text-left text-sm font-medium">{label}</label>

      <input
        {...register}
        placeholder={placeholder}
        type={type}
        className="focus:border-main w-full border-b border-gray-300 p-2 text-left text-sm transition-colors hover:border-gray-400 focus:outline-none"
      />

      {error && <p className="mt-1 text-left text-xs text-red-500">{error}</p>}
    </div>
  );
}
