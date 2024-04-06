import React from "react";
import Link from "next/link";

function LoginRingster() {
  return (
    <div className="sm:flex sm:gap-4">
      <Link
        className="rounded-md bg-p px-5 py-2.5 text-sm font-medium text-white shadow hover:text-[1.1rem] duration-300"
        href="/login"
      >
        Login
      </Link>

      <div className="hidden sm:flex">
        <Link
          className="rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-black hover:text-[1.1rem]  duration-300"
          href="/register"
        >
          Register
        </Link>
      </div>
    </div>
  );
}

export default LoginRingster;
