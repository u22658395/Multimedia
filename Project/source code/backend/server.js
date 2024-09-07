import express from "express";
const app = express();
app.use(express.static("frontend/public"));
app.listen(1337, () => {
    console.log("Listening on localhost:1337");
});