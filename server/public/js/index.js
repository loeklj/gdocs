const ENDPOINTS = {
	SYNC: {
		url: '/doc',
		options: ({ headers }) => ({
			method: 'PUT',
			headers,
		}),
	},
	EDIT: {
		url: '/edit',
		options: ({ headers }) => ({
			method: 'PUT',
			headers,
		}),
	},
}

$(document).ready(() => {
	fetch(ENDPOINTS.SYNC.url, ENDPOINTS.SYNC.options({ headers: undefined }))
	.then((data) => {
		console.log(data);
	})
	.catch((err) => {
		console.log(err);
	});
})
