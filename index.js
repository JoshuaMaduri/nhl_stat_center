import express from 'express';
import bodyParser from 'body-parser';
import axios from 'axios';
import { format, formatDistance, formatRelative, subDays } from 'date-fns';
import moment from 'moment-timezone';
import secrets from './secrets.js';

const app = express();
const port = 3000;

//apis for gathering NHL data
const nhl_api = "https://api-web.nhle.com/v1/"

//apis for gathering live score data
const live_score_api = 'https://livescore6.p.rapidapi.com/matches/v2/list-by-date'
const live_score_api_headers = {
    'X-RapidAPI-Key': secrets.rapid_api_key,
    'X-RapidAPI-Host': 'livescore6.p.rapidapi.com'
  }

//api for gathering nhl news
const news_api = "https://newsapi.org/v2/everything?q=bitcoin"
const news_api_parameters = {
    'apiKey': secrets.news_api_key
}

//date funcationality
const formattedDate = format(new Date(), 'yyyy-MM-dd');

//midleware install
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));



app.get("/", async (req, res) => {
    try{
        const response = await axios.get(nhl_api + 'schedule/now');
        const games_today = response.data.gameWeek.filter(date => date.date == formattedDate)[0];
        const userTimeZone = moment.tz.guess();
        console.log(games_today, userTimeZone);

        res.render('main.ejs',{
            api_data: games_today,
            usertz: userTimeZone, 
            moment
        });
    } catch (error){
        console.log(error);
        res.status(500).send("Error fetching data");
    }

});


app.listen(port, () =>
console.log(`Server is running on port ${port}`));