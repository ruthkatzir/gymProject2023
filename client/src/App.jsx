//import './App.css';
import Signup from '../src/pages/register';
//import AppBar from '@mui/material';
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import SignIn from './pages/signIn'
import Schedule from './pages/schedule';
import Prices from './pages/prices';
import Profile from './pages/profile';
import ResponsiveAppBar from './pages/navBar';
import Home from './pages/homePage';
import Secretary from '../src/pages/Admin/index';
import Regulations from '../src/pages/bottomBar/regrulations';
import GymBranchList from '../src/pages/bottomBar/branches';
import AccessibilityStatement from '../src/pages/bottomBar/accessibility';
import Footer from '../src/pages/footer';
import Main from '../src/pages/AI';
import { AuthContext, AuthContextProvider } from './context/authContext';



function App() {
  return (
    <div className="App">
      <AuthContextProvider>
        <ResponsiveAppBar/>
        <Router>
          <Routes>

            <Route path='accessibilityStatement' element={<AccessibilityStatement></AccessibilityStatement>} />
            <Route path='gymBranchList' element={<GymBranchList></GymBranchList>} />
            <Route path='regulations' element={<Regulations></Regulations>} />
            <Route path='enter-ai' element={<Main/>} />
            <Route path='secretary' element={<Secretary></Secretary>} />
            <Route path='profile' element={<Profile></Profile>} />
            <Route path='Prices' element={<Prices></Prices>} />
            <Route path='/signUp' element={<Signup></Signup>} />
            <Route path='/signIn' element={<SignIn></SignIn>} />
            <Route path='Schedule' element={<Schedule></Schedule>} />
            <Route path='/' element={<Home></Home>} />
            <Route path='/homePage' element={<Home/>} />
            <Route path='*' element={<h1> 404 Page not found</h1>} />
          </Routes>
        </Router>
        <Footer></Footer>
      </AuthContextProvider>
    </div>
  );
}

export default App;
