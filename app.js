const express = require(`express`);
const https = require(`https`);
const ejs = require(`ejs`);
const app = express();
const port = 3000;

app.set(`view engine`, `ejs`);
app.use(express.urlencoded({ extended: true }));
app.use(express.static(`public`));

//= render index.ejs when the user goes to the main URL
app.get(`/`, function (req, res) {
    res.render(`index`);
});

app.get(`/:page`, function (req, res) {
    const page = req.params.page;
    res.render(`${page}`);
});

//= only relevant for local testing
app.listen(port, function () {
    console.log(`Server started on port ${port}`);
});