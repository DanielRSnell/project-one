/** @format */

import React from 'react';
import styled from 'styled-components';

export default class LoginScreen extends React.Component {
	state = {};

	render() {
		return (
			<Container>
				<Text>LoginScreen</Text>
			</Container>
		);
	}
}

const Container = styled.View`
	flex: 1;
	justify-content: center;
	align-items: center;
`;

const Text = styled.Text``;
