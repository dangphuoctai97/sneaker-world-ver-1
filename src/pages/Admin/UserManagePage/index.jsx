import { useEffect } from "react";

import { ROUTES, TITLES } from "../../../constants";

export default function AdminUserManagePage() {
  useEffect(() => {
    document.title = TITLES.ADMIN.USER_MANAGE;
  }, []);
  return <>USER MANAGE PAGE</>;
}
