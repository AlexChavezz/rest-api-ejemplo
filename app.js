const cors = require('cors');
const express = require('express');
const app = express();
const PORT = 8080;


// Middlewares

app.use(express.json())
app.use(cors());


// Routes

app.get('/', (req, res) => {

    // sacar la info de la db
    const array = [{name:"alexis"}, {}, {}]
    res.status(200).json(array)
})

app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
})