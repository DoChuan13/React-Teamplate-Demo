import IndexPage from "../pages/index/IndexPage";
import AboutPage from "../pages/about/AboutPage";
import LoginPage from "../pages/login/LoginPage";

/*Private Router*/
import UserPage from "../pages/user/UserPage";
import UserPage1 from "../pages/user/UserPage1";

/*Protected Router*/
import AdminPage from "../pages/admin/AdminPage";

/*Error Page*/
import Error403Page from "../pages/result/Error403Page";
import Error404Page from "../pages/result/Error404Page";
import Error500Page from "../pages/result/Error500Page";

/*Lazy Router*/
// import Lazy = React.lazy(()=>import('../../LazyComponent'))

export const index = {
  path: "/",
  page: <IndexPage />,
};

export const about = {
  path: "/about",
  page: <AboutPage />,
};

export const login = {
  path: "/login",
  page: <LoginPage />,
};

//Private Router
export const user = {
  path: "/user",
  page: <UserPage />,
};

export const detail = {
  path: "/user/:detail",
  page: <UserPage1 />,
};

//Protected Router
export const admin = {
  path: "/admin",
  page: <AdminPage />,
};

//Error Forbidden 403
export const error403 = {
  path: "/forbidden",
  page: <Error403Page />,
};

//Error No Page 404
export const error404 = {
  path: "*",
  page: <Error404Page />,
};

//Error No Page 500
export const error500 = {
  path: "/error",
  page: <Error500Page />,
};

// export const lazy = {
//   path: "/lazy",
//   page: <LazyComponent />,
// };
