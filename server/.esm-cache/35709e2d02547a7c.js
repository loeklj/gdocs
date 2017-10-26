let express;_025‍.w('express',[["default",function(v){express=v}]]);let bodyParser;_025‍.w('body-parser',[["default",function(v){bodyParser=v}]]);let http;_025‍.w('http',[["default",function(v){http=v}]]);



const app = express();
app.use(bodyParser.json());
app.use(express.static('public'))

app.listen(3004, () => console.log('GDocs app listening on port 3004!'));
