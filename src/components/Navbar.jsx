import { Link, NavLink } from "react-router";
import logo from "../assets/logo.png";
import MyContainer from "./MyContainer";
import MyLink from "./MyLink";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { toast } from "react-toastify";
import { ClockLoader } from "react-spinners";

const Navbar = () => {
  const { user, signoutUserFunc, setUser, loading } = useContext(AuthContext);

  const handleSignout = () => {
    signoutUserFunc()
      .then(() => {
        toast.success("Signout successful");
        setUser(null);
      })
      .catch((e) => toast.error(e.message));
  };

  return (
    <div className="bg-gradient-to-r from-pink-500 via-orange-400 to-red-400 shadow-lg ">
      <MyContainer className="flex items-center justify-between py-3">
        
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img src={logo} className="w-[45px]" />
          <h1 className="text-white text-2xl font-semibold tracking-wide">
            WarmPaws
          </h1>
        </div>

        {/* Links */}
        <ul className="flex items-center gap-4 text-white font-medium">
          <li><MyLink to="/">Home</MyLink></li>
          <li><MyLink to="/services">Services</MyLink></li>
          {user && <li><MyLink to="/profile">My Profile</MyLink></li>}
        </ul>

        {/* User Section */}
        {loading ? (
          <ClockLoader color="#fff" />
        ) : user ? (
          <div className="dropdown dropdown-end">
            <label tabIndex={0}>
              <img
                src={user?.photoURL || "https://via.placeholder.com/100"}
                className="h-[45px] w-[45px] rounded-full ring-2 ring-white cursor-pointer"
                alt=""
              />
            </label>

            <ul
              tabIndex={0}
              className="dropdown-content menu p-4 space-y-2 shadow bg-base-100 rounded-box w-52"
            >
              <h2 className="text-lg font-semibold">{user?.displayName}</h2>
              <p className="text-slate-600">{user?.email}</p>

              <button
                onClick={handleSignout}
                className="btn btn-error btn-sm mt-2"
              >
                Sign Out
              </button>
            </ul>
          </div>
        ) : (
          <Link
            to="/signin"
            className="px-5 py-2 bg-white text-pink-600 font-semibold rounded-lg hover:bg-slate-100 transition"
          >
            Sign In
          </Link>
        )}
      </MyContainer>
    </div>
  );
};

export default Navbar;
