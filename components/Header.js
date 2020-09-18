/** @format */

import React from 'react';
import { TouchableOpacity } from 'react-native';
import styled from 'styled-components';
import { Ionicons } from '@expo/vector-icons';
import { NotificationsIcon } from './Icons';

export const MainHeader = (props) => (
	<Container>
		<Titlebar>
			<TouchableOpacity
				onPress={props.onOpen}
				style={{ position: 'absolute', top: 0, left: 2 }}>
				<Avatar source={props.avatar} />
			</TouchableOpacity>
			<Title>Welcome Back,</Title>
			<Name>{props.name}</Name>
			<NotificationsIcon style={{ position: 'absolute', right: 20, top: 5 }} />
		</Titlebar>
	</Container>
);

const Title = styled.Text`
	font-size: 16px;
	color: #b8bece;
	font-weight: 500;
`;

const Name = styled.Text`
	font-size: 20px;
	color: #3c4560;
`;

const Titlebar = styled.View`
	width: 100%;
	margin-top: 50px;
	padding-left: 80px;
`;

const Avatar = styled.Image`
	width: 50px;
	height: 50px;
	background: black;
	border-radius: 22px;
	margin-left: 20px;
`;

const Container = styled.View`
	flex: 1;
	background-color: #f0f3f5;
`;
