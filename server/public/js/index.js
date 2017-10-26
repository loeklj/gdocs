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

const TIMERS = {
	EDIT: 1000,
}

// avoid re-traveling the dom e.g.
const cache = {};

// simple cache for timers
const timerCache = {
	edit: [],
};

const sync = () => fetch(ENDPOINTS.SYNC.url, ENDPOINTS.SYNC.options({ headers: undefined }))
	.catch((err) => {
		console.log(err);
	});

const checkEdit = (newText) => {
	if (typeof newText === 'undefined' || newText == null) return;
	if (!cache.hasOwnProperty('text')) {
		cache.text = ''
	}

	// check for changes
	if (cache.text !== newText) {
		
	}
}


const setup = () => {
	// get doc element
	const novaDoc = docoument.getElementById('novadoc');
	cache.novaDoc = novaDoc;

	// start edit timer instantly
	const timerEditID = setInterval(() => {
		checkEdit(cache.novaDoc ? cache.novaDoc.innterHTML : undefined);
	}, TIMERS.EDIT);

	timerCache.edit.push(timerEditID);
};

$(document).ready(() => {
	setup();
	sync().then((data) => {
		console.log(data);
		if (data) {
			DOMCache.novaDoc.innerHTML = data;
			console.log('Updated!');
		}
	})
})
