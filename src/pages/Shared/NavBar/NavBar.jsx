import { NavLink } from "react-router-dom";
// import icon from '../../../assets/icon/151-1511569_cart-notifications-free-shopping-cart-favicon-hd-png-removebg-preview.png'

const NavBar = () => {
  const nav = (
    <>
      <li>
        <NavLink to={"/"}>Home</NavLink>
      </li>
      <li>
        <NavLink>Contact Us</NavLink>
      </li>
      <li>
        <NavLink className="">Dashboard</NavLink>
      </li>
      <li>
        <NavLink to={"/menu"}>Our Menu</NavLink>
      </li>
      <li>
        <NavLink>Our Shop</NavLink>
        {/* <img src={icon} className="w-[50px] h-[30px] p-0" alt="" /> */}
      </li>
      <li className="flex flex-row">
        <button>Sign Out</button>
        <div className="avatar -mt-3 -ml-6">
          <div className="w-10 rounded">
          <svg width="40" height="40" viewBox="0 0 55 50" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M43.8511 39.7854C46.0692 37.8885 47.8362 35.5977 49.043 33.0546C50.2497 30.5115 50.8706 27.7701 50.867 25C50.867 13.7812 40.8753 4.6875 28.5488 4.6875C16.2222 4.6875 6.23048 13.7812 6.23048 25C6.22696 27.7701 6.84777 30.5115 8.05452 33.0546C9.26127 35.5977 11.0283 37.8885 13.2464 39.7854C17.3826 43.3414 22.859 45.3195 28.5488 45.3125C34.2386 45.3195 39.7149 43.3414 43.8511 39.7854ZM15.1463 37.1083C16.7534 35.2784 18.7928 33.8015 21.1131 32.7873C23.4333 31.7731 25.9748 31.2477 28.5488 31.25C31.1227 31.2477 33.6642 31.7731 35.9844 32.7873C38.3047 33.8015 40.3441 35.2784 41.9512 37.1083C40.1978 38.7202 38.1103 39.9992 35.8096 40.8711C33.5089 41.743 31.0409 42.1904 28.5488 42.1875C26.0566 42.1904 23.5886 41.743 21.2879 40.8711C18.9873 39.9992 16.8997 38.7202 15.1463 37.1083ZM37.1327 18.75C37.1327 20.822 36.2283 22.8091 34.6185 24.2743C33.0087 25.7394 30.8254 26.5625 28.5488 26.5625C26.2722 26.5625 24.0888 25.7394 22.479 24.2743C20.8692 22.8091 19.9648 20.822 19.9648 18.75C19.9648 16.678 20.8692 14.6909 22.479 13.2257C24.0888 11.7606 26.2722 10.9375 28.5488 10.9375C30.8254 10.9375 33.0087 11.7606 34.6185 13.2257C36.2283 14.6909 37.1327 16.678 37.1327 18.75Z" fill="white"/>
          </svg>
          </div>
        </div>
      </li>
    </>
  );
  return (
    <div className="navbar fixed z-10 bg-opacity-50 bg-[#15151580] text-white">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >{nav}
          </ul>
        </div>
        <div className="">
          <a className="btn btn-ghost ff font-black text-3xl">Bistro Boss</a>
          <div className="font-bold tracking-[0.57em] text-2xl ml-4 -mt-3">Restaurant</div>
        </div>
      </div>
      <div className="navbar-end hidden lg:flex inter font-extrabold">
        <ul className="menu menu-horizontal px-1">
          {nav}
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
