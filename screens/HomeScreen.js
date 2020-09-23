/** @format */

import React, { useState, useEffect } from 'react';
import {
	SafeAreaView,
	ScrollView,
	Animated,
	Easing,
	StatusBar,
	Platform,
	Dimensions,
} from 'react-native';
import { MainHeader } from '../components/Header';
import styled from 'styled-components';
import { Card } from '../components/Card';
import { Logo } from '../components/Logo';
import Courses from '../components/Courses';
import Navigation from '../components/Menu';
import { connect } from 'react-redux';
import { GetUser } from '../utils/endpoints';
import { useNavigation } from '@react-navigation/native';
import ApolloClient from 'apollo-boost';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import ModalLogin from '../components/ModalLogin';
import Notifications from '../components/Notifications'

const screenWidth = Dimensions.get('window').width;

var tablet = false;

var mobile = false;

function detectDevice(screenWidth) {
	if (screenWidth >= 768) {
		tablet = true;
	} else if (screenWidth < 768) {
		mobile = true;
	}
}

// Component
function HomeScreen(props) {
	const scale = new Animated.Value(1);
	const opacity = new Animated.Value(1);

	const navigation = useNavigation();

	useEffect(() => {
		if (props.menuStatus === true) {
			Animated.timing(scale, {
				toValue: 0.9,
				duration: 300,
				useNativeDriver: false,
				easing: Easing.in(),
			}).start();
			Animated.spring(opacity, {
				toValue: 0.5,
				useNativeDriver: false,
			}).start();

			StatusBar.setBarStyle('light-content', true);
		}

		if (props.menuStatus === false) {
			Animated.timing(scale, {
				toValue: 1,
				duration: 300,
				useNativeDriver: false,
				easing: Easing.in(),
			}).start();
			Animated.spring(opacity, {
				toValue: 1,
				useNativeDriver: false,
			}).start();
			StatusBar.setBarStyle('dark-content', true);
		}

		if (Platform.OS == 'android' && tablet === true) {
			StatusBar.setBarStyle('light-content', true);
		}
	}, [scale]);

	return (
		<RootView>
			<Navigation
				onOpenLogin={props.openLogin.bind()}
				onOpenMenu={props.openMenu.bind()}
				onCloseMenu={props.closeMenu.bind()}
				onUpdateUser={props.updateUser.bind()}
				onClearUser={props.clearUser.bind()}
				onOpenNotif={props.openNotif.bind()}
				onCloseNotif={props.closeNotif.bind()}
				menuStatus={props.menuStatus}
				user={props.user.name}
			/>
			<AnimatedContainer
				style={{ transform: [{ scale: scale }], opacity: opacity }}>
				<SafeAreaView>
					<ScrollView style={{ height: '100%' }}>
						<MainHeader
							onOpenLogin={props.openLogin.bind()}
							onOpenMenu={props.openMenu.bind()}
							onClearUser={props.clearUser.bind()}
				onOpenNotif={props.openNotif.bind()}
				onCloseNotif={props.closeNotif.bind()}
							name={props.user.name}
							avatar={props.user.photo}
						/>
						<Notifications onOpenNotif={props.openNotif.bind()} onCloseNotif={props.closeNotif.bind()} notifStatus={props.notifStatus} />
						<Logo dataSource={logos} />
						<Subtitle>Continue Learning</Subtitle>

						<Card data={data} navigation={navigation} />

						<Subtitle>Popular Courses</Subtitle>
						<Courses courses={courses} />
					</ScrollView>
				</SafeAreaView>
			</AnimatedContainer>
			<ModalLogin
				userData={props.user}
				onUpdateUser={props.updateUser.bind()}
				loginMenu={props.loginMenu}
				openLogin={props.openLogin.bind()}
				closeLogin={props.closeLogin.bind()}
			/>
		</RootView>
	);
}

function mapStateToProps(state) {
	return {
		menuStatus: state.menuStatus,
		user: state.user,
		loginMenu: state.loginMenu,
		notifStatus: state.notifStatus
	};
}

function mapDispatchToProps(dispatch) {
	return {
		openMenu: () => dispatch({ type: 'OPEN_MENU' }),
		closeMenu: () =>
			dispatch({
				type: 'CLOSE_MENU',
			}),
		updateUser: (user) => dispatch({ type: 'UPDATE_USER', payload: user }),
		openLogin: () => dispatch({ type: 'OPEN_LOGIN' }),
		closeLogin: () => dispatch({ type: 'CLOSE_LOGIN' }),
		clearUser: () => dispatch({ type: "CLEAR_USER", payload: { name: "Guest", photo: require('../assets/avatar-default.jpg') } }),
		openNotif: () =>
		dispatch({
			type: "OPEN_NOTIF"
		}),
		closeNotif: () =>
		dispatch({
			type: "CLOSE_NOTIF"
		})
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);

const Container = styled.View`
	flex: 1;
	background-color: #f0f3f5;
	border-top-left-radius: 10px;
	border-top-right-radius: 10px;
	overflow: hidden;
`;

const AnimatedContainer = Animated.createAnimatedComponent(Container);

const RootView = styled.View`
	background: black;
	flex: 1;
`;

const Subtitle = styled.Text`
	color: #b8bece;
	font-weight: 600;
	font-size: 15px;
	margin-left: 20px;
	margin-top: 10px;
	text-transform: uppercase;
`;

const Message = styled.Text`
	margin: 20px;
	color: #b8bece;
	font-size: 15px;
	font-weight: 500;
`;

const courses = [
	{
		title: 'Prototype in InVision Studio',
		subtitle: '10 sections',
		image: require('../assets/background13.jpg'),
		logo: require('../assets/logo-studio.png'),
		author: 'Daniel Snell',
		avatar: require('../assets/avatar.jpg'),
		caption: 'Design and interactive prototype',
	},
	{
		title: 'React for Designers',
		subtitle: '12 sections',
		image: require('../assets/background11.jpg'),
		logo: require('../assets/logo-react.png'),
		author: 'Daniel Snell',
		avatar: require('../assets/avatar.jpg'),
		caption: 'Learn to design and code a React site',
	},
	{
		title: 'Design and Code with Framer X',
		subtitle: '10 sections',
		image: require('../assets/background14.jpg'),
		logo: require('../assets/logo-framerx.png'),
		author: 'Daniel Snell',
		avatar: require('../assets/avatar.jpg'),
		caption: 'Create powerful design and code components for your app',
	},
	{
		title: 'Design System in Figma',
		subtitle: '10 sections',
		image: require('../assets/background6.jpg'),
		logo: require('../assets/logo-figma.png'),
		author: 'Daniel Snell',
		avatar: require('../assets/avatar.jpg'),
		caption:
			'Complete guide to designing a site using a collaborative design tool',
	},
];

const data = [
	{
		title: 'React Native for Designers',
		image: require('../assets/background11.jpg'),
		subtitle: 'React Native',
		caption: '1 of 12 sections',
		logo: require('../assets/logo-react.png'),
	},
	{
		title: 'Styled Components',
		image: require('../assets/background12.jpg'),
		subtitle: 'React Native',
		caption: '2 of 12 sections',
		logo: require('../assets/logo-react.png'),
	},
	{
		title: 'Props and Icons',
		image: require('../assets/background13.jpg'),
		subtitle: 'React Native',
		caption: '3 of 12 sections',
		logo: require('../assets/logo-react.png'),
	},
	{
		title: 'Static Data and Loop',
		image: require('../assets/background14.jpg'),
		subtitle: 'React Native',
		caption: '4 of 12 sections',
		logo: require('../assets/logo-react.png'),
	},
];

const logos = [
	{
		image: require('../assets/logo-framerx.png'),
		text: 'Framer X',
	},
	{
		image: require('../assets/logo-figma.png'),
		text: 'Figma',
	},
	{
		image: require('../assets/logo-studio.png'),
		text: 'Studio',
	},
	{
		image: require('../assets/logo-react.png'),
		text: 'React',
	},
	{
		image: require('../assets/logo-swift.png'),
		text: 'Swift',
	},
	{
		image: require('../assets/logo-sketch.png'),
		text: 'Sketch',
	},
];
