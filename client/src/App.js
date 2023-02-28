import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Signup from './register/signUp';
import SignIn from './signIn/signIn';
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          {/* <Route path='/' element={<Home />} /> */}
          <Route path='/signUp' element={<Signup></Signup>} />
          <Route path='/signIn' element={<SignIn></SignIn>} />
          <Route path='*' element={<h1> 404 Page not found</h1>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
