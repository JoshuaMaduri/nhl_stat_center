import express from 'express';
import bodyParser from 'body-parser';
import axios from 'axios';

const app = express();
const port = 3000;
const main_api = "https://api-web.nhle.com/v1/"

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));



app.get("/",  (req, res) => {
    res.render("main.ejs");
});


app.listen(port, () =>
console.log(`Server is running on port ${port}`));