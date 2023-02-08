import React from "react";
import { Button, Result } from "antd";
import { useNavigate } from "react-router-dom";
import * as routerLink from "../../config/routersConfig";

function Error500() {
  let navigate = useNavigate();
  return (
    <Result
      status="500"
      title="500"
      subTitle="Xin lỗi, đã xảy ra lỗi."
      //   "Sorry, something went wrong."
      extra={
        <Button
          type="primary"
          onClick={() => {
            navigate(routerLink.index.path);
          }}
        >
          Quay lại Trang chủ
        </Button>
      }
    />
  );
}

export default Error500;
