import styled from "styled-components";

export const Card = styled.div`
  width: 100%;
  height: auto;
  padding: 8px;
  display: flex;
  flex-direction: column;
  border: 2px solid rgba(255, 255, 255, 7%);
  border-radius: 4px;
  margin: ${(props) => props.margin};
  background-color: ${(props) =>
    props.fill == true ? "" : "rgba(255, 255, 255, 4%)"};
`;
