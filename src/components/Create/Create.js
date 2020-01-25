import React from "react";
import { Form, Icon, Input, Button } from "antd";
import useCreate from "./useCreate";

const Create = React.memo(props => {
  const { handleChange, handleSubmit } = useCreate();
  return (
    <div style={{ padding: "25px" }}>
      <Form onSubmit={handleSubmit}>
        <Form.Item>
          <Input
            onChange={handleChange}
            prefix={<Icon type="edit" />}
            placeholder="Name"
          />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
});

export default Create;
