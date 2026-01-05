const express = require("express");
const cors = require("cors")

const PORT = 3000;
const app = express();

app.use(cors({
    origin: "http://localhost:5173/"
}));

app.get("/", (req, res) => {
    console.log("hello from backend");
})

app.listen(PORT, () => {
    console.log(`Server is running on PORT : ${PORT}`);
})