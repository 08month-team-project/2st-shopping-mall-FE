import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    justify-content: space-evenly;
    width: 1136px;
    margin: 0 auto;
    margin-top: 50px;
`;
export const Name = styled.p`
    text-color: gray;
    text-align: right;
    padding: 30px;
    margin-right: 30px;
`;
export const Section = styled.div`
    width: 575px;
    height: 742px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    @media (min-width: 768px){flex-direction: row;}
    margin: 40px auto;
`;
export const ImageContainer = styled.div`
    margin-right: 30px;
`;
export const InfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    
`;
export const Product = styled.div`
    margin-top: 80px;
    margin-bottom: 100px;
`;
export const Icon = styled.div`
    display: flex;
    justify-content:flex-end;
`;
export const IconImage = styled.img`
    width: 20px;
    height: 20px;
    margin-left: 20px;
`;
export const ProductName = styled.div`
    margin-bottom: 10px;
`;
export const ProductPrice = styled.div`
    margin-bottom: 10px;
`;
export const ProductSize = styled.div`
    margin-bottom: 30px;
`;
export const OptionBox = styled.div`

`;
export const DeliveryText = styled.div`

`;

export const Image = styled.div`
    width: 400px;
    height: 600px;
    border: 1px solid #ccc;
`;
export const Date = styled.div`
    color: rgb(55 65 81);
    text-align: center;
    margin: 20px;
`;
export const Text = styled.div`
    padding-bottom: 90px;
    text-align: left;
    width: 100%;
`;
export const Button = styled.div`
    border: 1px solid #ccc;
    margin: 30px;
    text-align: center;
`;