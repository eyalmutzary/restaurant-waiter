import React, { useMemo } from "react";
import styled from "styled-components";
import {
  Input,
  TextArea,
  Screen,
  Sidebar,
  Icon as BaseIcon,
  Button,
} from "../shared/components";

const ContentWrapper = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const FormWrapper = styled.div`
  width: 600px;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.white};
  padding: 20px;
  border: 2px solid ${({ theme }) => theme.colors.lightPink};
`;

const WaiterAuth = styled.div`
  margin: 20px 20px 0px 20px;
  position: fixed;
  top: 10px;
  right: 10px;
  display: flex;
  font-size: 20px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.darkGray};
`;

const AuthText = styled.div`
  margin: 0px 20px 0px 20px;
`;

const TitleWrapper = styled.div`
  text-align: center;
  font-size: 26px;
  margin: 20px;

  &:after {
    content: "";
    display: block;
    margin: 0 auto;
    width: 60px;
    padding-top: 30px;
    border-bottom: 6px solid ${({ theme }) => theme.colors.red};
  }
`;

const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: space-around;
`;

const Icon = styled(BaseIcon)`
  margin-right: 10px;
`;

const AddTable = ({ history }) => {
  const sidebarButtons = {
    top: [{ name: "arrow-left", onClick: () => history.goBack() }],
    center: [],
    bottom: [],
  };

  return (
    <Screen>
      <Sidebar
        top={sidebarButtons.top}
        center={sidebarButtons.center}
        bottom={sidebarButtons.bottom}
      />

      <ContentWrapper>
        <WaiterAuth>
          <AuthText>Signed as: ADDNAME</AuthText>
          <Icon
            name="sign-out-alt"
            // onClick={() => setWhichModalShown(modalTypes.CONFIRM)}
          />
        </WaiterAuth>
        <FormWrapper>
          <TitleWrapper>New Table</TitleWrapper>
          <Input name="Table Number" />
          <Input name="Diners" type="number" />
          <TextArea placeholder="Enter note..." />
          <ButtonsWrapper>
            <Button.Black>
              <Icon name="sync-alt" />
              Reset
            </Button.Black>
            <Button.Black>
              <Icon name="plus" />
              Confirm
            </Button.Black>
          </ButtonsWrapper>
        </FormWrapper>
      </ContentWrapper>
    </Screen>
  );
};

export default AddTable;
