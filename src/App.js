import Home from "./components/home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/login/Login";
import SignUp from "./components/signup/SignUp";
import { useState } from "react";
import AccountSettings from "./components/account-settings/AccountSettings";
import Dashboard from "./components/dashboard/Dashboard";
import Transfer from "./components/transfer/Transfer";
import Wallet from "./components/wallet/Wallet";
import Payments from "./components/payments/Payments";
import Transactions from "./components/transactions/Transactions";
import Invoicing from "./components/invoicing/Invoicing";
import Customers from "./components/customers/Customers";

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
        <Route path='/accountsettings' element={<AccountSettings />} />
        <Route path='/account-settings' element={<AccountSettings />} />
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
        <Route
          path='/transfer'
          element={
            <Transfer
              showNav={showNav}
              setShowNav={setShowNav}
              showNotifications={showNotifications}
              setShowNotifications={setShowNotifications}
              page={page}
              setPage={setPage}
            />
          }
        />
        <Route
          path='/wallet'
          element={
            <Wallet
              showNav={showNav}
              setShowNav={setShowNav}
              showNotifications={showNotifications}
              setShowNotifications={setShowNotifications}
              page={page}
              setPage={setPage}
            />
          }
        />
        <Route
          path='/payments'
          element={
            <Payments
              showNav={showNav}
              setShowNav={setShowNav}
              showNotifications={showNotifications}
              setShowNotifications={setShowNotifications}
              page={page}
              setPage={setPage}
            />
          }
        />
        <Route
          path='/transactions'
          element={
            <Transactions
              showNav={showNav}
              setShowNav={setShowNav}
              showNotifications={showNotifications}
              setShowNotifications={setShowNotifications}
              page={page}
              setPage={setPage}
            />
          }
        />
        <Route
          path='/customers'
          element={
            <Customers
              showNav={showNav}
              setShowNav={setShowNav}
              showNotifications={showNotifications}
              setShowNotifications={setShowNotifications}
              page={page}
              setPage={setPage}
            />
          }
        />
        <Route
          path='/invoicing'
          element={
            <Invoicing
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
