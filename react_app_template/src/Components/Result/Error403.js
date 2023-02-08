import React from "react";
import { Button, Result } from "antd";
import { useNavigate } from "react-router-dom";
import * as routerLink from "../../config/routersConfig";

function Error403() {
  let navigate = useNavigate();
  return (
    <Result
      status="403"
      title="403"
      subTitle="Xin lỗi, bạn không được phép truy cập trang này."
      //   "Sorry, you are not authorized to access this page."
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

export default Error403;
