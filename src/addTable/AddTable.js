import React, { useCallback, useState } from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import {
  Input,
  TextArea,
  Screen,
  Sidebar,
  Icon as BaseIcon,
  Button,
  LoadingSpinner,
} from "../shared/components";
import axios from "axios";

const ContentWrapper = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const FormWrapper = styled.form`
  width: 600px;
  display: flex;
  flex-direction: column;
  justify-content: center;
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

const ErrorMessage = styled.div`
  color: red;
  margin-left: 20px;
  margin-top: 0;
`;

const AddTable = ({ history }) => {
  const { register, handleSubmit, errors } = useForm();
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = useCallback(
    (data) => {
      setIsLoading(true);
      const postData = {
        // WaiterId: 1,
        status: "ordering",
        ...data,
      };
      axios
        .post("/customerTables", postData)
        .then((response) => {
          console.log(response);
          history.push("/tables");
        })
        .catch((error) => {
          console.log(error);
        })
        .then(() => setIsLoading(false));
    },
    [history]
  );

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
        <FormWrapper onSubmit={handleSubmit(onSubmit)}>
          <TitleWrapper>New Table</TitleWrapper>
          {isLoading && <LoadingSpinner />}
          <Input
            placeholder="Table Number"
            name="tableNum"
            forwardRef={register({ required: "Table Num is required." })}
          />
          {errors.tableNum && (
            <ErrorMessage>{errors.tableNum.message}</ErrorMessage>
          )}
          <Input
            placeholder="Diners"
            name="diners"
            type="number"
            forwardRef={register({ required: "Table Num is required." })}
          />
          {errors.diners && (
            <ErrorMessage>{errors.diners.message}</ErrorMessage>
          )}
          <TextArea placeholder="Enter note..." name="note" ref={register} />
          <ButtonsWrapper>
            <Button.Black type="reset">
              <Icon name="sync-alt" hover={false} />
              Reset
            </Button.Black>
            <Button.Black type="submit">
              <Icon name="plus" hover={false} />
              Confirm
            </Button.Black>
          </ButtonsWrapper>
        </FormWrapper>
      </ContentWrapper>
    </Screen>
  );
};

export default AddTable;
