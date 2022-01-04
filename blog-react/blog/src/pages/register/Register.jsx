import "./register.scss";
import { Link } from "react-router-dom";
export default function Register() {
  return (
    <div className="register">
      <form className="registerForm">
        <h1>Register</h1>
        <label>User Name</label>
        <input type="text" placeholder="Enter user  name" />
        <label>E-mail</label>
        <input type="email" placeholder="Enter e-mail" />
        <label>Password</label>
        <input type="password" placeholder="Enter password" />
        <button className="registerBtn">Register</button>
        <button className="loginBtn">
        <Link className="routerLink" to="/login">
              LOGIN
            </Link>
        </button>
      </form>
    </div>
  );
}
