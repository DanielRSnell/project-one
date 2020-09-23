import React from 'react';
import styled from 'styled-components';
import {
	Keyboard,
	TouchableOpacity,
	TouchableWithoutFeedback,
	Alert,
	Animated,
	Dimensions,
	AsyncStorage,
} from 'react-native';
import { BlurView } from 'expo-blur';
import Success from './Success';
import Loading from './Loading';
import firebase from '../utils/Firebase';

const screenHeight = Dimensions.get('window').height;

class ModalLogin extends React.Component {
	state = {
		email: null,
		password: null,
		iconEmail: require('../assets/icon-email.png'),
		iconPassword: require('../assets/icon-password.png'),
		isSuccessful: false,
		isLoading: false,
		top: new Animated.Value(screenHeight),
		scale: new Animated.Value(1.3),
		translateY: new Animated.Value(0),
	};

	componentDidMount() {}

	componentDidUpdate() {
		if (this.props.loginMenu === true) {
			Animated.timing(this.state.top, {
				toValue: 0,
				duration: 0,
				useNativeDriver: false,
			}).start();
			Animated.spring(this.state.scale, {
				toValue: 1,
				useNativeDriver: true,
			}).start();
			Animated.timing(this.state.translateY, {
				toValue: 0,
				duration: 0,
				useNativeDriver: true,
			}).start();
		}

		if (this.props.loginMenu === false) {
			setTimeout(() => {
				Animated.timing(this.state.top, {
					toValue: screenHeight,
					duration: 0,
					useNativeDriver: false,
				}).start();
				Animated.spring(this.state.scale, {
					toValue: 1.3,
					useNativeDriver: true,
				}).start();
			}, 525);
			Animated.timing(this.state.translateY, {
				toValue: 1000,
				duration: 500,
				useNativeDriver: true,
			}).start();
		}
	}

	handleLogin = async () => {
		await Keyboard.dismiss();

		const { email, password } = this.state;

		await firebase
			.auth()
			.signInWithEmailAndPassword(email, password)
			.catch((e) => {
				Alert.alert('Error', e.message);
			})
			.then(async (response) => {
				if (response) {
					this.setState({ isLoading: true });

					await AsyncStorage.setItem("user_name", response.user.email);
					const email = await AsyncStorage.getItem('user_name')

					let user = {
						name: email,
						photo: require('../assets/avatar.jpg')
					}

					await this.props.onUpdateUser(user)

					setTimeout(() => {
						this.setState({ isLoading: false, isSuccessful: true });

						setTimeout(() => {
							this.setState({ isSuccessful: false });
							this.props.closeLogin();
							Alert.alert('Congrats', `You've logged in as ${email}`);
						}, 1250);
					}, 2000);
				}
			});
	}

	

	focusEmail = () => {
		this.setState({
			iconEmail: require('../assets/icon-email-animated.gif'),
			iconPassword: require('../assets/icon-password.png'),
		});
	};

	focusPassword = () => {
		this.setState({
			iconPassword: require('../assets/icon-password-animated.gif'),
			iconEmail: require('../assets/icon-email.png'),
		});
	};

	tapBackground = () => {
		Keyboard.dismiss();
		this.props.closeLogin();
	};


	render() {
		return (
			<AnimatedContainer style={{ top: this.state.top }}>
				<TouchableWithoutFeedback onPress={this.tapBackground}>
					<BlurView
						tint='default'
						intensity={100}
						style={{
							position: 'absolute',
							width: '100%',
							height: '100%',
						}}
					/>
				</TouchableWithoutFeedback>
				<AnimatedModal
					style={{
						transform: [
							{ scale: this.state.scale },
							{ translateY: this.state.translateY },
						],
					}}>
					<Logo source={require('../assets/logo-dc.png')} />
					<Text>Start Learning. Access Pro Content.</Text>
					<TextInput
						onChangeText={(email) => this.setState({ email })}
						placeholder='Email'
						keyboardType='email-address'
						onFocus={this.focusEmail}
					/>
					<TextInput
						onChangeText={(password) => this.setState({ password })}
						placeholder='Password'
						secureTextEntry={true}
						onFocus={this.focusPassword}
					/>
					<IconEmail source={this.state.iconEmail} />
					<IconPassword source={this.state.iconPassword} />
					<TouchableOpacity onPress={() => this.handleLogin()}>
						<Button style={{ elevation: 5 }}>
							<ButtonText>Login</ButtonText>
						</Button>
					</TouchableOpacity>
				</AnimatedModal>
				<Success isActive={this.state.isSuccessful} />
				<Loading isActive={this.state.isLoading} />
			</AnimatedContainer>
		);
	}
}

export default ModalLogin;

const Container = styled.View`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background: rgba(0, 0, 0, 0.75);
	justify-content: center;
	align-items: center;
`;

const AnimatedContainer = Animated.createAnimatedComponent(Container);

const Text = styled.Text`
	margin-top: 20px;
	font-size: 13px;
	font-weight: 600;
	text-transform: uppercase;
	width: 160px;
	text-align: center;
	color: #b8bece;
`;

const Logo = styled.Image`
	width: 44px;
	height: 44px;
	margin-top: 50px;
`;
const Modal = styled.View`
	width: 335px;
	height: 370px;
	background: white;
	border-radius: 20px;
	box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
	align-items: center;
`;

const AnimatedModal = Animated.createAnimatedComponent(Modal);

const TextInput = styled.TextInput`
	border: 1px solid #dbdfea;
	width: 295px;
	height: 44px;
	border-radius: 10px;
	font-size: 17px;
	color: #3c4560;
	margin-top: 20px;
	padding-left: 44px;
`;
const Button = styled.View`
	background: #5263ff;
	height: 50px;
	width: 295px;
	justify-content: center;
	align-items: center;
	border-radius: 10px;
	box-shadow: 0 10px 20px #c2cbff;
	margin-top: 20px;
`;
const ButtonText = styled.Text`
	color: white;
	font-weight: 600;
	font-size: 20px;
	text-transform: uppercase;
`;

const IconEmail = styled.Image`
	position: absolute;
	top: 179px;
	left: 31px;
	width: 24px;
	height: 16px;
`;
const IconPassword = styled.Image`
	position: absolute;
	top: 239px;
	left: 35px;

	width: 18px;
	height: 24px;
`;
