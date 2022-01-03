import React from "react";
import { useForm } from "react-hook-form";
import { Link, useHistory, useLocation } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const LoginForm = () => {
  const history = useHistory();
  const location = useLocation();

  const { error, logInWithEmailAndPassword } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    logInWithEmailAndPassword(data.email, data.password, history, location);
  };
  return (
    <>
      <form className="md:w-96" onSubmit={handleSubmit(onSubmit)}>
        <div className="my-4">
          <input
            className="w-full block text-black border px-3 py-2 rounded focus:outline-none "
            placeholder="email"
            type="email"
            {...register("email", { required: true })}
          />
          {/* errors will return when field validation fails  */}
          {errors.email && (
            <span className="text-sm text-red-500 block">
              email is required
            </span>
          )}
        </div>
        <div className="my-4">
          <input
            className="w-full block border text-black px-3 py-2 rounded focus:outline-none "
            placeholder="password"
            type="password"
            {...register("password", {
              required: true,
              pattern: /^(?=.{6,})/,
            })}
          />
          <span className="text-sm text-red-500 block">
            {errors.password?.type === "required" && "password  is required"}
          </span>
          <span className="text-sm text-red-500 block">
            {errors.password?.type === "pattern" &&
              "password must be 6 characters"}
          </span>
          <span className="text-sm text-center text-red-500 block">
            {error ? error : ""}
          </span>
        </div>
        <p className="text-center py-3">
          Don't have an account?
          <Link className="text-blue-600 underline" to="/signup">
            Sign up
          </Link>
        </p>
        <div className="text-center">
          <input
            className="border btn-outline-light px-4 py-2 rounded"
            type="submit"
          />
        </div>
      </form>
    </>
  );
};

export default LoginForm;
