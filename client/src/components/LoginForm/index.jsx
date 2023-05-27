import { Button, Form, Input } from "antd";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const navigate = useNavigate();
  const [form] = Form.useForm();

  const handleSubmit = () => {
    navigate("/");
  };

  return (
    <Form
      form={form}
      layout="vertical"
      initialValues={{
        requiredMarkValue: true,
      }}
      requiredMark={true}
      style={{ width: "-webkit-fill-available" }}
      onFinish={handleSubmit}
    >
      <Form.Item label="User ID" required tooltip="This is a required field">
        <Input placeholder="##-##-####" size="large" />
      </Form.Item>
      <Form.Item label="Password" required tooltip="Password">
        <Input size="large" />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit" size="large">I-Sumite</Button>
      </Form.Item>
    </Form>
  );
};

export default LoginForm;
