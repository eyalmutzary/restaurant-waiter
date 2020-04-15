import React from "react";
import styled from "styled-components";
import { backgroundImage } from "../shared/assets/images";
import {
  Button as BaseButton,
  Screen as BaseScreen,
} from "../shared/components";

const Screen = styled(BaseScreen)`
  justify-content: space-around;
  padding-top: 100px;
  background-image: url(${backgroundImage});
  background-size: cover;
  background-position: center;
`;

const LogoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.colors.white};
  text-align: center;
`;

const Title = styled.div`
  font-size: 100px;
`;

const Subtitle = styled.div`
  font-size: 25px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-right: 50px;
`;

const BorderedButton = styled(BaseButton.Main)`
  margin: 10px;
  width: 180px;
  height: 55px;
`;

const Main = ({ history }) => (
  <Screen>
    <LogoWrapper>
      <Title>Well-Served</Title>
      <Subtitle>Probably the best serving app in the world.</Subtitle>
    </LogoWrapper>
    <ButtonWrapper>
      <BorderedButton onClick={() => history.push("/tables")}>
        Tables
      </BorderedButton>
      <BorderedButton>
        Add Table
      </BorderedButton>
    </ButtonWrapper>
  </Screen>
);

export default Main;
