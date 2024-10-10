import React, { useState, useEffect } from "react";
import axios from "axios";
import { Pagination } from "antd"; // Ant Design의 Pagination 컴포넌트 사용
import ReactTable from "../reactTable/ReactTable"; // 그리드 컴포넌트

const ItemSearchPage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [pageNumber, setPageNumber] = useState(1);
  const [totalItems, setTotalItems] = useState(0); // 전체 아이템 개수
  const [params, setParams] = useState({
    category_id: "",
    item_name: "",
    status_condition: "",
    sort_condition: "",
  });

  // API 호출 함수
  const fetchItems = async () => {
    setLoading(true);

    try {
      const response = await axios.get("/items/search", {
        params: {
          ...params,
          page_number: pageNumber, // 현재 페이지 번호
        },
      });

      setProducts(response.data.items); // 받아온 상품 리스트
      setTotalItems(response.data.total_count); // 전체 아이템 개수 설정 (페이지네이션에 필요)
    } catch (error) {
      console.error("상품을 불러오는 중 오류가 발생했습니다.", error);
    } finally {
      setLoading(false);
    }
  };

  // 페이지 번호 변경 시 API 재호출
  useEffect(() => {
    fetchItems();
  }, [pageNumber, params]);

  // 페이지 번호 변경 핸들러
  const handlePageChange = (page) => {
    setPageNumber(page); // 페이지 번호 업데이트
  };

  return (
    <div>
      {/* 검색/필터 UI - params를 변경하여 API 호출 */}
      <input
        type="text"
        placeholder="상품명 검색"
        onChange={(e) => setParams({ ...params, item_name: e.target.value })}
      />
      {/* Ant Design의 Pagination 컴포넌트를 사용해 페이지네이션 구현 */}
      <ReactTable products={products} loading={loading} />

      <Pagination
        current={pageNumber}
        total={totalItems}
        pageSize={10} // 한 페이지에 보여줄 상품 개수
        onChange={handlePageChange}
      />
    </div>
  );
};

export default ItemSearchPage;
