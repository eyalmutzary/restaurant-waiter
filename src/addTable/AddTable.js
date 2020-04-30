import React, { useCallback, useState, useMemo } from "react";
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
  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const sidebarButtons = useMemo(() => {
    return {
      top: [{ name: "arrow-left", onClick: () => history.goBack() }],
      center: [],
      bottom: [],
    };
  }, [history]);

  const onSubmit = useCallback(
    async (data) => {
      setIsLoading(true);
      const postData = {
        status: "ordering",
        isActive: true,
        ...data,
      };
      try {
        const res = await axios.post("/customerTables", postData);
        console.log(res.data);
        history.push("/tables");
      } catch (error) {
        console.log(error.response);
        if (error.response.status === 403) {
          setError("This table is already occupied.");
        } else {
          setError("Unkown error occurred.");
        }
      } finally {
        setIsLoading(false);
      }
    },
    [history]
  );

  return (
    <Screen>
      <Sidebar
        top={sidebarButtons.top}
        center={sidebarButtons.center}
        bottom={sidebarButtons.bottom}
      />

      <ContentWrapper>
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
          {error && <ErrorMessage>{error}</ErrorMessage>}
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
