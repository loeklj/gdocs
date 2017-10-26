let express;_aa1‍.w('express',[["default",function(v){express=v}]]);let bodyParser;_aa1‍.w('body-parser',[["default",function(v){bodyParser=v}]]);let http;_aa1‍.w('http',[["default",function(v){http=v}]]);let router;_aa1‍.w('./lib/routes',[["default",function(v){router=v}]]);




const app = express();
app.use(bodyParser.json());
app.use(express.static('public'));
app.use(router);

app.listen(3004, () => console.log('GDocs app listening on port 3004!'));
