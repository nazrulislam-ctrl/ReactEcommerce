import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CartCounter from "../context/CartCounter";

function Navbar() {
  const [isSticky, setSticky] = useState(null);
  const {counter} = useContext(CartCounter);

  const scrollHandeler = () => {
    window.addEventListener("scroll", () => {
      let scrollValue = scrollY;
      if (scrollValue > 10) {
        setSticky(true);
      } 
      else {
        setSticky(false);
      }
    });
  };

  useEffect(() => {
    scrollHandeler();
  }, []);

  const menuList = [
    {
      name: "Home",
      url: "/home",
    },
    {
      name: "Shop",
      url: "/shop",
    },
    {
      name: "Contact",
      url: "/contact",
    },
  ];
  return (
    <>
      <div
        className={`navbar ${isSticky?"bg-blue-400 shadow-sm shadow-blue-300 transition-all duration-0 ": "shadow-sm shadow-gray-700 "} flex justify-between sticky top-0 z-10`}
      >
        <div className="flex ">
          <a className="btn border-t-pink-300 border-b-pink-300 text-xl text-red-300 ">Naz Store</a>
        </div>
        <div className="flex justify-center">
          <div className={`flex justify-center gap-10  ${isSticky?" text-black font-semibold":"text-red-300"} `}>
            {menuList.map((menu, i) => (
              <ul key={i}>
                <Link to={menu.url}>{menu.name}</Link>
              </ul>
            ))}
          </div>
        </div>
        <div className="flex-none">
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className={`btn btn-circle ${isSticky?" text-white":"text-red-300"}`}
            >
              <div className="indicator">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                <span className={`badge badge-sm indicator-item ${isSticky?" text-white":"text-red-300"}`} >{counter}</span>
              </div>
            </div>
            <div
              tabIndex={0}
              className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow"
            >
              <div className="card-body bg-slate-200 ">
                <span className="font-bold text-lg text-black">
                  {counter} Items
                </span>
                <span className="text-black">Subtotal: $999</span>
                <div className="card-actions">
                  <button className="btn btn-primary btn-block">
                    View cart
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-slate-200 rounded-box w-52 text-black"
            >
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
export default Navbar;
