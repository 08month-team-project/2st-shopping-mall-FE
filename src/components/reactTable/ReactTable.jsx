import React from "react";
import { Table } from "antd";

import { Card, Col, Row } from "antd";

const { Meta } = Card;

const products = [
  {
    id: 1,
    name: "Product 1",
    price: "₩10,000",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 2,
    name: "Product 2",
    price: "₩20,000",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 3,
    name: "Product 3",
    price: "₩30,000",
    image: "https://via.placeholder.com/150",
  },
];

const ReactTable = () => (
  <Row gutter={[16, 16]}>
    {products.map((product) => (
      <Col key={product.id} xs={24} sm={12} md={8} lg={6}>
        <Card hoverable cover={<img alt={product.name} src={product.image} />}>
          <Meta title={product.name} description={product.price} />
        </Card>
      </Col>
    ))}
  </Row>
);

export default ReactTable;
