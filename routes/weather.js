const express = require("express");
const { route } = require("express/lib/application");
const router = express.Router();
const needle = require("needle");


//uses api key from .env file
const apiKey = process.env.API_KEY;


router.get("/:city", async (req, res) => {
try {
    const cityName = req.params.city;

    const apiResponse = await needle("get", `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${apiKey}`);
    const data = apiResponse.body;

    res.json(data);
} catch (error) {
    res.status(500).json({error});
}
})



module.exports = router;