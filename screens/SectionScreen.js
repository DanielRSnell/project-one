/** @format */

import React, { useEffect } from 'react';
import { TouchableOpacity, StatusBar, ScrollView } from 'react-native';
import { WebView, Linking } from 'react-native-webview';
import styled from 'styled-components';
import { Ionicons } from '@expo/vector-icons';
import Markdown from 'react-native-showdown';
import AutoHeightWebView from 'react-native-autoheight-webview'
import { PlayIcon } from '../components/Icons'

export default function SectionScreen(props) {
	const { section } = props.route.params;

	console.log(section);

	useEffect(() => {
		StatusBar.setBarStyle('light-content', true);

		return StatusBar.setBarStyle('dark-content', true);
	}, []);

	return (
		<ScrollView>
			<Container>
				<StatusBar hidden />
				<Cover>
					<Image source={section.image} />
					<PlayWrapper>
					<TouchableOpacity
						underlayColor="transparent"
						onPress={() => {
							props.navigation.navigate("Video");
						}}
					>
						<PlayView>
							<PlayIcon style={{ marginLeft: -10 }} />
						</PlayView>
					</TouchableOpacity>
					</PlayWrapper>
					<Wrapper>
						<Logo source={section.logo} />
						<Subtitle>{section.subtitle}</Subtitle>
					</Wrapper>
					<Title>{section.title}</Title>
					<Caption>{section.caption}</Caption>
				</Cover>
				<TouchableOpacity
					style={{ position: 'absolute', top: 30, right: 20 }}
					onPress={() => {
						props.navigation.goBack();
					}}>
					<CloseView>
						<Ionicons
							name='ios-close'
							size={36}
							color='#447532'
							style={{ marginTop: -2 }}
						/>
					</CloseView>
				</TouchableOpacity>
				<Content>
					<AutoHeightWebView
						source={{ html: mockContent + htmlStyles }}
						scalesPageToFit={false}
						scrollEnabled={false}
						refs='webview'
						onNavigationStateChange={(event) => {
							console.log(event);
							if (event.url !== 'about:blank') {
								this.refs.webview.stopLoading();
								Linking.openURL(event.url);
							}
						}}
					/>
					{/* <Markdown
						body={section.longContent}
						pureCSS={htmlStyles}
						scalesPageToFit={false}
						scrollEnabled={false}
					/> */}
				</Content>
			</Container>
		</ScrollView>
	);
}

const Container = styled.View`
	flex: 1;
`;

const mockContent = `<h2>Welcome to DesignCode.io</h2> <p>Welcome to your coding journey. This will be an experience to remember. We're going to merge together the knowledge of developer and designer in-order to create pixel perfect applications that drive more users.</p><p>Welcome to your coding journey. This will be an experience to remember. We're going to merge together the knowledge of developer and designer in-order to create pixel perfect applications that drive more users.</p><p>Welcome to your coding journey. This will be an experience to remember. We're going to merge together the knowledge of developer and designer in-order to create pixel perfect applications that drive more users.</p><p>Welcome to your coding journey. This will be an experience to remember. We're going to merge together the knowledge of developer and designer in-order to create pixel perfect applications that drive more users.</p><p>Welcome to your coding journey. This will be an experience to remember. We're going to merge together the knowledge of developer and designer in-order to create pixel perfect applications that drive more users.</p>`

const htmlStyles = `
<style>
* {
	font-family: -apple-system, Roboto;
	margin: 0;
	padding: 0;
	font-size: 16px;
	font-weight: normal;
	color: #3c4560;
	line-height: 24px;
}

h2 {
	font-size: 20px;
	text-transform: uppercase;
	color: #b8bece;
	font-weight: 600;
	margin-top: 50px;
}

p {
	font-size: 14px;
	margin-top: 20px;
}

a {
	color: #4775f2;
	font-weight: 600;
	text-decoration: none;
}

strong {
	font-weight: 700;
}

img {
	width: 100%;
	border-radius: 10px;
	margin-top: 10px;
	margin-bottom: 10px;
}

pre {
	padding: 20px;
	background: #212c4f;
	overflow: hidden;
	word-wrap: break-word;
	border-radius: 10px;
	margin-top; 20px;
}

code {
	color: white;
}
</style>
`;

const Title = styled.Text`
	font-size: 24px;
	color: white;
	font-weight: bold;
	width: 170px;
	position: absolute;
	top: 78px;
	left: 20px;
`;

const Image = styled.Image`
	width: 100%;
	height: 100%;
	position: absolute;
`;

const Cover = styled.View`
	height: 375px;
`;

const Caption = styled.Text`
	color: white;
	position: absolute;
	font-size: 17px;
	bottom: 20px;
	left: 20px;
	width: 300px;
`;

const CloseView = styled.View`
	width: 32px;
	height: 32px;
	background: white;
	border-radius: 16px;
	box-shadow: 0 5px 10px rgba(0, 0, 0, 0.15);
	justify-content: center;
	align-items: center;
`;

const Wrapper = styled.View`
	flex-direction: row;
	position: absolute;
	top: 40px;
	left: 20px;
	align-items: center;
`;

const Subtitle = styled.Text`
	font-size: 15px;
	font-weight: 600;
	color: rgba(255, 255, 255, 0.8);
	margin-left: 5px;
	text-transform: uppercase;
`;

const Logo = styled.Image`
	width: 24px;
	height: 24px;
`;

const Content = styled.View`
	
	background: white;
	padding: 20px;
	padding-bottom: 50px;
`;

const PlayWrapper = styled.View`
  position: absolute;
  top: 50%;
  left: 50%;
  margin-top: -40px;
  margin-left: -40px;
`;

const PlayView = styled.View`
  width: 80px;
  height: 80px;
  background: rgba(0, 0, 0, 0.5);
  border-radius: 40px;
  justify-content: center;
  align-items: center;
`;