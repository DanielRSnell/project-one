import React from "react";
import styled from "styled-components";
import { NotificationsIcon} from "../components/Icons";

export default class NotificationButton extends React.Component {

  render() {
    return (
      <Container>
        <NotificationsIcon />
        <Bubble>
          <Text>3</Text>
        </Bubble>
      </Container>
    );
  }
}


const Container = styled.View`
  width: 44px;
  height: 44px;
  justify-content: center;
  align-items: center;
`;

const Bubble = styled.View`
  width: 16px;
  height: 16px;
  background: #3c4560;
  position: absolute;
  top: 0px;
  right: 5px;
  border-radius: 8px;
  justify-content: center;
  align-items: center;
  border: 1px solid white;
`;

const Text = styled.Text`
  color: white;
  font-size: 12px;
  font-weight: 700;
`;