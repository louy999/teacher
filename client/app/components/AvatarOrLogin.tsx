import React from "react";
import Image from "next/image";
import Link from "next/link";

function AvatarOrLogin() {
  return (
    <div>
      <div className="avatar avatar-ring avatar-md">
        <div className="dropdown-container">
          <div className="dropdown">
            <label
              className="btn btn-ghost flex cursor-pointer px-0"
              tabindex="0"
            >
              <Image
                width={1000}
                height={1000}
                src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
                alt="avatar"
              />
            </label>
            <div className="dropdown-menu dropdown-menu-bottom-left">
              <snap className="dropdown-item text-sm bg-content2">louy</snap>
              <Link href="/" tabindex="-1" className="dropdown-item text-sm">
                Home
              </Link>
              <Link
                href="/profile/12"
                tabindex="-1"
                className="dropdown-item text-sm"
              >
                Profile
              </Link>

              <Link href="/" tabindex="-1" className="dropdown-item text-sm">
                Logout
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AvatarOrLogin;
