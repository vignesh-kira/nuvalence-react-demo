import axios from 'axios';

export function fetchUsers(pageNumber, pageSize) {
	const URL = `https://randomuser.me/api/?page=${pageNumber}&results=${pageSize}`;

	return axios.get(URL);
}
