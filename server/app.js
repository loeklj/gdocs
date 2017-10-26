import express from 'express';
import bodyParser from 'body-parser';
import http from 'http';
import routes from './routes';

const app = express();
app.use(bodyParser.json());
app.use(express.static('public'))

// attach routes
routes(app);

app.listen(3004, () => console.log('GDocs app listening on port 3004!'));
