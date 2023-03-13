import './App.css';
import Signup from './register/signUp';
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom"
import SignIn from './signIn/signIn';
import Schedule from './schedule/Schedule';
import Prices from './prices/prices';
import GetStripe from './creditCard/credit'
import Profile from './profile'

function App() {
  return (
    <div className="App">
      <Router>
        <nav className='main-nav'>
        <NavLink to="/profile">profile </NavLink>
          <NavLink to="/Prices">מחירון </NavLink>
          <NavLink to="/Schedule">מערכת </NavLink>
          <NavLink to="/signUp">הרשמה </NavLink>
          <NavLink to="/signIn">כניסה </NavLink>
          <NavLink to="/">דף הבית</NavLink>
        </nav>
        <Routes>
          {/* <Route path='/' element={<Home />} /> */}
          <Route path='profile' element={<Profile></Profile>} />
          <Route path='Prices' element={<Prices></Prices>} />
          <Route path='/signUp' element={<Signup></Signup>} />
          <Route path='/signIn' element={<SignIn></SignIn>} />
          <Route path='Schedule' element={<Schedule></Schedule>} />
          <Route path='*' element={<h1> 404 Page not found</h1>} />
        </Routes>
        <nav className='button-nav'>
          <NavLink to="/">דף הבית</NavLink>
        </nav>
      </Router>
    </div>
  );
}

export default App;
