/** @format */

import React from 'react';
import styled from 'styled-components';
import { Animated, TouchableOpacity, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import MenuItem from './MenuItem';
import { connect } from 'react-redux';

const screenHeight = Dimensions.get('window').height;

class Navigation extends React.Component {
	state = {
		top: new Animated.Value(screenHeight),
	};

	componentDidMount() {
		this.toggleMenu();
	}

	componentDidUpdate() {
		this.toggleMenu();
	}

	toggleMenu = () => {
		const { menuStatus } = this.props;

		if (menuStatus === true) {
			Animated.spring(this.state.top, {
				toValue: 54,
			}).start();
		}
		if (menuStatus === false) {
			Animated.spring(this.state.top, {
				toValue: screenHeight,
			}).start();
		}
	};

	render() {
		return (
			<AnimatedContainerWrapper style={{ top: this.state.top }}>
				<Cover>
					<Image source={require('../assets/background2.jpg')} />
					<Title>Daniel Snell</Title>
					<Subtitle>Heroku Senior Engineer</Subtitle>
				</Cover>
				<TouchableOpacity
					onPress={this.props.onClose}
					style={{
						position: 'absolute',
						top: 120,
						left: '50%',
						marginLeft: -22,
						zIndex: 1,
					}}>
					<CloseView>
						<Ionicons name='ios-close' size={44} color='#546bfb' />
					</CloseView>
				</TouchableOpacity>
				<Content>
					{items.map((item, index) => (
						<MenuItem
							key={index}
							icon={item.icon}
							title={item.title}
							text={item.text}
						/>
					))}
				</Content>
			</AnimatedContainerWrapper>
		);
	}
}

const Text = styled.Text`
	font-size: 16px;
`;

const Image = styled.Image`
	position: absolute;
	width: 100%;
	height: 100%;
`;

const Title = styled.Text`
	color: white;
	font-size: 24px;
	font-weight: 600;
`;

const Subtitle = styled.Text`
	font-size: 13px;
	color: rgba(255, 255, 255, 0.5);
	margin-top: 8px;
`;

const Container = styled.View`
	position: absolute;
	background: white;
	width: 100%;
	height: 100%;
	z-index: 100;
	border-radius: 10px;
	overflow: hidden;
`;

const AnimatedContainerWrapper = Animated.createAnimatedComponent(Container);

const Cover = styled.View`
	height: 142px;
	background: black;
	justify-content: center;
	align-items: center;
`;

const Content = styled.View`
	height: ${screenHeight};
	background: #f0f3f5;
	padding: 50px;
	z-index: 0;
`;

const CloseView = styled.View`
	width: 44px;
	height: 44px;
	border-radius: 22px;
	background: white;
	justify-content: center;
	align-items: center;
	box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.1);
`;

export default Navigation;

const items = [
	{
		icon: 'ios-settings',
		title: 'Account',
		text: 'settings',
	},
	{
		icon: 'ios-card',
		title: 'Billing',
		text: 'payments',
	},
	{
		icon: 'ios-compass',
		title: 'Learn React',
		text: 'start course',
	},
	{
		icon: 'ios-exit',
		title: 'Log out',
		text: 'see you soon!',
	},
];
