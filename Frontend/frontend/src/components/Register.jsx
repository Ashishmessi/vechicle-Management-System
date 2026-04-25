import { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

function Register() {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: ""
  });

  const navigate = useNavigate();

  const register = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/auth/register", data);
      alert("Registration Successful");
      navigate("/");
    } catch {
      alert("Error in registration");
    }
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center vh-100"
      style={{ background: "linear-gradient(to right, #667eea, #764ba2)" }}
    >
      <div className="card p-4 shadow" style={{ width: "380px", borderRadius: "15px" }}>
        
        <h2 className="text-center mb-3">🚗 Register</h2>

        <form onSubmit={register}>

          <div className="mb-3">
            <label>Name</label>
            <input className="form-control"
              onChange={e => setData({...data, name: e.target.value})}
              required
            />
          </div>

          <div className="mb-3">
            <label>Email</label>
            <input type="email" className="form-control"
              onChange={e => setData({...data, email: e.target.value})}
              required
            />
          </div>

          <div className="mb-3">
            <label>Password</label>
            <input type="password" className="form-control"
              onChange={e => setData({...data, password: e.target.value})}
              required
            />
          </div>

          <button className="btn btn-success w-100 mb-2">
            Register
          </button>

          <div className="text-center">
            <small>
              Already have an account? <Link to="/">Login</Link>
            </small>
          </div>

        </form>
      </div>
    </div>
  );
}

export default Register;