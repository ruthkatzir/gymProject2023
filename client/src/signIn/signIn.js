import { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
import './signIn.css';
import '../register/signUp';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [err, setErr] = useState(null);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    try {
      const res = await axios.post("http://localhost:3600/api/auth/login", { gmail: email, password });
      if (res.status === 200) {
        setErr("token accept");
        localStorage.setItem("token", res.data.accessToken);
        localStorage.setItem("userId", JSON.stringify(email));
        navigate("/signIn/list")
      }
      //navigate("/login")
    } catch (err) {
      setErr(err.response.data?.message);
    }
  };

  return (
    <div className="logIn">
      <h1>signIn</h1>
      <label>
        Email:
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
      </label>
      <br />
      <label>
        Password:
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
      </label>
      <br />
      <button type="submit" onClick={handleLogin}>signIn</button>
      <br />
      {err && err}
      <Link to="/signUp">
        <button>Register</button>
      </Link>
    </div>
  )
}
export default SignIn;
