import React from "react";
import { Button, Result } from "antd";
import { useNavigate } from "react-router-dom";
import * as routerLink from "../../config/routersConfig";

function Error404() {
  let navigate = useNavigate();
  return (
    <Result
      status="404"
      title="404"
      subTitle="Xin lỗi, trang bạn truy cập hiện không tồn tại"
      // "Sorry, the page you visited does not exist."
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

export default Error404;
