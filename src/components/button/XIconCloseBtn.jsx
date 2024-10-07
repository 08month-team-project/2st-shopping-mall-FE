import styled from "styled-components";
import XIcon from "../../icons/x-mark.svg";

const DelBtn = styled.button`
  display: block;
  cursor: pointer;
  background-color: transparent;
  border: none;
  position: absolute;
  top: ${(props) => props.top};
  right: ${(props) => props.top};
  opacity: 0.7;
  z-index: 10;
  &:hover {
    opacity: 1;
  }
`;
const Icon = styled.img`
  width: 24px;
  height: 24px;
`;

export const XIconCloseBtn = ({ top, right }) => {
  return (
    <DelBtn top={top} right={right}>
      <Icon src={XIcon} alt="x-icon" />
    </DelBtn>
  );
};
