import Link from "next/link";
import React from "react";
import Layout from "../components/Layout";
import { useForm } from "react-hook-form";

export default function Login() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const submit = ({ email, password }) => {
    console.log(email, password);
  };

  return (
    <Layout title={"Login"}>
      <form
        className="mx-auto max-w-screen-md dark:text-white"
        onSubmit={handleSubmit(submit)}
      >
        <h1 className="mb-4 text-xl">Login</h1>
        <div className="mb-4">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            {...register("email", {
              required: "You must enter an email",
              pattern: {
                value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/i,
                message: 'Please enter a valid email address'
              },
            })}
            className="w-full dark:text-black"
            id="email"
            autoFocus
          ></input>
          {errors.email && (
            <div className="text-red-500">{errors.email.message}</div>
          )}
        </div>
        <div className="mb-4">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            {...register("password", {
              required: "You must enter a password",
              minLength: {
                value: 7,
                message: 'Password must be 7 characters or longer'
              }
            })}
            className="w-full dark:text-black"
            id="password"
            autoFocus
          ></input>
          {errors.password && (
            <div className="text-red-500">{errors.password.message}</div>
          )}
        </div>
        <div className="mb-4">
          <button>Login</button>
        </div>
        <div className="mb-4">
          Don&apos;t have an account? &nbsp;
          <Link href={"/register"}>Register</Link>
        </div>
      </form>
    </Layout>
  );
}
