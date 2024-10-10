import styled from "styled-components";

const Style = styled.div`
  position: absolute;
  bottom: ${(props) => props.bottom};
  top: ${(props) => props.top};
  left: 50%;
  transform: translate(-30%, -20%);
  transform: ${(props) => props.transform};

  & span {
    display: block;
    width: 6.5vw;
    height: 6.5vw;
    max-width: 30px;
    max-height: 30px;
    border-bottom: 5px solid white;
    border-right: 5px solid white;
    transform: rotate(45deg);
    margin: -10px;
    animation: animate 2s infinite;
  }

  & span:nth-child(2) {
    animation-delay: -0.2s;
  }

  & span:nth-child(3) {
    animation-delay: -0.4s;
  }

  @keyframes animate {
    0% {
      opacity: 0;
      transform: rotate(45deg) translate(-20px, -20px);
    }
    50% {
      opacity: 1;
    }
    100% {
      opacity: 0;
      transform: rotate(45deg) translate(20px, 20px);
    }
  }
`;

export const Arrow = ({ transform, top, bottom }) => {
  return (
    <Style transform={transform} top={top} bottom={bottom}>
      <span></span>
      <span></span>
      <span></span>
    </Style>
  );
};
