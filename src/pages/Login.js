import classes from "./Login.module.css";
import { Link } from "react-router-dom";

function Login() {
  const submitHandler = (e) => {
    e.preventDefault();

    alert("Submitted!");
  };

  return (
    <div className={classes.loginContainerContainer}>
      <div className={classes.loginContainer}>
        <h2>Login</h2>

        <form onSubmit={submitHandler}>
          <div className={classes.inputField}>
            <label htmlFor="email">E-Mail</label>
            <input type="email" id="email" placeholder="E-Mail" />
          </div>

          <div className={classes.inputField}>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" placeholder="Password" />
          </div>

          <button>Enter</button>
        </form>

        <div className={classes.register}>
          <p>Do you not have an account? </p>
          <Link to="/sign-up">Register now!</Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
