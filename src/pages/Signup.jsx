import { Link, useNavigate } from "react-router";
import { FaEye } from "react-icons/fa";
import { IoEyeOff } from "react-icons/io5";
import MyContainer from "../components/MyContainer";
import { toast } from "react-toastify";
import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";

const Signup = () => {
  const [show, setShow] = useState(false);

  const {
    createUserWithEmailAndPasswordFunc,
    updateProfileFunc,
    sendEmailVerificationFunc,
    setLoading,
    signoutUserFunc,
    setUser,
  } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();

    const displayName = e.target.name?.value;
    const photoURL = e.target.photo?.value;
    const email = e.target.email?.value;
    const password = e.target.password?.value;

    const regExp =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#^()\-_=+])[A-Za-z\d@$!%*?&#^()\-_=+]{8,}$/;

    if (!regExp.test(password)) {
      toast.error(
        "Password must include uppercase, lowercase, number & special character"
      );
      return;
    }

    createUserWithEmailAndPasswordFunc(email, password)
      .then((res) => {
        updateProfileFunc(displayName, photoURL)
          .then(() => {
            sendEmailVerificationFunc()
              .then(() => {
                setLoading(false);

                signoutUserFunc().then(() => {
                  setUser(null);
                  toast.success(
                    "Signup successful! Check your email to verify ❄️"
                  );
                  navigate("/signin");
                });
              })
              .catch((e) => toast.error(e.message));
          })
          .catch((e) => toast.error(e.message));
      })
      .catch((e) => {
        if (e.code === "auth/email-already-in-use") {
          toast.error("User already exists!");
        } else {
          toast.error(e.message);
        }
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#FCE7F3] via-[#FFF5EB] to-[#F3F4F6] relative overflow-hidden">

      {/* Floating soft color blobs */}
      <div className="absolute inset-0">
        <div className="absolute w-72 h-72 bg-pink-200/40 rounded-full blur-3xl top-10 left-10"></div>
        <div className="absolute w-72 h-72 bg-orange-200/40 rounded-full blur-3xl bottom-10 right-10"></div>
      </div>

      <MyContainer>
        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10 p-6 lg:p-10 text-gray-800">

          {/* Left text */}
          <div className="max-w-lg text-center lg:text-left">
            <h1 className="text-5xl font-extrabold text-[#E0557E] drop-shadow">
              Create Your Account 🐾
            </h1>
            <p className="mt-4 text-lg text-gray-700 leading-relaxed">
              Join the winter pet care community and keep your furry friends warm
              and happy ❄️🐶
            </p>
          </div>

          {/* Signup card */}
          <div className="w-full max-w-md backdrop-blur-xl bg-white/60 border border-pink-200 shadow-xl rounded-2xl p-8">
            <h2 className="text-2xl font-semibold mb-4 text-center text-[#D9466E]">
              Sign Up
            </h2>

            <form onSubmit={handleSignup} className="space-y-4">
              {/* Name */}
              <div>
                <label className="block text-sm font-medium mb-1 text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Pet Lover"
                  className="input input-bordered w-full bg-white/80 text-gray-700 focus:outline-none focus:ring-2 focus:ring-pink-300"
                />
              </div>

              {/* Photo */}
              <div>
                <label className="block text-sm font-medium mb-1 text-gray-700">
                  Photo URL
                </label>
                <input
                  type="text"
                  name="photo"
                  placeholder="https://example.com/photo.jpg"
                  className="input input-bordered w-full bg-white/80 text-gray-700 focus:outline-none focus:ring-2 focus:ring-pink-300"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium mb-1 text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="your@email.com"
                  className="input input-bordered w-full bg-white/80 text-gray-700 focus:outline-none focus:ring-2 focus:ring-pink-300"
                />
              </div>

              {/* Password */}
              <div className="relative">
                <label className="block text-sm font-medium mb-1 text-gray-700">
                  Password
                </label>
                <input
                  type={show ? "text" : "password"}
                  name="password"
                  placeholder="••••••••"
                  className="input input-bordered w-full bg-white/80 text-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-300"
                />
                <span
                  onClick={() => setShow(!show)}
                  className="absolute right-3 top-[38px] cursor-pointer text-gray-600"
                >
                  {show ? <FaEye /> : <IoEyeOff />}
                </span>
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-pink-400 to-orange-300 text-white py-2 rounded-lg font-semibold hover:opacity-90"
              >
                Sign Up
              </button>

              {/* Have account */}
              <p className="text-center text-sm text-gray-700 mt-3">
                Already have an account?{" "}
                <Link
                  to="/signin"
                  className="text-pink-500 hover:text-pink-700 underline"
                >
                  Sign in
                </Link>
              </p>
            </form>
          </div>
        </div>
      </MyContainer>
    </div>
  );
};

export default Signup;
