let fetch;_e90‍.w('node-fetch',[["default",function(v){fetch=v}]]);let login;_e90‍.w('./middleware',[["login",function(v){login=v}]]);let consts;_e90‍.w('./constants',[["default",function(v){consts=v}]]);






_e90‍.d((app) => {
	app.post('/', login, (req, res) => {
		console.log('RECEIVED POST REQ!', req.body);
		return res.status(200).end();
	});

	app.get('/', login, (req, res) => {
		console.log('RECEIVED GET REQ!', req.body);
		return res.status(200).end();
	});
});
