const express = require("express");
const cors = require("cors");
const PORT = process.env.PORT || 3000; //uses port from .env file by default
require("dotenv").config();

const app = express();

app.use(express.static("public"));
app.use(express.json());

app.use("/api", require("./routes/weather"));

app.use(cors());

app.listen(PORT,()=>console.log(`Server running on port: ${PORT}`));