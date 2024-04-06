"use client";
import React, { useState, useEffect } from "react";
import { setCookie } from "cookies-next";

import Image from "next/image";
import axiosClient from "../utils/api";
import Link from "next/link";

function Register() {
  const [input, setInput] = useState<any>({
    password: "",
    name: "",
    phone: "",
    email: "",
  });
  const [err, setError] = useState<any>("");
  const [con, setCon] = useState<any>("");
  const handelChange = (e: any) => {
    setInput((prev: any) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section className="bg-border h-[100vh] overflow-hidden">
      <div className="flex justify-center items-center h-screen">
        <main className="flex items-center justify-center  text-center  lg:text-start md:text-start	 px-4 py-4  sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 w-full md:w-4/6 ">
          <div className="w-full flex justify-center flex-wrap">
            <h1 className="mt-8 capitalize text-2xl w-full text-center font-bold text-content1 sm:text-3xl md:text-4xl">
              <span className=" font-extrabold text-p"> 22Deal🏘️</span>
            </h1>
            <form className="mx-auto flex w-full max-w-lg flex-col rounded-xl border border-border bg-backgroundSecondary p-2 sm:p-12">
              <div className="form-group capitalize">
                <Link href="/" className="block text-p">
                  <span className="sr-only">Home</span>
                </Link>
                {con}
                <div className="text-p uppercase text-xl">{err}</div>

                <div className="form-field">
                  <label className="form-label">your name</label>

                  <input
                    placeholder="Type here"
                    type="name"
                    id="name"
                    name="name"
                    onChange={handelChange}
                    className="input max-w-full"
                  />
                </div>
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
                  <label className="form-label">your phone</label>

                  <input
                    placeholder="Type here"
                    type="number"
                    id="phone"
                    name="phone"
                    onChange={handelChange}
                    className="input max-w-full"
                  />
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
                </div>

                <div className="form-field">
                  <div className="form-control justify-between">
                    <label className="form-label">
                      <Link
                        href="/"
                        className="link link-underline-hover text-p text-sm"
                      >
                        Forgot your password?
                      </Link>
                    </label>
                  </div>
                </div>
                <div className="form-field pt-3">
                  <div className="form-control justify-between">
                    <button
                      type="button"
                      className="btn text-p w-full hover:text-backgroundSecondary hover:bg-p"
                    >
                      Sign in
                    </button>
                  </div>
                </div>

                <div className="form-field">
                  <div className="form-control">
                    <Link
                      href="/login"
                      className="link link-underline-hover text-p text-sm"
                    >
                      have an account? Sign in
                    </Link>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </main>
      </div>
    </section>
  );
}

export default Register;
