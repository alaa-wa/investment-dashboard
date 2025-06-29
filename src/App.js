import React from "react";
import { Card, Row, Col, Table, Tag, Avatar, List } from "antd";
import { DollarOutlined, LineChartOutlined, RiseOutlined } from "@ant-design/icons";
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";
import "./App.css";

const yearlyData = [
  { year: "2016", value: 5000 },
  { year: "2017", value: 21000 },
  { year: "2018", value: 17000 },
  { year: "2019", value: 35000 },
  { year: "2020", value: 20000 },
  { year: "2021", value: 27000 },
];

const monthlyData = [
  { year: "2016", value: 12000 },
  { year: "2017", value: 18000 },
  { year: "2018", value: 25000 },
  { year: "2019", value: 30000 },
  { year: "2020", value: 22000 },
  { year: "2021", value: 34000 },
];

const investments = [
  {
    title: "Diesel",
    value: "$54,000",
    return: "+16%",
    color: "green",
    img: "https://img.icons8.com/color/48/000000/oil-industry.png",
  },
  {
    title: "Gas",
    value: "$25,300",
    return: "-4%",
    color: "red",
    img: "https://img.icons8.com/color/48/000000/gas.png",
  },
  {
    title: "Electric",
    value: "$8,200",
    return: "+25%",
    color: "green",
    img: "https://img.icons8.com/color/48/000000/electricity.png",
  },
];

const trending = [
  { key: 1, name: "Gas", price: "$520", return: "+5%", color: "green" },
  { key: 2, name: "Biodiesel", price: "$480", return: "+10%", color: "green" },
  { key: 3, name: "Electric", price: "$350", return: "-3%", color: "red" },
  { key: 4, name: "Diesel", price: "$940", return: "+2%", color: "green" },
  { key: 5, name: "Bimao", price: "$670", return: "-12%", color: "red" },
];

const columns = [
  { title: "SL No", dataIndex: "key", key: "key" },
  { title: "Name", dataIndex: "name", key: "name" },
  { title: "Price", dataIndex: "price", key: "price" },
  {
    title: "Return",
    dataIndex: "return",
    key: "return",
    render: (text, record) => (
      <Tag color={record.color === "green" ? "green" : "red"}>{text}</Tag>
    ),
  },
];

function App() {
  return (
    <div className="dashboard-bg">
      <Row gutter={16}>
        <Col xs={24} md={8}>
          <Card className="dashboard-card">
            <DollarOutlined className="dashboard-icon" style={{ color: "#13c2c2" }} />
            <div className="dashboard-label">Total Invested Amount</div>
            <div className="dashboard-value">$150,000</div>
          </Card>
        </Col>
        <Col xs={24} md={8}>
          <Card className="dashboard-card">
            <LineChartOutlined className="dashboard-icon" style={{ color: "#eb2f96" }} />
            <div className="dashboard-label">Number of Investments</div>
            <div className="dashboard-value">1,250</div>
          </Card>
        </Col>
        <Col xs={24} md={8}>
          <Card className="dashboard-card">
            <RiseOutlined className="dashboard-icon" style={{ color: "#52c41a" }} />
            <div className="dashboard-label">Rate of Return</div>
            <div className="dashboard-value">+5.80%</div>
          </Card>
        </Col>
      </Row>

      <Row gutter={16} style={{ marginTop: 32 }}>
        <Col xs={24} md={12}>
          <Card title="Yearly Total Investment" className="dashboard-card">
            <LineChart width={350} height={200} data={yearlyData}>
              <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
              <XAxis dataKey="year" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="value" stroke="#faad14" strokeWidth={3} />
            </LineChart>
          </Card>
        </Col>
        <Col xs={24} md={12}>
          <Card title="Monthly Revenue" className="dashboard-card">
            <LineChart width={350} height={200} data={monthlyData}>
              <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
              <XAxis dataKey="year" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="value" stroke="#13c2c2" strokeWidth={3} />
            </LineChart>
          </Card>
        </Col>
      </Row>

      <Row gutter={16} style={{ marginTop: 32 }}>
        <Col xs={24} md={12}>
          <Card title="Investments" className="dashboard-card">
            <List
              itemLayout="horizontal"
              dataSource={investments}
              renderItem={item => (
                <List.Item>
                  <List.Item.Meta
                    avatar={<Avatar src={item.img} />}
                    title={<span style={{ fontWeight: "bold" }}>{item.title}</span>}
                    description={
                      <span>
                        <span style={{ fontWeight: "bold" }}>{item.value}</span>
                        <span style={{ marginLeft: 16, color: "#888" }}>Investment Value</span>
                      </span>
                    }
                  />
                  <Tag color={item.color}>{item.return} Return Value</Tag>
                </List.Item>
              )}
            />
          </Card>
        </Col>
        <Col xs={24} md={12}>
          <Card title="Trending Stock" className="dashboard-card">
            <Table columns={columns} dataSource={trending} pagination={false} />
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default App;