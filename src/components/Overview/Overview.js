import React from "react";
import useOverview from "./useOverview";
import { Row, Col } from "antd";
import { Line } from "react-chartjs-2";

const Overview = React.memo(props => {
  const { revenueData, installData } = useOverview();
  if (!revenueData || !installData) return <div>Loading...</div>;
  return (
    <div style={{margin: '50px 0'}}>
      <Row>
        <Col sm={23} md={10} offset={1}>
          <h3>Installs</h3>
          <Line data={installData} />
        </Col>
          <Col sm={23} md={10} offset={1}>
          <h3>Revenue</h3>
          <Line data={revenueData} />
        </Col>
      </Row>
    </div>
  );
});

export default Overview;
