import styled from "styled-components";
import { colors as c } from "../../../constants";

export const Card = styled.div`
  width: 100%;
  height: 91px;
  background: ${c.white};
  border-radius: 5px;
  padding: 13px;
`;

export const Content = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
`;

export const ContainerName = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 40px;
  p {
    font-size: 20px;
    line-height: 25px;
  }
  > div {
    cursor: pointer;
  }
`;

export const ContainerBtn = styled.div`
  display: flex;
  gap: 4px;
  margin-top: 8px;
`;

export const DayBtn = styled.button`
  width: 30px;
  height: 30px;
  background: ${(props) => (props.switch ? "#CFCFCF" : "#FFFFFF")};
  border: 1px solid ${c.border};
  border-radius: 5px;
  cursor: auto;

  font-size: 19.976px;
  line-height: 25px;
  color: ${(props) => (props.switch ? "#FFFFFF" : "#DBDBDB")};
  :hover {
    opacity: 1;
  }
  :active {
    scale: 1;
  }
`;
