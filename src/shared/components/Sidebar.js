import React from "react";
import styled from "styled-components";
import BaseIcon from "./Icon";
import { useHistory } from "react-router-dom";

const SidebarWarpper = styled.div`
  width: 60px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.darkGray};
  border-right: 2px solid ${({ theme }) => theme.colors.red};
`;

const Wrapper = styled.div``;

const Icon = styled(BaseIcon).attrs({ size: "large" })`
  display: block;
  text-align: center;
  font-size: 36px;
  padding: 10px 0px 10px 0px;
  color: ${({ theme }) => theme.colors.silver};
`;

const Sidebar = ({ top, center, bottom }) => {
  const history = useHistory();
  return (
    <SidebarWarpper>
      <Wrapper>{top && top.map(({ ...rest }) => <Icon {...rest} />)}</Wrapper>
      <Wrapper>
        {center && center.map(({ ...rest }) => <Icon {...rest} />)}
      </Wrapper>
      <Wrapper>
        {bottom && bottom.map(({ ...rest }) => <Icon {...rest} />)}
      </Wrapper>
    </SidebarWarpper>
  );
};

export default Sidebar;
