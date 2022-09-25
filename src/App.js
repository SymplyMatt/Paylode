import Home from "./components/home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/login/Login";
import SignUp from "./components/signup/SignUp";
import { useState } from "react";

function App() {
  const [page, setPage] = useState();
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
        <Route path='*' element={<Home page={page} setPage={setPage} />} />
      </Routes>
    </Router>
  );
}

export default App;
