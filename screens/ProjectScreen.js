/** @format */

import React from 'react';
import styled from 'styled-components';
import { Button } from 'react-native';

export default function ProjectScreen(props) {
	return (
		<Container>
			<Text>ProjectScreen</Text>
			<Button
				title='close'
				onPress={() => {
					props.navigation.goBack();
				}}
			/>
		</Container>
	);
}

const Container = styled.View`
	flex: 1;
	justify-content: center;
	align-items: center;
`;

const Text = styled.Text``;
