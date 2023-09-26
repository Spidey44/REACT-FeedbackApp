import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Explore from './pages/Explore'
import Offers from './pages/Offers'
import Profile from './pages/Profile'
import SignIn from './pages/Signin'
import SignUp from './pages/Signup'
import ForgotPassword from './pages/ForgotPassword'



function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Explore />} />
          <Route path='/Offers' element={<Offers />} />
          <Route path='/Profile' element={<Profile />} />
          <Route path='/Sign-in' element={<SignIn />} />
          <Route path='/Sign-up' element={<SignUp />} />
          <Route path='/Forgot-Password' element={<ForgotPassword />} />
        </Routes>
        <Navbar />
      </Router>
    </>
  );
}

export default App;
