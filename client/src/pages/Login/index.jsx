import React from "react";

import { Row, Col, Typography } from "antd";
import LoginForm from "../../components/LoginForm";
import logo from "../../assets/images/da-logo.png";
import background from "../../assets/images/agriculture-bg.jpg";

export default function Login() {
  return (
    <div>
      <Row>
        <Col xs={24} sm={24} md={15} lg={12} xl={12} xxl={9}>
          <div
            style={{
              padding: "0 5em",
              height: "100vh",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: "6em",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                textAlign: "center",
              }}
            >
              <img
                src={logo}
                alt="logo"
                style={{ width: 130, height: "auto" }}
              />
              <Typography.Title style={{ margin: 0 }}>
                Department of Agriculture
              </Typography.Title>
              <Typography.Title level={4} style={{ marginTop: 0 }}>
                Municipality of Puerto Galera
              </Typography.Title>
            </div>
            <LoginForm />
          </div>
        </Col>
        <Col
          span={16}
          xs={0}
          sm={0}
          md={9}
          lg={12}
          xl={12}
          xxl={15}
          style={{
            backgroundColor: "#ececec",
            background: `url(${background})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        />
      </Row>
    </div>
  );
}
