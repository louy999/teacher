"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import axiosClient from "../../utils/api";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Wave from "./components/wave";

function Login() {
  const router = useRouter();

  const [input, setInput] = useState<any>({
    password: "",
    email: "",
  });

  const [err, setError] = useState<any>("");
  const handelChange = (e: any) => {
    setInput((prev: any) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section className="bg-border h-[100vh] overflow-hidden">
      {/* <Wave /> */}
      <main className="flex items-center justify-center h-full  text-center	 lg:text-start md:text-start max-sm:h-5/6	 px-8 py-8 sm:px-12 z-20 relative lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6">
        <div className="max-w-xl lg:max-w-3xl">
          <h1 className="mt-7 text-2xl font-bold text-content1 sm:text-3xl md:text-4xl">
            <span className=" font-extrabold text-p">hi hello</span>
          </h1>

          <form className="mx-auto flex w-full max-w-lg flex-col rounded-xl border border-border bg-backgroundSecondary p-4 sm:p-16 ">
            <div className="form-group">
              <Link href="/" className="block text-p">
                <span className="sr-only">Home</span>
              </Link>
              <div className="form-field">
                <label className="form-label">Email address</label>

                <input
                  placeholder="Type here"
                  type="email"
                  id="Email"
                  name="email"
                  onChange={handelChange}
                  className="input max-w-full"
                />
                <label className="form-label">
                  <span className="form-label-alt">
                    Please enter Link valid email.
                  </span>
                </label>
              </div>
              <div className="form-field">
                <label className="form-label">
                  <span>Password</span>
                </label>
                <div className="form-control">
                  <input
                    placeholder="Type here"
                    type="password"
                    id="Password"
                    name="password"
                    onChange={handelChange}
                    className="input max-w-full"
                  />
                </div>
                {err}
              </div>
              <div className="form-field">
                <div className="form-control justify-between">
                  <label className="form-label">
                    <Link
                      href="/"
                      className="link link-underline-hover  text-sm text-p"
                    >
                      Forgot your password?
                    </Link>
                  </label>
                </div>
              </div>
              <div className="form-field pt-5">
                <div className="form-control justify-between">
                  <button
                    type="button"
                    className="btn text-p w-full hover:text-backgroundSecondary hover:bg-p  "
                  >
                    Sign in
                  </button>
                </div>
              </div>

              <div className="form-field">
                <div className="form-control">
                  <Link
                    href="/register"
                    className="link link-underline-hover text-p text-sm"
                  >
                    Create new account
                  </Link>
                </div>
              </div>
            </div>
          </form>
        </div>
      </main>
    </section>
  );
}

export default Login;
