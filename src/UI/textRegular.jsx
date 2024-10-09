import styled from "styled-components";

const Style = styled.text`
  font-family: "Roboto Regular";
  pointer-events: none;
  color: ${(props) => props.color};
  font-size: ${(props) => props.size};
  text-align: ${(props) => props.align};
  margin: ${(props) => props.margin};
  line-height: ${(props) => props.lineHeight};
  opacity: ${(props) => props.opacity};
  word-wrap: nowrap;
`;
const P = styled.text`
  word-wrap: nowrap;
  color: #fff600;
`;
export const Regular = ({
  children,
  paragraph,
  color,
  size,
  align,
  margin,
  lineHeight,
  opacity,
}) => {
  return (
    <Style
      color={color}
      size={size}
      align={align}
      margin={margin}
      lineHeight={lineHeight}
      opacity={opacity}
    >
      {paragraph == true ? (
        <>
          {"<"}
          {<P>p</P>}
          {">  "}
          {children}
          {"  <"}
          {<P>/p</P>}
          {">"}
        </>
      ) : (
        <>{children}</>
      )}
    </Style>
  );
};
