import { Link } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const Login = () => {
  const { signInUser } = useContext(AuthContext);

  const handleLogin = (e) => {
    e.preventDefault();

    // const email = e.target.email.value;
    // const password = e.target.password.value;
    // console.log(e.currentTarget);
    const form = new FormData(e.currentTarget);
    // console.log(form.get("email"));
    const email = form.get("email");
    const password = form.get("password");

    signInUser(email, password)
      .then((result) => console.log(result?.user))
      .catch((error) => console.error(error));
  };

  return (
    <div>
      <Navbar></Navbar>
      <div>
        <h2 className="text-3xl my-10 text-center">Please Login</h2>
        <form
          onSubmit={handleLogin}
          className="card-body lg:w-1/2 md:w-3/4 mx-auto"
        >
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="Email"
              className="input input-bordered"
              name="email"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="Password"
              className="input input-bordered"
              name="password"
              required
            />
            <label className="label w-full flex justify-center mt-2">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Login</button>
          </div>
        </form>
        <p className="flex justify-center gap-2">
          Do not have an account?
          <Link className="text-blue-600 font-bold" to="/register">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
