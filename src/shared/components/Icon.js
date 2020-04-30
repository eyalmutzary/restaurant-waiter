import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import {
  faQuestion,
  faPlus,
  faArrowLeft,
  faWineGlassAlt,
  faHamburger,
  faFish,
  faPizzaSlice,
  faIceCream,
  faSeedling,
  faMugHot,
  faStar,
  faEdit,
  faTimes,
  faStarOfLife,
  faAngleDoubleRight,
  faEllipsisH,
  faSignOutAlt,
  faSyncAlt,
  faCog,
  faExclamationCircle,
  faCreditCard,
  faReceipt,
  faListUl,
  faCheck,
  faSignInAlt,
} from "@fortawesome/free-solid-svg-icons";

library.add(
  fab,
  faQuestion,
  faPlus,
  faArrowLeft,
  faWineGlassAlt,
  faHamburger,
  faFish,
  faPizzaSlice,
  faIceCream,
  faSeedling,
  faMugHot,
  faStar,
  faEdit,
  faTimes,
  faStarOfLife,
  faAngleDoubleRight,
  faEllipsisH,
  faSignOutAlt,
  faSyncAlt,
  faCog,
  faExclamationCircle,
  faCreditCard,
  faReceipt,
  faListUl,
  faCheck,
  faSignInAlt
);

const IconWrapper = styled.div``;

IconWrapper.withHover = styled.div`
  &:hover {
    transition: ease-out 0.4s;
    color: ${({ theme }) => theme.colors.red};
    cursor: pointer;
  }
`;

const Icon = ({ name, hover = true, ...rest }) => (
  <IconWrapper {...rest}>
    {hover ? (
      <IconWrapper.withHover>
        <FontAwesomeIcon icon={name} />
      </IconWrapper.withHover>
    ) : (
      <FontAwesomeIcon icon={name} />
    )}
  </IconWrapper>
);

export default Icon;
