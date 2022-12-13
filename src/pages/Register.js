import { Link } from "react-router-dom";
import classes from "./Register.module.css";

function Register() {
  const submitHandler = (e) => {
    e.preventDefault();
    alert("Submitted!");
  };
  return (
    <div className={classes.registerContainerContainer}>
      <div className={classes.registerContainer}>
        <h2>Register</h2>

        <form onSubmit={submitHandler}>
          <div className={classes.inputField}>
            <label htmlFor="first-name">First Name</label>
            <input type="text" id="first-name" placeholder="First Name" />
          </div>

          <div className={classes.inputField}>
            <label htmlFor="first-last">Last Name</label>
            <input type="text" id="first-last" placeholder="Last Name" />
          </div>

          <div className={classes.inputField}>
            <label htmlFor="email">E-Mail</label>
            <input type="email" id="email" placeholder="E-Mail" />
          </div>

          <div className={classes.inputField}>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" placeholder="Password" />
          </div>

          <div className={classes.inputField}>
            <label htmlFor="re-password">Re-enter password</label>
            <input
              type="password"
              id="re-password"
              placeholder="Re-enter password"
            />
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
