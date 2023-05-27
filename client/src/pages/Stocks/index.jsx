import React from "react";
import { Button, Card, Col, Input, Row, Tag, Typography } from "antd";

import { PlusOutlined, StockOutlined } from "@ant-design/icons";

const { Meta } = Card;

export default function Stocks() {
  return (
    <div>
      {/* Header */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: "1.5em",
        }}
      >
        <Typography.Title level={2} style={{ margin: 0 }}>
          <StockOutlined /> Stocks
        </Typography.Title>
        <div
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <Input style={{ marginRight: "0.5em" }} placeholder="Search" />
          <Button icon={<PlusOutlined />} type="primary">
            Add Stocks
          </Button>
        </div>
      </div>

      <Row gutter={[12, 12]}>
        <Col xxl={4}>
          <Card
            hoverable
            bordered
            cover={
              <img
                alt="Chilli Seeds"
                src="https://www.chilipeppermadness.com/wp-content/uploads/2018/03/Saving-Chili-Pepper-Seeds-Growing1.jpg"
              />
            }
          >
            <Meta
              title="Chili Seeds"
              description={
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <Typography>10 of 100</Typography>
                  <Tag color="magenta">Seedlings</Tag>
                </div>
              }
            />
          </Card>
        </Col>
      </Row>
    </div>
  );
}
