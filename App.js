/** @format */

import React from 'react';

// Redux
import { createStore } from 'redux';
import { Provider } from 'react-redux';

// Screens
import HomeScreen from './screens/HomeScreen';
import SectionScreen from './screens/SectionScreen';
import CoursesScreen from './screens/CoursesScreen';
import ProjectScreen from './screens/ProjectScreen';

//Navigation
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

//Assets
import { Ionicons } from '@expo/vector-icons';
import styled from 'styled-components';

// GraphQL Apollo
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import { AsyncStorage } from 'react-native';
import VideoScreen from './screens/VideoScreen';

const client = new ApolloClient({
	uri: 'https://graphql.contentful.com/content/v1/spaces/9ylc32dn5hpw',
	credentials: 'same-origin',
	headers: {
		Authorization: `Bearer b7WZLWIvRp7hdSDBaha7ZBQ9tg0FF1vydLt0IlCQ-tk`,
	},
});

const initalState = {
	menuStatus: false,
	user: {
		name:
			typeof AsyncStorage.getItem('name') === 'string'
				? AsyncStorage.getItem('name')
				: 'Guest',
		photo: require('./assets/avatar-default.jpg'),
	},
	projectStatus: false,
	loginMenu: false,
	notifStatus: false
};

const reducer = (state = initalState, action) => {
	switch (action.type) {
		case 'CLOSE_MENU':
			return { ...state, menuStatus: false };
		case 'OPEN_MENU':
			return { ...state, menuStatus: true };
		case 'UPDATE_USER':
			return { ...state, user: action.payload };
		case 'OPEN_CARD':
			return { ...state, projectStatus: true };
		case 'CLOSE_CARD':
			return { ...state, projectStatus: false };
		case 'OPEN_LOGIN':
			return { ...state, loginMenu: true };
		case 'CLOSE_LOGIN':
			return { ...state, loginMenu: false };
		case "CLEAR_USER":
			return { ...state, user: action.payload }
		case "OPEN_NOTIF":
			return { ...state, notifStatus: true };
		case "CLOSE_NOTIF":
			return { ...state, notifStatus: false };
		default:
			return state;
	}
};

const store = createStore(reducer);
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function Home() {
	const options = { headerShown: false };

	return (
		<Stack.Navigator screenOptions={options}>
			<Stack.Screen name='Home' component={HomeScreen} options={options} />
			<Stack.Screen
				name='Section'
				component={SectionScreen}
				screenOption={{
					cardStyle: { backgroundColor: '#fff' },
				}}
			/>
			<Stack.Screen
				name="Video" component={VideoScreen} screenOption={{ cardStyle: { backgroundColor: "#fff" }}} />
		</Stack.Navigator>
	);
}

export default function App() {
	const activeColor = '#4775f2';
	const inactiveColor = '#b8bece';

	return (
		<ApolloProvider client={client}>
			<Provider store={store}>
				<ApplicationContainer>
					<NavigationContainer>
						<Tab.Navigator>
							<Tab.Screen
								name='Home'
								component={Home}
								options={{
									header: false,
									tabBarIcon: ({ focused }) => (
										<Ionicons
											name='ios-home'
											size={26}
											color={focused ? activeColor : inactiveColor}
										/>
									),
								}}
							/>
							<Tab.Screen
								name='Courses'
								component={CoursesScreen}
								options={{
									header: false,
									tabBarVisible: false,
									tabBarIcon: ({ focused }) => (
										<Ionicons
											name='ios-albums'
											size={26}
											color={focused ? activeColor : inactiveColor}
										/>
									),
								}}
							/>
							<Tab.Screen
								name='Projects'
								component={ProjectScreen}
								options={{
									header: false,
									tabBarIcon: ({ focused }) => (
										<Ionicons
											name='ios-folder'
											size={26}
											color={focused ? activeColor : inactiveColor}
										/>
									),
								}}
							/>
						</Tab.Navigator>
					</NavigationContainer>
				</ApplicationContainer>
			</Provider>
		</ApolloProvider>
	);
}

const ApplicationContainer = styled.View`
	flex: 1;
	background-color: #fff;
`;
