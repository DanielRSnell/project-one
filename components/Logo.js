import { AppLoading } from "expo";
import React from "react";
import { ScrollView } from "react-native";
import styled from "styled-components";

export const Logo = (props) => (
	<ScrollView
		horizontal={true}
		showsHorizontalScrollIndicator={false}
		style={{ flexDirection: "row", padding: 20, paddingLeft: 12, paddingTop: 30, paddingRight: 12 }}>
		{
			props.dataSource ? props.dataSource.map((item, index) => (
				<LogoContainer key={index}>
					<Image source={item.image} />
					<Text>{item.text}</Text>
				</LogoContainer>
			)) :
			<AppLoading />}
	</ScrollView>
);

const LogoContainer = styled.View`
	flex-direction: row;
	background: white;
	height: 50px;
	padding: 12px 20px;
	border-radius: 10px;
	box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.05);
	align-items: center;
	margin: 0 8px;
`;

const Image = styled.Image`
	width: 36px;
	height: 36px;
`;

const Text = styled.Text`
	font-weight: 600;
	font-size: 17px;
	margin-left: 8px;
`;
