import React from "react";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import Main from "../main/Main";
import LiveModal from "../../components/modal/LiveModal";
import StaticModal from "../../components/modal/StaticModal";
import FocusModal from "../../components/modal/FocusModal";
import Toast from "../../components/toast/Toast";
import ConfirmModal from "../../components/modal/ConfirmModal";
import Loader from "../loader.js/Loader";

function Container() {
  return (
    <>
      {/* <!--Main Page Content--> */}
      <div id="container">
        {/* <Loader /> */}
        <Header />
        <Main />
        <Footer />
      </div>
      {/* <!--Other Group Content (Modal, Alert, Notification,ect...)--> */}
      <div id="alert-group">
        <LiveModal />
        <StaticModal />
        <FocusModal />
        <Toast />
        <ConfirmModal />
      </div>
    </>
  );
}

export default Container;
