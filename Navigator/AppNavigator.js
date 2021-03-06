/** @format */
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import SectionScreen from '../screens/SectionScreen';

const Stack = createStackNavigator();

const AppNavigator = (
	<NavigationContainer>
		<Stack.Navigator>
			<Stack.Screen name='Home' component={HomeScreen} />
			<Stack.Screen name='Section Screen' component={SectionScreen} />
		</Stack.Navigator>
	</NavigationContainer>
);

export default AppNavigator;
