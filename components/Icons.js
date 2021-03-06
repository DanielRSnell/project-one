import * as React from "react";
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg";

export function NotificationsIcon (props){
	return (
		<Svg width={24} height={24} viewBox='0 0 24 24' fill='none' {...props}>
			<G clipPath='url(#prefix__clip0)' fill='#4775f2'>
				<Path d='M20 10V8A8 8 0 004 8v2a4.441 4.441 0 01-1.547 3.193A4.183 4.183 0 001 16c0 2.5 4.112 4 11 4s11-1.5 11-4a4.183 4.183 0 00-1.453-2.807A4.44 4.44 0 0120 10zM9.145 21.9a2.992 2.992 0 005.71 0c-.894.066-1.844.1-2.855.1s-1.961-.032-2.855-.1z' />
			</G>
			<Defs>
				<ClipPath id='prefix__clip0'>
					<Path fill='#fff' d='M0 0h24v24H0z' />
				</ClipPath>
			</Defs>
		</Svg>
	);
}

export function CoursesIcon (props){
	return (
		<Svg width={16} height={16} viewBox='0 0 16 16' fill='none' {...props}>
			<G clipPath='url(#prefix__clip0)'>
				<Path
					d='M6 12h2c.6 0 1-.4 1-1V3.5l3.2 7.9c.2.5.8.8 1.3.5l1.9-.8c.5-.2.8-.8.5-1.3L12.1.5c-.2-.5-.8-.8-1.3-.5L9 .8C8.9.4 8.5 0 8 0H6c-.6 0-1 .4-1 1v10c0 .6.4 1 1 1z'
					fill='#7D8FFF'
				/>
				<Path d='M1 12h2c.6 0 1-.4 1-1V1c0-.6-.4-1-1-1H1C.4 0 0 .4 0 1v10c0 .6.4 1 1 1z' fill='#546BFB' />
				<Path d='M16 14H0v2h16v-2z' fill='#D7DCFF' />
			</G>
			<Defs>
				<ClipPath id='prefix__clip0'>
					<Path fill='#fff' d='M0 0h16v16H0z' />
				</ClipPath>
			</Defs>
		</Svg>
	);
}

export function HomeIcon (props){
	return (
		<Svg width={16} height={16} viewBox='0 0 16 16' fill='none' {...props}>
			<G clipPath='url(#prefix__clip0)'>
				<Path
					d='M11 16h2c.6 0 1-.4 1-1V8h1c.3 0 .6-.1.8-.3.4-.4.3-1-.1-1.4l-7-6C8.3 0 7.8 0 7.4.3l-7 6c-.4.4-.5 1-.1 1.4.1.2.4.3.7.3h1v7c0 .6.4 1 1 1h2c.6 0 1-.4 1-1v-3h4v3c0 .6.4 1 1 1z'
					fill='#546BFB'
				/>
			</G>
			<Defs>
				<ClipPath id='prefix__clip0'>
					<Path fill='#fff' d='M0 0h16v16H0z' />
				</ClipPath>
			</Defs>
		</Svg>
	);
}

export function LightIcon (props){
	return (
		<Svg width={16} height={16} viewBox='0 0 16 16' fill='none' {...props}>
			<Path
				d='M9 0H7v2h2V0zM14.294 3.052L12.88 1.637 11.465 3.05l1.414 1.414 1.415-1.413zM16 7h-2v2h2V7zM11.535 13.02l1.415 1.413 1.414-1.415-1.415-1.413-1.414 1.414zM9 14H7v2h2v-2zM1.566 12.948l1.414 1.415 1.415-1.413-1.414-1.415-1.415 1.413zM2 7H0v2h2V7zM4.465 3.12L3.05 1.707 1.636 3.12l1.415 1.414L4.465 3.12z'
				fill='#7D8FFF'
			/>
			<Path d='M8 4C5.8 4 4 5.8 4 8s1.8 4 4 4 4-1.8 4-4-1.8-4-4-4z' fill='#546BFB' />
		</Svg>
	);
}

export function LogoutIcon (props){
	return (
		<Svg width={16} height={16} viewBox='0 0 16 16' fill='none' {...props}>
			<Path
				d='M3.4 2H8v2h2V1c0-.6-.4-1-1-1H1C.4 0 0 .4 0 1v9c0 .3.1.5.3.7l5 5c.2.2.4.3.7.3.1 0 .3 0 .4-.1.4-.1.6-.5.6-.9V6c0-.3-.1-.5-.3-.7L3.4 2zM5 12.6l-3-3V3.4l3 3v6.2z'
				fill='#546BFB'
			/>
			<Path d='M15.7 7.3L12 3.6 10.6 5l2 2H8v2h4.6l-2 2 1.4 1.4 3.7-3.7c.4-.4.4-1 0-1.4z' fill='#D7DCFF' />
		</Svg>
	);
}

export function MenuIcon (props){
	return (
		<Svg height={16} width={16} {...props}>
			<Defs>
				<Path id='prefix__a' opacity={1} d='M1 1h14a1 1 0 010 2H1a1 1 0 010-2z' />
				<Path id='prefix__b' opacity={1} d='M1 7h14a1 1 0 010 2H1a1 1 0 010-2z' />
				<Path id='prefix__c' opacity={1} d='M1 13h6a1 1 0 010 2H1a1 1 0 010-2z' />
			</Defs>
			<Use xlinkHref='#prefix__a' fill='#4775F2' />
			<Use xlinkHref='#prefix__b' fill='#4775F2' />
			<Use xlinkHref='#prefix__c' fill='#4775F2' fillOpacity={0.49} />
		</Svg>
	);
}

export function NightIcon (props){
	return (
		<Svg width={16} height={16} viewBox='0 0 16 16' fill='none' {...props}>
			<Path
				d='M6 0C2.5.9 0 4.1 0 7.9 0 12.4 3.6 16 8.1 16c3.8 0 6.9-2.5 7.9-6C9.9 11.7 4.3 6.1 6 0z'
				fill='#999'
			/>
		</Svg>
	);
}

export const PlayIcon = props => (
  <Svg height={38.15} width={38.15} {...props}>
    <Path
      opacity={1}
      d="M8.153 14.585c-1.73-1.703-.825-4.649 1.563-5.087l19.148-3.516c2.072-.38 3.88 1.436 3.49 3.506L28.8 28.364c-.444 2.36-3.343 3.267-5.053 1.582L8.153 14.586z"
      fill="#33CEFF"
      transform="rotate(45 19.075 19.075)"
    />
  </Svg>
);

export function RefreshIcon (props){
	return (
		<Svg width={16} height={16} viewBox='0 0 16 16' fill='none' {...props}>
			<Path
				d='M4.5 4.5c1.9-1.9 5.1-1.9 7 0 .7.7 1.2 1.7 1.4 2.7l2-.3c-.2-1.5-.9-2.8-1.9-3.8C10.3.4 5.9.4 3.1 3.1L.9.9.2 7.3l6.4-.7-2.1-2.1z'
				fill='#546BFB'
			/>
			<Path
				d='M15.8 8.7l-6.4.7 2.1 2.1c-1.9 1.9-5.1 1.9-7 0-.7-.7-1.2-1.7-1.4-2.7l-2 .3c.2 1.5.9 2.8 1.9 3.8 1.4 1.4 3.1 2 4.9 2 1.8 0 3.6-.7 4.9-2l2.2 2.2.8-6.4z'
				fill='#D7DCFF'
			/>
		</Svg>
	);
}

export function StarIcon (props){
	return (
		<Svg width={16} height={16} viewBox='0 0 16 16' fill='none' {...props}>
			<G clipPath='url(#prefix__clip0)'>
				<Path
					d='M15.144 5.439l-4.317-.628L8.9.9a1.041 1.041 0 00-1.8 0L5.173 4.812l-4.317.627A1 1 0 00.3 7.145l3.123 3.045-.737 4.3a1 1 0 001.451 1.054L8 13.513l3.861 2.029a1 1 0 001.451-1.054l-.737-4.3L15.7 7.145a1 1 0 00-.554-1.705l-.002-.001z'
					fill='#546BFB'
				/>
			</G>
			<Defs>
				<ClipPath id='prefix__clip0'>
					<Path fill='#fff' d='M0 0h16v16H0z' />
				</ClipPath>
			</Defs>
		</Svg>
	);
}
