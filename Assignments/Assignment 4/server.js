import express from "express";
const app = express();
const port = 3000;
//CREATE APP
//SERVE A STATIC PAGE IN THE PUBLIC DIRECTORY
app.use(express.static("public"));
//PORT TO LISTEN TO
app.listen(port, () => {
    console.log(`Listening on localhost:${port}`);
});
