import React, { useEffect, useState } from "react";
import { searchItems } from "../../api/api";
import { useNavigate } from "react-router-dom";
import { Card, Col, Row } from "antd";

const { Meta } = Card;

const ReactTable = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true); // 로딩 상태 추가
  const [error, setError] = useState(null); // 에러 상태 추가
  const navigate = useNavigate();

  useEffect(() => {
    const fetchItems = async () => {
      try {
        setLoading(true); // API 호출 전에 로딩 상태 활성화
        const data = await searchItems(); // 카테고리, 검색어 없이 전체 아이템을 조회
        console.log(data.content);
        setProducts(data.content); // 가져온 데이터를 상태에 저장
      } catch (error) {
        console.error("Error fetching items:", error);
        setError("아이템을 가져오는 중 문제가 발생했습니다.");
      } finally {
        setLoading(false); // API 호출 완료 후 로딩 상태 해제
      }
    };
    fetchItems();
  }, []);

  if (loading) {
    return <div>로딩 중...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  const handleCardClick = (item_id) => {
    console.log("Navigating to product with item_id:", item_id);
    navigate(`/product/${item_id}`);
  };
  return (
    <Row gutter={[16, 16]}>
      {products.length > 0 ? (
        products.map((product) => (
          <Col key={product.id} xs={24} sm={12} md={8} lg={6}>
            <Card
              hoverable
              onClick={() => handleCardClick(product.item_id)}
              cover={
                <img
                  alt={product.item_name}
                  src={product.thumbnail_url || "https://via.placeholder.com/150"} // 기본 이미지 처리
                />
              }
            >
              <Meta title={product.item_name} description={`₩${product.price}`} />
            </Card>
          </Col>
        ))
      ) : (
        <div>아이템이 없습니다.</div>
      )}
    </Row>
  );
};

export default ReactTable;
