const cors = require('cors');
const express = require('express');
const app = express();
const PORT = 8080;


const corsOptions = {
  origin: 'http://localhost',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

// Middlewares

app.use(express.json())
app.use(cors(corsOptions));


// Routes

app.get('/', (req, res) => {

    // sacar la info de la db
    const array = [{name:"alexis"}, {}, {}]
    res.status(200).json(array)
})

app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
})
