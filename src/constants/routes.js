export const ROUTES = {
  LOGIN: "/login",
  REGISTER: "/register",
  USER: {
    HOME: "/",
    ABOUT: "/about",
    BLOG_LIST: "/blogs",
    BLOG_DETAILS: "/blogs/:id",
    PRODUCT_LIST: "/products",
    PRODUCT_DETAILS: "/products/:id",
    CHECKOUT: "/checkout",
  },
  ADMIN: {
    DASHBOARD: "/admin/dashboard",
    PRODUCT_LIST: "/admin/products/",
    CREATE_PRODUCT: "/admin/products/create",
    UPDATE_PRODUCT: "/admin/products/:id/update",
    BLOG_LIST: "/admin/blogs",
    CREATE_BLOG: "/admin/blogs/create",
    UPDATE_BLOG: "/admin/blogs/:id/update",
    USER_MANAGE: "/admin/users",
    USER_UPDATE: "/admin/users:id/update",
  },
};
