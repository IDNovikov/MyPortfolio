import styled from "styled-components";

export const Stack = styled.div`
  padding: 6px;
  min-width: 42px;
  min-height: 17px;
  width: max-content;
  height: max-content;
  display: flex;
  place-items: center;
  background-color: #eaff60;
  margin: ${(props) => props.margin};
`;
