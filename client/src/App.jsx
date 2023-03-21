import './App.css';
import Signup from '../src/pages/register';
//import AppBar from '@mui/material';
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom"
import SignIn from './pages/signIn'
import Schedule from './pages/schedule';
import Prices from './pages/prices';
import Profile from './pages/profile';
import ResponsiveAppBar from './pages/navBar';
import Home from './pages/homePage';
import Secretery from '../src/pages/Admin/index';
import { AuthContext, AuthContextProvider } from './context/authContext';

function App() {
  return (
    <div className="App">
      <AuthContextProvider>
        {/* <ThemeProvider theme={theme} > */}
        <ResponsiveAppBar></ResponsiveAppBar>
        {/* <AppBar/> */}
        <Router>
          {/* <nav className='main-nav'>
          <NavLink to="/profile">Profile </NavLink>
          <NavLink to="/Prices">מחירון </NavLink>
          <NavLink to="/Schedule">מערכת </NavLink>
          <NavLink to="/signUp">הרשמה </NavLink>
          <NavLink to="/signIn">כניסה </NavLink>
          <NavLink to="/">דף הבית</NavLink>
        </nav> */}
          <Routes>
            {/* <Route path='/' element={<Home />} /> */}
            <Route path='secretery' element={<Secretery></Secretery>} />
            <Route path='profile' element={<Profile></Profile>} />
            <Route path='Prices' element={<Prices></Prices>} />
            <Route path='/signUp' element={<Signup></Signup>} />
            <Route path='/signIn' element={<SignIn></SignIn>} />
            <Route path='Schedule' element={<Schedule></Schedule>} />
            <Route path='/homePage' element={<Home></Home>} />
            <Route path='*' element={<h1> 404 Page not found</h1>} />
          </Routes>
          {/* <nav className='button-nav'>
            <NavLink to="/">דף הבית</NavLink>
          </nav> */}
        </Router>
        {/* </ThemeProvider> */}
      </AuthContextProvider>
    </div>
  );
}

export default App;
