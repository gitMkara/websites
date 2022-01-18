import "./register.scss";
import { Link } from "react-router-dom";
import { useRef, useState } from "react";
import axios from "axios";

export default function Register() {
  const refUsername = useRef(null);
  const refEmail = useRef(null);
  const refPassword = useRef(null);
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const postRegister = async () => {
      await axios
        .post("/auth/register", {
          username: refUsername.current.value,
          email: refEmail.current.value,
          password: refPassword.current.value,
        })
        .then(function (response) {
          console.log(response.data);
          window.location.replace("/login");
        })
        .catch(function (error) {
          
          error.response.status === 409
            ? console.log("Invalid Registration")
            : console.log("non");
            setError(true);
            setInterval(() => {
              setError(false);
            }, 5000);
        });
    };
    postRegister();
  };

  return (
    <div className="register">
      <form className="registerForm" onSubmit={handleSubmit}>
        <h1>Register</h1>
        <label>User Name</label>
        <input
          type="text"
          ref={refUsername}
          placeholder="Enter username"
          required="required"
        />
        <label>E-mail</label>
        <input
          type="email"
          ref={refEmail}
          placeholder="Enter e-mail"
          required="required"
        />
        <label>Password</label>
        <input
          type="password"
          ref={refPassword}
          placeholder="Enter password"
          required="required"
        />
        <button className="registerBtn">Register</button>

        <Link className="routerLink" to="/login">
          <button className="loginBtn">LOGIN</button>
        </Link>
        {error && (
          <span style={{ color: "red", fontSize: "30px" }}>
            Invalid Registration
          </span>
        )}
      </form>
    </div>
  );
}
