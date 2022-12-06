import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import { useAuthContext } from "./hooks/useAuthContext";

// pages & components
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";
import Navbar from "./components/Navbar";

function App() {
  const { authIsReady, user } = useAuthContext();

  return (
    <div className='App'>
      {authIsReady && (
        <BrowserRouter>
          <Navbar />
          <Routes>
            {!user && <Route path='/' element={<Navigate to='/login' />} />}
            {user && <Route exact path='/' element={<Home />} />}

            {user && <Route path='/login' element={<Navigate to='/' />} />}
            {!user && <Route path='/login' element={<Login />} />}

            {user && <Route path='/signup' element={<Navigate to='/' />} />}
            {!user && <Route path='/signup' element={<Signup />} />}
          </Routes>
        </BrowserRouter>
      )}
    </div>
  );
}

export default App;
