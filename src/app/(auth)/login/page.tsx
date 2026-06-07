"use client";
import React, { ChangeEvent, FormEvent, useState } from "react";
import useLogin from "./_hooks/useLogin";

const LoginPage = () => {
  const { isPending, error, login } = useLogin();
  const [loginFields, setLoginFields] = useState({
    username: "mhmdsalah",
    password: "Moh@med123456",
  });
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setLoginFields((prev) => ({ ...prev, [name]: value }));
  };
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    login(loginFields);
  };
  return (
    <>
      <h1>login page</h1>
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          placeholder="username"
          value={loginFields.username}
          onChange={onChange}
        />
        <input
          type="text"
          name="password"
          placeholder="password"
          onChange={onChange}
          value={loginFields.password}
        />
        {error && <div>{error.message}</div>}
        <button type="submit"> {isPending ? "loading" : "submit"}</button>
      </form>
    </>
  );
};

export default LoginPage;
