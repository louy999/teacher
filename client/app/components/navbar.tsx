import React from "react";
import { nameTeacher } from "../lib/exportsFunction";
import Link from "next/link";
import Notification from "./notification";
import Chat from "./chat";
import AvatarOrLogin from "./AvatarOrLogin";
import LoginRingster from "./LoginRingster";

function Navbar() {
  return (
    <div className="navbar md:w-2/4 md:fixed z-[456789]   md:left-1/2 md:translate-x-[-50%] px-3 rounded-md top-3">
      <div className="navbar-start">
        <Link href="/" className="navbar-item">
          {nameTeacher}
        </Link>
      </div>

      <div className="navbar-end">
        <Chat />
        <Notification />
        <AvatarOrLogin />
      </div>
      {/* <LoginRingster /> */}
    </div>
  );
}

export default Navbar;
