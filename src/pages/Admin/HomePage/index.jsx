import React, { useEffect } from "react";
import { ROUTES, TITLES } from "../../../constants/";

const AdminHomePage = () => {
  useEffect(() => {
    document.title = TITLES.ADMIN.DASHBOARD;
  }, []);
  return <div>AdminHomePage</div>;
};

export default AdminHomePage;
