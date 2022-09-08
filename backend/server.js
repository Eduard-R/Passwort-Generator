const express = require('express');
const cors = require('cors');
const package = require('./package.json');
const password = require('./createPassword');
const url = require('url');

const port = process.env.port || process.env.PORT || 5000;
const apiRoot = '/api';

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors({ origin: "http://127.0.0.1:5500" })); // Live Server Frontend
app.options('*', cors());

const router = express.Router();

// Route Configurations
router.get('/', (req, res) => {
    res.send(`${package.description} - v${package.version}`);
});

router.get('/password', (req, res) => {
    const queryObject = url.parse(req.url, true).query;
    res.send(password(queryObject.length, queryObject.hasNumbers, queryObject.hasSymbols, queryObject.hasCapitals));
});

app.use(apiRoot, router);

app.listen(port, () => {
    console.log(`Server started on port ${port} ...`);
}); 
