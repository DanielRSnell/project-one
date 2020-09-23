/** @format */

import React from 'react';
import { AsyncStorage, TouchableOpacity } from 'react-native';
import styled from 'styled-components';
import NotificationButton from './NotificationButton.js'

export const MainHeader = (props) => {

	const handleMenu = async () => {
		const name = await AsyncStorage.getItem("user_name");
		console.log(name)
		if (typeof name === "string") {
			props.onOpenMenu()
		} else {
			props.onOpenLogin()
		}
	}

	return (<Container>
		<Titlebar>
			<TouchableOpacity
				onPress={handleMenu}
				style={{ position: 'absolute', top: 0, left: 2 }}>
				<Avatar source={props.avatar}/>
			</TouchableOpacity>
			<Title>Welcome Back,</Title>
			<Name>{props.name}</Name>
			<TouchableOpacity
				onPress={() => props.onOpenNotif()}
				style={{ position: "absolute", right: 20, top: 5 }}
			>
  			<NotificationButton />
			</TouchableOpacity>
		</Titlebar>
	</Container>
	)

	
}

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
	width: 46px;
	height: 46px;
	background: black;
	border-radius: 22px;
	margin-left: 20px;
`;

	const Container = styled.View`
	flex: 1;
	background-color: #f0f3f5;
`;