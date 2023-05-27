import { useState } from "react";

import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  NotificationOutlined,
  DashboardOutlined,
  UserOutlined,
  StockOutlined,
} from "@ant-design/icons";
import { Avatar, Button, Divider, Layout, Menu, Typography, theme } from "antd";

import logo from "../../assets/images/da-logo.png";
import { Link, Outlet, useLocation } from "react-router-dom";

const { Header, Sider, Content } = Layout;

const Main = () => {
  const [collapsed, setCollapsed] = useState(false);
  const location = useLocation();

  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout style={{ height: "100vh" }}>
      <Sider
        trigger={null}
        collapsible
        collapsed={collapsed}
        collapsedWidth={50}
      >
        <Link to="/">
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
              textAlign: "center",
              padding: collapsed ? "1em 0.5em 3px" : "1em 0.5em",
            }}
          >
            <img src={logo} alt="logo" style={{ width: collapsed ? 40 : 50 }} />
            {!collapsed && (
              <div>
                <Typography style={{ color: "#fff", fontWeight: 700 }}>
                  Department of Agriculture
                </Typography>
                <Typography style={{ color: "#fff", fontSize: "10px" }}>
                  Municipality of Puerto Galera
                </Typography>
              </div>
            )}
          </div>
        </Link>
        <Divider style={{ borderColor: "#303030", margin: "6px 0px 16px" }} />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={[`${location.pathname.split("/")[1]}`]}
          items={[
            {
              key: "",
              icon: <DashboardOutlined />,
              label: <Link to="/">Dashboard</Link>,
            },
            {
              key: "stocks",
              icon: <StockOutlined />,
              label: <Link to="/stocks">Stocks</Link>,
            },
            {
              key: "notify",
              icon: <NotificationOutlined />,
              label: <Link to="/notify">Notify</Link>,
            },
            {
              key: "/manage-users",
              icon: <UserOutlined />,
              label: <Link to="/manage-users">Manage Users</Link>,
            },
          ]}
        />
      </Sider>
      <Layout>
        <Header
          style={{
            padding: "0 2em 0 0.5em",
            background: colorBgContainer,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: "16px",
              width: 50,
              height: 50,
            }}
          />
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "6px 12px 6px 6px",
              border: "1px solid #ececec",
              borderRadius: "7px",
            }}
          >
            <Avatar
              shape="square"
              size="large"
              style={{ backgroundColor: "#fde3cf", color: "#f56a00" }}
            >
              JDC
            </Avatar>
            <div style={{ marginLeft: "0.5em" }}>
              <Typography style={{ margin: 0, fontWeight: 700 }}>
                Juan Dela Cruz
              </Typography>
              <Typography style={{ margin: 0, fontSize: "10px" }}>
                Member
              </Typography>
            </div>
          </div>
        </Header>
        <Content style={{ padding: "1em 2em" }}>
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};
export default Main;
