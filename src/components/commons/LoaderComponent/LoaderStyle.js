import styled from "styled-components";

const CircleDiv = styled.div`
  border: 3.5px solid grey;
  border-top-color: transparent;
  animation: spin 1s linear infinite;
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  width: 20px;
  height: 20px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export { CircleDiv };
