import React from "react";
import { SafeAreaView, ScrollView, Text } from "react-native";
import { MainHeader } from "../components/Header";
import styled from "styled-components";
import { Card } from "../components/Card";
import { Logo } from "../components/Logo";
import Course from "../components/Courses";
import Navigation from "../components/Menu";

// Component
export default function Entry (){
	return (
		<Container>
			<Navigation />
			<SafeAreaView>
				<ScrollView style={{ height: "100%" }}>
					<MainHeader name={"Daniel"} avatar={require("../assets/avatar.jpg")} />
					<Logo dataSource={logos} />
					<Subtitle>Continue Learning</Subtitle>
					<Card data={data} />
					<Subtitle>Popular Courses</Subtitle>
					<Course courses={courses} />
				</ScrollView>
			</SafeAreaView>
		</Container>
	);
}

const Container = styled.View`
	flex: 1;
	background-color: #f0f3f5;
`;

const Subtitle = styled.Text`
	color: #b8bece;
	font-weight: 600;
	font-size: 15px;
	margin-left: 20px;
	margin-top: 10px;
	text-transform: uppercase;
`;

const courses = [
	{
		title    : "Prototype in InVision Studio",
		subtitle : "10 sections",
		image    : require("../assets/background13.jpg"),
		logo     : require("../assets/logo-studio.png"),
		author   : "Daniel Snell",
		avatar   : require("../assets/avatar.jpg"),
		caption  : "Design and interactive prototype"
	},
	{
		title    : "React for Designers",
		subtitle : "12 sections",
		image    : require("../assets/background11.jpg"),
		logo     : require("../assets/logo-react.png"),
		author   : "Daniel Snell",
		avatar   : require("../assets/avatar.jpg"),
		caption  : "Learn to design and code a React site"
	},
	{
		title    : "Design and Code with Framer X",
		subtitle : "10 sections",
		image    : require("../assets/background14.jpg"),
		logo     : require("../assets/logo-framerx.png"),
		author   : "Daniel Snell",
		avatar   : require("../assets/avatar.jpg"),
		caption  : "Create powerful design and code components for your app"
	},
	{
		title    : "Design System in Figma",
		subtitle : "10 sections",
		image    : require("../assets/background6.jpg"),
		logo     : require("../assets/logo-figma.png"),
		author   : "Daniel Snell",
		avatar   : require("../assets/avatar.jpg"),
		caption  : "Complete guide to designing a site using a collaborative design tool"
	}
];

const data = [
	{
		title    : "React Native for Designers",
		image    : require("../assets/background11.jpg"),
		subtitle : "React Native",
		caption  : "1 of 12 sections",
		logo     : require("../assets/logo-react.png")
	},
	{
		title    : "Styled Components",
		image    : require("../assets/background12.jpg"),
		subtitle : "React Native",
		caption  : "2 of 12 sections",
		logo     : require("../assets/logo-react.png")
	},
	{
		title    : "Props and Icons",
		image    : require("../assets/background13.jpg"),
		subtitle : "React Native",
		caption  : "3 of 12 sections",
		logo     : require("../assets/logo-react.png")
	},
	{
		title    : "Static Data and Loop",
		image    : require("../assets/background14.jpg"),
		subtitle : "React Native",
		caption  : "4 of 12 sections",
		logo     : require("../assets/logo-react.png")
	}
];

const logos = [
	{
		image : require("../assets/logo-framerx.png"),
		text  : "Framer X"
	},
	{
		image : require("../assets/logo-figma.png"),
		text  : "Figma"
	},
	{
		image : require("../assets/logo-studio.png"),
		text  : "Studio"
	},
	{
		image : require("../assets/logo-react.png"),
		text  : "React"
	},
	{
		image : require("../assets/logo-swift.png"),
		text  : "Swift"
	},
	{
		image : require("../assets/logo-sketch.png"),
		text  : "Sketch"
	}
];
