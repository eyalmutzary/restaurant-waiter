import styled from "styled-components";

const LoadingSpinner = styled.div`
  display: inline-block;
  align-self: center;
  width: 80px;
  height: 80px;

  &:after {
    content: " ";
    display: block;
    width: 64px;
    height: 64px;
    margin: 8px;
    border-radius: 50%;
    border: 6px solid ${({ theme }) => theme.colors.darkGray};
    border-color: ${({ theme }) => theme.colors.darkGray} transparent
      ${({ theme }) => theme.colors.darkGray} transparent;
    animation: lds-dual-ring 1.2s linear infinite;
  }

  @keyframes lds-dual-ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export default LoadingSpinner;
