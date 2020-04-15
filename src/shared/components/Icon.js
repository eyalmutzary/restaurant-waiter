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
  faCheck
);

const IconWrapper = styled.div``;

const Icon = ({ name, ...rest }) => (
  <IconWrapper {...rest}>
    <FontAwesomeIcon icon={name} />
  </IconWrapper>
);

export default Icon;
