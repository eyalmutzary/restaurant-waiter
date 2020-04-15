import styled from "styled-components";

const TextArea = styled.textarea`
  height: 100px;
  width: 87%;
  margin: 20px;
  padding: 10px;
  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme.colors.gray};
  color: ${({ theme }) => theme.colors.darkGray};
  font-size: 16px;
  transition: 0.2s;
  outline: none;

  &:focus {
    border: solid 1px ${({ theme }) => theme.colors.darkGray};
    color: ${({ theme }) => theme.colors.darkGray};
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors.gray};
  }
`;

export default TextArea;
