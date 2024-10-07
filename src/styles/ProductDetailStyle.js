import styled from "styled-components";




export const Wrapper = styled.div`
    display: flex;
    justify-content: space-evenly;
    width: 1136px;
    margin: 0 auto;
    margin-top: 50px;
    flex-direction: row;
    @media (max-width: 768px){flex-direction: column;}
`;
export const ImageContainer = styled.div`
    margin-right: 30px;
    @media (max-width: 800px){margin-left: 80px;}
`;

export const Image = styled.div`
    width: 500px;
    height: 700px;
`;
export const InfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    @media (max-width: 800px){margin-left: 80px;}
`;
export const Product = styled.div`
    margin-top: 80px;
    margin-bottom: 100px;
`;

export const Icon = styled.div`
    display: flex;
    justify-content: flex-end;
    @media (max-width: 768px)
`;
export const IconImage = styled.img`
    width: 20px;
    height: 20px;
    margin-left: 20px;
`;
export const ProductName = styled.div`
    margin-bottom: 30px;
    font-size: 20px;
`;
export const ProductPrice = styled.div`
    margin-bottom: 30px;
`;
export const ProductInfo = styled.div`
    margin-bottom: 130px;
`;
export const ProductSize = styled.div`
    display: flex;
    margin-bottom: 10px;
`;
export const QuantityButton = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 20px;
`;

export const ProductCheck = styled.div`
    font-size: 10px;
    padding-top: 10px;
    
`;
export const ProductCheckButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: white;
    cursor: pointer;
    width: 10px;
    height: 15px;
    margin-left: 35px;
    color: black;
    font-size: 15px;
`;
export const Option = styled.div`
    font-size: 15px;
`

export const Count = styled.div`
    width: 10px;
    height: 15px;
    text-align: center;
    margin-left: 30px;
    margin-bottom: 15px;
    font-size: 20px;
`;

export const DeleteButton = styled.button`
    margin-top: 10px;
    background-color: white;
    color: black;
    &:hover {
    background: cornflowerblue;
    color: white;
    transition: 0.5s;
    } 
`


export const OptionBox = styled.div`
    @media (max-width: 800px){margin-left: 100px;}
    margin-top: 90px;
`;
export const DeliveryText = styled.div`
    font-size: 12px;

`;

export const Date = styled.div`
    color: rgb(55 65 81);
    text-align: center;
    margin-top: 90px;
    @media (max-width: 800px){text-align: left;}
    @media (max-width: 800px){margin-top: 90px;}
    @media (max-width: 800px){margin-left: 220px;}
`;
export const Text = styled.div`
    padding-bottom: 90px;
    text-align: left;
    width: 100%;
`;
export const Button = styled.button`
    width: 250px;
    height: 40px;
    display: flex;
    margin: 20px;
    font-size: 15px;
    text-align: center;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    background-color: lightgray;
    &:hover {
    background: cornflowerblue;
    color: white;
    transition: 0.5s;
    } 
    border-radius: 20px/ 20px;
    padding: 10px;
    border: 1px solid #ccc;
`;

export const ModalOverlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 9999;
`;

export const ModalContent = styled.div`
    background-color: gray;
    padding: 20px;
    border-radius: 10px;
    text-align: center;
    width: 300px;
    background-color: white;
`;

export const ButtonContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
`;

export const ModalButton = styled.button`
    padding: 10px 20px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;

    &:hover {
        background-color: #0056b3;
    }
`;
