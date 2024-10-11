import styled from "styled-components";
import arrow from "../assets/Arrow.svg";
const Style = styled.a`
  pointer-events: all;
  text-decoration: none;
  min-width: 42px;
  min-height: 17px;
  width: max-content;
  display: flex;
  place-items: center;
  background-color: #88efff;
  cursor: pointer;
  display: flex;
  place-items: center;
  margin: ${(props) => props.margin};
  & img {
    width: 12px;
    margin: 4px 4px auto 0;
  }
`;
export const Button = ({ children, margin }) => {
  return (
    <Style margin={margin} download href={"./files/Portfolio_Novikov.pdf"}>
      {children}
      <img src={arrow} alt={"Стрелка"} />
    </Style>
  );
};
