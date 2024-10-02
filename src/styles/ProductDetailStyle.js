import styled from "styled-components";

export const Wrapper = styled.div`
    width: calc(100% - 120px);
    background-color: ;
    margin: 60px auto;
`;
export const Name = styled.p`
    marin: 56px;
    text-color: gray;
    text-align: right;
    padding: 20px;
`;
export const Section = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    @media (min-width: 768px){flex-direction: row;}
    margin: 0 auto;
`;
export const ImageContainer = styled.div`
    
`;
export const InfoContainer = styled.div`
    width: full;
    flex-basis: 45%
    display: flex;
    flex-direction: column;
    margin: 30px;
`;

export const Image = styled.div`
    width: full;
    height: 300px;
    border: 1px solid #ccc;
`;
export const Text = styled.p`
    color: rgb(55 65 81);
    text-align: right;
`;
export const Button = styled.div`
`;