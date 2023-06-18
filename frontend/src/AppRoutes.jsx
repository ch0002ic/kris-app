import React from "react";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import TermsAndConditions from "./components/TermsAndConditions";


const AppRoutes = () => {
    return <Router>
        <Routes>
            <Route path="/" element={<App />}>
                <Route path="login" element={<Login />} />
                <Route path="register" element={<Register />} />
                <Route path="termsAndConditions" element={<TermsAndConditions />} />
                <Route path="" element={<Home />} />
            </Route>
        </Routes>
    </Router>
}

export default AppRoutes;