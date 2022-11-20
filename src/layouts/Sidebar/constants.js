import { ROUTES } from "../../constants/routes";
import { MdSpaceDashboard, MdManageAccounts } from "react-icons/md";
import { FaHome } from "react-icons/fa";
import { GiShop, GiScrollQuill } from "react-icons/gi";
import { MdOutlineCategory } from "react-icons/md";

export const SIDEBAR_ITEMS = [
  {
    title: "User Homepage",
    path: ROUTES.USER.HOME,
    icon: <FaHome style={{ fontSize: 30, marginRight: 10 }} />,
  },
  {
    title: "Dashboard",
    path: ROUTES.ADMIN.DASHBOARD,
    icon: <MdSpaceDashboard style={{ fontSize: 30, marginRight: 10 }} />,
  },
  {
    title: "User Manage",
    path: ROUTES.ADMIN.USER_MANAGE,
    icon: <MdManageAccounts style={{ fontSize: 26, marginRight: 10 }} />,
  },
  {
    title: "Category Manage",
    path: ROUTES.ADMIN.CATEGORY_LIST,
    icon: <MdOutlineCategory style={{ fontSize: 26, marginRight: 10 }} />,
  },
  {
    title: "Product Manage",
    path: ROUTES.ADMIN.PRODUCT_LIST,
    icon: <GiShop style={{ fontSize: 26, marginRight: 10 }} />,
  },
  {
    title: "Blog Manage",
    path: ROUTES.ADMIN.BLOG_LIST,
    icon: <GiScrollQuill style={{ fontSize: 26, marginRight: 10 }} />,
  },
];
