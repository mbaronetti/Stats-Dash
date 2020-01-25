import React from "react";
import useCampaigns from "./useCampaigns";
import { Row, Col, Select } from "antd";
import { Line } from "react-chartjs-2";

const { Option } = Select;

const Campaigns = React.memo(props => {
  const { campaignsData, campaigns, handleChange, index } = useCampaigns();
  if (!campaignsData) return <div>Loading...</div>;
  return (
    <div style={{ margin: "50px 0" }}>
      <Row>
        <Col sm={23} md={10} offset={1}>
          <h3>Installs</h3>
          <Select
            defaultValue={campaigns[index].name}
            style={{ width: 150 }}
            onChange={handleChange}
          >
            {campaigns.map((item, index) => (
              <Option key={item.id} value={index}>
                {item.name}
              </Option>
            ))}
          </Select>
          <Line data={campaignsData} />
        </Col>
      </Row>
    </div>
  );
});

export default Campaigns;
