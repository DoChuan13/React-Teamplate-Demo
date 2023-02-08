import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//Store Provider
import { storeValue } from "../services/redux/store/store";

//Router Link Config
import * as routerLink from "../config/routersConfig";

//Style CSS for All Pages
import "../assets/style/main.scss";

//Pages Component and Dashboard Control for Pages with Share Layout
import Dashboard from "../pages/dashboard/Dashboard";
/*Private Router*/
import PrivateRouter from "./privateRouter/PrivateRouter";
/*Protected Router*/
import ProtectedRouter from "./adminRouter/ProtectedRouter";

function Index() {
  return (
    <>
      <Provider store={storeValue}>
        <Router>
          <Routes>
            <Route path={routerLink.index.path} element={<Dashboard />}>
              {/* Public Router In Dashboard*/}
              <Route index element={routerLink.index.page} />
              <Route
                path={routerLink.about.path}
                element={routerLink.about.page}
              />
              <Route
                path={routerLink.login.path}
                element={routerLink.login.page}
              />

              {/* Private Router */}
              <Route path={routerLink.user.path} element={<PrivateRouter />}>
                <Route index element={routerLink.user.page} />
                <Route
                  path={routerLink.detail.path}
                  element={routerLink.detail.page}
                />
              </Route>

              {/* Protected Router */}
              <Route path={routerLink.admin.path} element={<ProtectedRouter />}>
                <Route index element={routerLink.admin.page} />
              </Route>

              {/* Error Pages */}
              <Route
                path={routerLink.error403.path}
                element={routerLink.error403.page}
              />
              <Route
                path={routerLink.error404.path}
                element={routerLink.error404.page}
              />
              <Route
                path={routerLink.error500.path}
                element={routerLink.error500.page}
              />
            </Route>

            {/* <React.Suspense fallback={<>Loading.....</>}>
              <routerLink.lazy.component>
            </React.Suspense> */}
          </Routes>
        </Router>
      </Provider>
    </>
  );
}

export default Index;
