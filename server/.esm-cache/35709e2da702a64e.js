let express;_a70‍.w('express',[["default",function(v){express=v}]]);let bodyParser;_a70‍.w('body-parser',[["default",function(v){bodyParser=v}]]);let http;_a70‍.w('http',[["default",function(v){http=v}]]);let router;_a70‍.w('./lib/routes',[["default",function(v){router=v}]]);




const app = express();
app.use(bodyParser.json());
app.use(express.static('public'));
app.use(router);

app.listen(3004, () => console.log('GDocs app listening on port 3004!'));
