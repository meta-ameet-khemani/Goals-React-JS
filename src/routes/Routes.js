import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import About from "../components/About/About";
import Error from "../components/Error/Error";
import Homepage from "../components/Homepage/Homepage";
import NewLogin from "../components/Login/Login";
import NewExpenses from "../components/Expenses/NewExpenses";
import SignUp from "../components/SignUp/SignUp";

const MyRoutes = props => {
  return <BrowserRouter>
    {props.children}
    <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/allExpenses' element={<NewExpenses />} />
        <Route path='/logIn' element={<NewLogin />} />
        <Route path='/signUp' element={<SignUp />} />
        <Route path='/aboutUs' element={<About />} />
        <Route path='*' element={<Error />} />
    </Routes>
  </BrowserRouter>;
};

export default MyRoutes;
