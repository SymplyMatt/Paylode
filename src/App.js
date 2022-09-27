import Home from "./components/home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/login/Login";
import SignUp from "./components/signup/SignUp";
import { useState } from "react";
import AccountSettings from "./components/account-settings/AccountSettings";
import Dashboard from "./components/dashboard/Dashboard";

function App() {
  const [page, setPage] = useState();
  const [showNav, setShowNav] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home page={page} setPage={setPage} />} />
        <Route
          path='/login'
          element={<Login page={page} setPage={setPage} />}
        />
        <Route
          path='/signup'
          element={<SignUp page={page} setPage={setPage} />}
        />
        <Route path='/settings' element={<AccountSettings />} />
        <Route
          path='/dashboard'
          element={
            <Dashboard
              showNav={showNav}
              setShowNav={setShowNav}
              showNotifications={showNotifications}
              setShowNotifications={setShowNotifications}
              page={page}
              setPage={setPage}
            />
          }
        />
        <Route path='*' element={<Home page={page} setPage={setPage} />} />
      </Routes>
    </Router>
  );
}

export default App;
