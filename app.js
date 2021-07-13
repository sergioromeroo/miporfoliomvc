const express = require('express');
const app = express();
const port = 3000;

app.use(express.static("public"));

const mainRouter = require("./routes/main");
app.use("/",mainRouter)

app.listen(port, () => console.log(" en el puerto " + port)); 