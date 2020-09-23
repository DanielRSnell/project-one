/** @format */

import { AppLoading } from 'expo';
import React from 'react';
import { ScrollView, TouchableOpacity } from 'react-native';
import styled from 'styled-components';

export const Card = (props) => {
	console.log(props.data, 'CARD PROPS');
	return (
		<ScrollView
			horizontal={true}
			style={{ paddingBottom: 30, paddingLeft: 10 }}
			showsHorizontalScrollIndicator={false}>
			{props.data ? (
				props.data.map((item, index) => (
					<TouchableOpacity
						key={index}
						onPress={() =>
							props.navigation.navigate('Section', { section: item })
						}>
						<CardContainer style={{ elevation: 8 }}>
							<Cover>
								<CardImage source={item.image} />
								<Title>{item.title}</Title>
							</Cover>
							<Content>
								<Logo source={item.logo} />
								<Wrapper>
									<Caption>{item.caption}</Caption>
									<Subtitle>{item.subtitle}</Subtitle>
								</Wrapper>
							</Content>
						</CardContainer>
					</TouchableOpacity>
				))
			) : (
					<AppLoading />
				)}
		</ScrollView>
	);
};

const Content = styled.View`
	padding-left: 20px;
	flex-direction: row;
	align-items: center;
	height: 80px;
`;

const Logo = styled.Image`
	width: 44px;
	height: 44px;
`;

const Subtitle = styled.Text`
	color: #b8bece;
	font-weight: 600;
	font-size: 15px;
	text-transform: uppercase;
	margin-top: 4px;
`;

const Caption = styled.Text`
	color: #3c4560;
	font-size: 20px;
	font-weight: 600;
`;

const Wrapper = styled.View`
	margin-left: 10px;
`;

const CardContainer = styled.View`
	background: white;
	width: 315px;
	height: 280px;
	border-radius: 14px;
	margin: 20px 10px;
	box-shadow: 0 5px 15px rgba(0, 0, 0, 0.15);
`;

const Cover = styled.View`
	width: 100%;
	height: 200px;
	border-top-left-radius: 14px;
	border-top-right-radius: 14px;
	overflow: hidden;
`;

const CardImage = styled.Image`
	width: 100%;
	height: 100%;
	position: absolute;
	top: 0;
	left: 0;
`;

const Title = styled.Text`
	color: white;
	font-size: 24px;
	font-weight: bold;
	margin-top: 20px;
	margin-left: 20px;
	width: 170px;
`;
