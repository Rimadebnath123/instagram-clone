import React from "react";
import { Route, Routes } from "react-router-dom";
import Sidebar from "../../Components/Sidebar/Sidebar";
import Homepage from "../Homepage/Homepage";

const Router = () => {
  return (
    <div>
      <div className="flex">
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
