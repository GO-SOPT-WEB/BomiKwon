import React from "react";
import PageLayout from "../components/PageLayout";
import { Outlet } from "react-router-dom";

const DetailCard = () => {
  return (
    <PageLayout>
      <Outlet />
    </PageLayout>
  );
};
export default DetailCard;
