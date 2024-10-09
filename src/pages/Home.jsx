import React, { useEffect, useState } from "react";
import styled from "styled-components";
import * as S from "../styles/StyleHome";
import Navbar from "../components/navBar/NavBar";
import { searchItems, searchAllItems } from "../api/api";



const Home = () => {
  const [items, SetItems] = useState([]);
  const [itemsAll, SetItemsAll] = useState([]);


  useEffect(() => {
    const fetchItems = async () => {
      try {
        const data2 = await searchAllItems();
        const data = await searchItems();
        console.log(data);
        SetItemsAll(data2);
        SetItems(data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };
    fetchItems();
  }, []);
  return (
    <S.DivContainer>
      <Navbar />
      <div> {items.length > 0 ? items.map((item) => <div key={item.id}>{item}</div>) : <p>No items found</p>}</div>
      <div> {itemsAll.length > 0 ? items.map((item) => <div key={item.id}>{item}</div>) : <p>No items found</p>}</div>
    </S.DivContainer>

    
  );
};

export default Home;
