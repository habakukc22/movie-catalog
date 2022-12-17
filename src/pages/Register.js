import { Link } from "react-router-dom";
import classes from "./Register.module.css";

function Register() {
  const submitHandler = (e) => {
    e.preventDefault();
    alert("Sorry! This functionality is a work in progress.");
  };
  return (
    <div className={classes.registerContainerContainer}>
      <div className={classes.registerContainer}>
        <h2>Register</h2>

        <form onSubmit={submitHandler}>
          <div className={classes.inputField}>
            <label htmlFor="first-name">
              <input
                type="text"
                id="first-name"
                placeholder="First name"
                className={classes.input}
                autoFocus
              />
              <span className={`${classes.span1} ${classes.span2}`}></span>
              <span className={`${classes.span3} ${classes.span4}`}>
                First name
              </span>
            </label>
          </div>

          <div className={classes.inputField}>
            <label htmlFor="last-name">
              <input
                type="text"
                id="last-name"
                placeholder="Last name"
                className={classes.input}
              />
              <span className={`${classes.span1} ${classes.span2}`}></span>
              <span className={`${classes.span3} ${classes.span4}`}>
                Last name
              </span>
            </label>
          </div>

          <div className={classes.inputField}>
            <label htmlFor="email">
              <input
                type="email"
                id="email"
                placeholder="E-Mail"
                className={classes.input}
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

          <div className={classes.inputField}>
            <label htmlFor="re-password">
              <input
                type="password"
                id="re-password"
                placeholder="Re-enter password"
                className={classes.input}
              />
              <span className={`${classes.span1} ${classes.span2}`}></span>
              <span className={`${classes.span3} ${classes.span4}`}>
                Re-enter password
              </span>
            </label>
          </div>

          <button>Enter</button>
        </form>

        <div className={classes.login}>
          <p>Do you already have an account? </p>
          <Link to="/sign-in">Login!</Link>
        </div>
      </div>
    </div>
  );
}

export default Register;
