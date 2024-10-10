import styled from "styled-components";

export const Stack = styled.div`
  padding: 6px;
  min-width: max-content;
  min-height: 17px;
  width: 42px;
  height: max-content;
  display: flex;
  place-items: center;
  background-color: #eaff60;
  margin: ${(props) => props.margin};
  box-sizing: unset;
`;
