import styled from "styled-components";

const SpinnerStyle = styled.div`
  width: 78px;
  height: 78px;
  border-radius: 50%;
  display: inline-block;
  /* position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%); */
  border: 5px solid;
  border-color: #88efff #88efff transparent transparent;
  box-sizing: border-box;
  animation: rotation 2s linear infinite;

  &::after,
  &::before {
    content: "";
    box-sizing: border-box;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;
    border: 5px solid;
    border-color: transparent transparent #fff600 #fff600;
    width: 65px;
    height: 65px;
    border-radius: 50%;
    box-sizing: border-box;
    animation: rotationBack 1s linear infinite;
    transform-origin: center center;
  }
  &::before {
    width: 52px;
    height: 52px;
    border-color: #fff #fff transparent transparent;
    animation: rotation 2.5s linear infinite;
  }

  @keyframes rotation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  @keyframes rotationBack {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(-360deg);
    }
  }
`;
const Wrapper = styled.div`
  position: absolute;
  z-index: 999999;
  width: 100%;
  height: 100%;
  display: flex;
  place-content: center;
  place-items: center;
  background-color: #1e1e1e;
`;
export const Spinner = () => {
  return (
    <Wrapper>
      <SpinnerStyle />
    </Wrapper>
  );
};
