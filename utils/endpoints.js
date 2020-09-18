/** @format */

import axios from 'axios';

let header = {
	headers: { 'X-API-KEY': 'C7DBC0D7-E30E4B99-8EDDE08D-8C990A26' },
	Accept: 'application/json',
	'Cache-Control': 'no-cache',
};

export function GetUser() {
	return axios
		.get(`https://uifaces.co/api`, header)
		.then((res) => res.data[0])
		.catch((e) => console.log(e));
}
