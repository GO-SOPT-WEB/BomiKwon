import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import WeekDetailCardInfo from "./components/WeekDetailCardInfo";
import DayDetailCardInfo from "./components/DayDetailCardInfo";
import DetailCard from "./pages/DetailCard";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DetailCard />} />
        <Route path="/week" element={<DetailCard />}>
          <Route path=":area" element={<WeekDetailCardInfo />} />
        </Route>
        <Route path="/day" element={<DetailCard />}>
          <Route path=":area" element={<DayDetailCardInfo />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
export default Router;
