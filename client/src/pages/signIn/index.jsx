import { useState ,useContext} from 'react';
import { Link, useNavigate } from "react-router-dom";
//import TransitionsModal from '../popap1/modal';
import { AuthContext } from "../../context/authContext";
import axios from 'axios';
import './signIn.css';
import '../register';

const SignIn = () => {
 
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [err, setErr] = useState(null);
const {login} = useContext(AuthContext); 
  const handleLogin = async (e) => {
    try { 
      await login({ email, password}) 
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
      {/* {<TransitionsModal></TransitionsModal>} */}
      {/* <Link to="/signUp">
        <button>Register</button>
      </Link> */}
    </div>
  )
}
export default SignIn;
