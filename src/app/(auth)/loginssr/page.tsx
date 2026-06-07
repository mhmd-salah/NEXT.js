import { loginAction } from "./_actions/loginAction";

const LoginSsr = () => {
  return (
    <>
      <h1>login on server</h1>
      <form action={loginAction}>
        <input type="text" name="username" placeholder="username" />
        <input type="password" name="password" placeholder="password" />
        <button>login</button>
      </form>
    </>
  );
};

export default LoginSsr;
