const express = require('express');
const app = express();
const bodyParser = require('body-parser');
import * as build from './create-connection';
bodyParser.urlencoded({ extended: true });
app.use(bodyParser.json());


app.get('/', async (err, res) => {
    let data = await build;
    console.log(data);
    res.send(`app running${data}`);
});


app.listen(8000, error => {
    if (error) {
        console.error(error);
    } else {
        console.info(
            `==> 🌎  Listening on port 8000. Open up http://localhost:8000/ in your browser.`
        );
    }
});