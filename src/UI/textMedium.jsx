import styled from "styled-components";

export const Medium = styled.span`
  font-family: "Roboto Medium";
  pointer-events: none;
  color: ${(props) => props.color};
  font-size: ${(props) => props.size};
  text-align: ${(props) => props.align};
  margin: ${(props) => props.margin};
  line-height: ${(props) => props.lineHeight};
`;
