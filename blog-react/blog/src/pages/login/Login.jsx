import "./login.scss";
import { Link } from "react-router-dom";
export default function Login() {
  return (
    <div className="login">
      <form className="loginForm">
        <h1>Login</h1>
        <label>E-mail</label>
        <input type="email" placeholder="Enter e-mail" />
        <label>Password</label>
        <input type="password" placeholder="Enter password" />
        <button className="loginBtn">Login</button>
        <button className="registerBtn">
        <Link className="routerLink" to="/register">
              REGISTER
            </Link>
        </button>
      </form>
    </div>
  );
}
