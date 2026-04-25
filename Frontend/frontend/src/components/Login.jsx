import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function Login() {
  const [data, setData] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const login = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/auth/login", data);
      localStorage.setItem("token", res.data.token);
      navigate("/dashboard");
    } catch (err) {
      alert("Login failed");
    }
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center vh-100"
      style={{
        background: "linear-gradient(to right, #4facfe, #00f2fe)"
      }}
    >
      <div className="card shadow-lg p-4" style={{ width: "380px", borderRadius: "15px" }}>
        
        <h2 className="text-center mb-4">🚗 Vehicle System</h2>
        <p className="text-center text-muted">Login to your dashboard</p>

        <form onSubmit={login}>

          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter email"
              onChange={(e) => setData({ ...data, email: e.target.value })}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
              onChange={(e) => setData({ ...data, password: e.target.value })}
              required
            />
          </div>

          <button className="btn btn-primary w-100 mb-3">
            Login
          </button>

          <div className="text-center">
            <small className="text-muted">
              Don't have an account? <Link to="/register">Register</Link>
            </small>
          </div>

        </form>
      </div>
    </div>
  );
}

export default Login;