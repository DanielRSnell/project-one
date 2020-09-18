import { AppLoading } from "expo";
import React from "react";
import { ScrollView } from "react-native";
import styled from "styled-components";

const Course = (props) => (
	<ScrollView
		horizontal={false}
		showsHorizontalScrollIndicator={false}
		style={{ paddingBottom: 20, paddingLeft: 10 }}>
		{
			props.courses ? props.courses.map((course, index) => (
				<Container key={index}>
					<Cover>
						<Image source={course.image} />
						<Logo source={course.logo} resizeMode='contain' />
						<Subtitle>{course.subtitle}</Subtitle>
						<Title>{course.title}</Title>
					</Cover>
					<Content>
						<Avatar source={course.avatar} />
						<Caption>{course.caption}</Caption>
						<Author>Taught by {course.author}</Author>
					</Content>
				</Container>
			)) :
				<AppLoading />}
	</ScrollView>
);

export default Course;

const Container = styled.View`
	width: 344px;
	height: 335px;
	border-radius: 14px;
	background: white;
	box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
	margin: 15px 5px;
`;

const Cover = styled.View`
	height: 260px;
	border-top-right-radius: 14px;
	border-top-left-radius: 14px;
	overflow: hidden;
	justify-content: flex-end;
`;

const Image = styled.Image`
	position: absolute;
	width: 100%;
	height: 100%;
`;

const Logo = styled.Image`
	width: 48px;
	height: 48px;
	position: absolute;
	top: 90px;
	left: 50%;
	margin-left: -24px;
`;

const Title = styled.Text`
	font-size: 24px;
	color: white;
	font-weight: 600;
	margin-top: 4px;
	width: 170px;
	margin-bottom: 20px;
	margin-left: 20px;
`;

const Subtitle = styled.Text`
	font-size: 15px;
	color: rgba(255, 255, 255, 0.8);
	font-weight: 500;
	text-transform: uppercase;
	margin-left: 20px;
`;
const Content = styled.View`
	padding-left: 62px;
	justify-content: center;
	height: 75px;
`;

const Avatar = styled.Image`
	width: 32px;
	height: 32px;
	position: absolute;
	top: 20px;
	left: 20px;
	border-radius: 16px;
`;

const Caption = styled.Text`
	font-size: 14px;
	color: #3c4560;
	font-weight: 500;
	max-width: 260px;
`;

const Author = styled.Text`
	font-size: 13px;
	color: #b8bece;
	font-weight: 500;
	margin-top: 4px;
`;
