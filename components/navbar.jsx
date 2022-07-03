import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import Router from "next/router";
import { useState, useEffect } from "react";

export default function Navbar({ toggleLoginModel }) {
  const { data: session } = useSession();
  const [showDropdown, setShowDropdown] = useState(false);

  useEffect(() => {
    document.addEventListener("click", (e) => {
      setShowDropdown(false);
    });
  }, []);

  return (
    <nav className="z-10 flex justify-between align items-center px-8 py-4 shadow-md fixed top-0 left-0 right-0 bg-white">
      <Link href="/">
        <a>
          <h1 className="text-2xl font-bold cursor-pointer text-black">
            📄 Invoicer
          </h1>
        </a>
      </Link>
      {session ? (
        <>
          <div
            onClick={(e) => {
              e.stopPropagation();
              setShowDropdown(!showDropdown);
            }}
            className="relative text-xl font-bold flex align items-center cursor-pointer"
          >
            <span>Hi, {session.user.name.split(" ")[0]} 👋🏻</span>
            <i
              className={`bi bi-caret-${
                showDropdown ? "up" : "down"
              }-fill ml-2 text-black`}
            ></i>
          </div>
          {showDropdown ? <Dropdown /> : <></>}
        </>
      ) : (
        <button
          onClick={toggleLoginModel}
          className="font-bold px-8 py-2 rounded-sm bg-primary-400 hover:bg-primary-300 text-white"
        >
          Login
        </button>
      )}
    </nav>
  );
}

const Dropdown = () => {
  return (
    <ul
      onClick={(e) => e.stopPropagation()}
      className="absolute top-[5rem] right-8 bg-white box-shadow w-[200px] rounded-sm"
    >
      <li className="p-2 cursor-pointer hover:bg-gray-200 border-b border-b-gray-300 font-bold">
        🙂 My Profile
      </li>
      <li
        onClick={() => Router.push("/invoice")}
        className="p-2 cursor-pointer hover:bg-gray-200 border-b border-b-gray-300 font-bold"
      >
        📄 New Invoice
      </li>
      <li
        onClick={signOut}
        className="p-2 cursor-pointer hover:bg-gray-200 border-b border-b-gray-300 font-bold"
      >
        🎈 Sign Out
      </li>
    </ul>
  );
};
