/** @format */

import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import SectionScreen from '../screens/SectionScreen';

const HomeStack = createStackNavigator({
	Home: HomeScreen,
	Section: SectionScreen,
});

const CoursesStack = createStackNavigator({
	Courses: SectionScreen,
});

const ProjectStack = createStackNavigator({
	Projects: SectionSecreen,
});

const TabNavigator = createBottomTabNavigator({
	HomeStack,
	CoursesStack,
	ProjectStack,
});

export default TabNavigator;
