let express;_ae0‍.w('express',[["default",function(v){express=v}]]);let bodyParser;_ae0‍.w('body-parser',[["default",function(v){bodyParser=v}]]);let http;_ae0‍.w('http',[["default",function(v){http=v}]]);let routes;_ae0‍.w('./routes',[["default",function(v){routes=v}]]);




const app = express();
app.use(bodyParser.json());
app.use(express.static('public'))

// attach routes
routes(app);

app.listen(3004, () => console.log('GDocs app listening on port 3004!'));
