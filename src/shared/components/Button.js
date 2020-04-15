import styled from "styled-components";

const Button = styled.button`
  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.darkGray};
  border-radius: 2px;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  padding: 8px;
  transition: background-color 0.4s;
  opacity: ${({ disabled }) => disabled && 0.3};
  border: solid 2px ${({ theme }) => theme.colors.silver};
  border-radius: 5px;
  font-size: 14px;
  outline: none;
  display: flex;
  justify-content: center;

  &:hover {
    background: ${({ theme }) => theme.colors.darkGray};
    color: ${({ theme }) => theme.colors.white};
  }
`;

Button.Confirm = styled(Button)`
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.green};
  &:hover {
    background-color: ${({ theme, disabled }) =>
      !disabled && theme.colors.darkGreen};
  }
`;

Button.Warning = styled(Button)`
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.red};
  &:hover {
    background-color: ${({ theme, disabled }) =>
      !disabled && theme.colors.bordeaux};
  }
`;

Button.Main = styled(Button)`
  font-size: larger;
  border: 3px solid ${({ theme }) => theme.colors.white};
  border-radius: 10px;
  box-shadow: 0px 0px 0px 1px rgb(90, 80, 80) inset;
`;

Button.Black = styled(Button)`
  padding: 15px 10px 15px 10px;
  margin: 20px;
  background-color: ${({ theme }) => theme.colors.black};
  color: ${({ theme }) => theme.colors.white};
  border-bottom: 2px solid ${({ theme }) => theme.colors.red};
  border-radius: 4px;
  font-size: 16px;
  font-weight: bold;
  letter-spacing: 2px;
  width: 190px;
`;

export default Button;
