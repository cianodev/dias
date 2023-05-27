import { Card, Col, Row } from "antd";
const Home = () => (
  <Row gutter={[16, 16]}>
    <Col span={10}>
      <Row gutter={[16, 16]}>
        <Col span={12}>
          <Card bordered={false}>a</Card>
        </Col>
        <Col span={12}>
          <Card bordered={false}>4</Card>
        </Col>
        <Col span={12}>
          <Card bordered={false}>4</Card>
        </Col>
        <Col span={12}>
          <Card bordered={false}>4</Card>
        </Col>
      </Row>
    </Col>
    <Col span={14}>
      <Card bordered={false} style={{ height: "100%" }}>
        2
      </Card>
    </Col>

    <Col span={14}>
      <Card bordered={false}>1</Card>
    </Col>
    <Col span={10}>
      <Card bordered={false}>2</Card>
    </Col>
  </Row>
);
export default Home;
