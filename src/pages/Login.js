import classes from "./Login.module.css";
import { Link } from "react-router-dom";

function Login() {
  const submitHandler = (e) => {
    e.preventDefault();

    alert("Sorry! This functionality is a work in progress.");
  };

  return (
    <div className={classes.loginContainerContainer}>
      <div className={classes.loginContainer}>
        <h2>Login</h2>

        <form onSubmit={submitHandler}>
          <div className={classes.inputField}>
            <label htmlFor="email">
              <input
                type="email"
                id="email"
                placeholder="E-Mail"
                className={classes.input}
                autoFocus
              />
              <span className={`${classes.span1} ${classes.span2}`}></span>
              <span className={`${classes.span3} ${classes.span4}`}>
                E-Mail
              </span>
            </label>
          </div>

          <div className={classes.inputField}>
            <label htmlFor="password">
              <input
                type="password"
                id="password"
                placeholder="Password"
                className={classes.input}
              />
              <span className={`${classes.span1} ${classes.span2}`}></span>
              <span className={`${classes.span3} ${classes.span4}`}>
                Password
              </span>
            </label>
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
