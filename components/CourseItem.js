import { AppLoading } from "expo";
import React from "react";
import { ScrollView, Dimensions } from "react-native";
import styled from "styled-components";

const screenWidth = Dimensions.get("window").width;

var cardWidth = screenWidth - 40;

function getCourseWidth(screenWidth) {
	if (screenWidth >= 768) {
		cardWidth = (screenWidth - 60) / 2
	}

	if (screenWidth >= 1024) {
		cardWidth = (screenWidth - 80) / 3
	}
}


class CourseItem extends React.Component {

	state = {
		cardWidth: getCourseWidth(screenWidth)
	}

	componentDidMount() {
		Dimensions.addEventListener("change", this.adaptLayout);
	}

	adaptLayout = dimensions => {
		this.setState({ cardWidth: getCourseWidth(dimensions.window.width) })
	}

	render() {
		return (
			<ScrollView
				horizontal={false}
				showsHorizontalScrollIndicator={false}
				style={{ paddingBottom: 20, paddingLeft: 10 }}>
				<CoursesContainer>
					{
						this.props.courses ? this.props.courses.map((course, index) => (
							<Container key={index} style={{ width: cardWidth }}>
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
							null}
				</CoursesContainer>
			</ScrollView>
		)
	}
}

export default CourseItem;

const CoursesContainer = styled.View`
	flex-direction: row;
	flex-wrap: wrap;
`

const Container = styled.View`
	width: 344px;
	height: 335px;
	border-radius: 14px;
	background: white;
	box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
	margin: 15px 0px;
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
