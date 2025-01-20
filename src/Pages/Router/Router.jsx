import React from "react";
import Sidebar from "../../Components/Sidebar/Sidebar";
import { Route, Routes } from "react-router-dom";
import Homepage from "../Homepage/Homepage";

const Router = () => {
  return (
    <div>
      <div>
        <div>
          <Sidebar />
        </div>
        <div>
          <Routes>
            <Route path="/" element={<Homepage />}></Route>
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default Router;
