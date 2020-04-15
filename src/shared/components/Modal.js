import React from "react";
import styled from "styled-components";
import BaseIcon from "./Icon";

const Backdrop = styled.div`
  background: rgba(0, 0, 0, 0.5);
  z-index: 10;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  height: 100vh;
  width: 100vw;
`;

const ModalWrapper = styled.div`
  position: relative;
  z-index: 11;
  width: 500px;
  max-height: 90vh;
  overflow: auto;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 3px;
  color: ${({ theme }) => theme.colors.black};
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  font-size: 20px;
`;

const Icon = styled(BaseIcon)`
  position: absolute;
  right: 10px;
  top: 10px;
  padding: 0px 5px 0px 5px;
  border-radius: 3px;
  background-color: ${({ theme }) => theme.colors.white};

  &:hover {
    color: ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.colors.black};
    transition: 0.4s;
  }
`;

const Image = styled.img`
  padding: 0px;
  object-fit: cover;
  width: 100%;
  height: 40vh;
  border-radius: 3px;
`;

const TitleWrapper = styled.div`
  margin-top: 20px;
  text-align: center;
  font-size: 26px;

  &:after {
    content: "";
    display: block;
    margin: 0 auto;
    width: 60px;
    padding-top: 30px;
    border-bottom: 6px solid ${({ theme }) => theme.colors.red};
  }
`;

const ContentWrapper = styled.div``;

const BottomWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  background-color: ${({ theme }) => theme.colors.black};
  border-top: solid 2px ${({ theme }) => theme.colors.red};
`;

const BottomText = styled.div`
  flex: 1;
  text-align: center;
  padding: 5px;
  color: ${({ theme }) => theme.colors.white};
  font-weight: bold;

  &:hover {
    cursor: pointer;
    background-color: ${({ theme }) => theme.colors.red};
    transition: 0.4s;
  }
`;

const Modal = ({ title, image, children, onHide, buttons }) => {
  const handleModalClick = (event) => {
    event.stopPropagation();
  };

  return (
    <Backdrop onClick={onHide}>
      <ModalWrapper onClick={handleModalClick}>
        <Icon name="times" onClick={onHide} />
        {image && <Image src={image} />}
        {title && <TitleWrapper>{title}</TitleWrapper>}
        <ContentWrapper>{children}</ContentWrapper>
        {buttons && (
          <BottomWrapper>
            {buttons.map(({ text, onClick }) => (
              <BottomText key={text} onClick={onClick}>
                {text}
              </BottomText>
            ))}
          </BottomWrapper>
        )}
      </ModalWrapper>
    </Backdrop>
  );
};

export default Modal;
