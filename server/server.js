const port = 8000;
const db_name = "exam_db"
const express = require("express");
const cors = require("cors");

require("./config/mongoose.config")(db_name);
const app = express();
app.use(cors());

app.use(express.json());

//change this route to whatever the file name in your routes directory is
require("./routes/exam.routes")(app);

app.listen(port, () => {
    console.log(`Listening for requests on port ${port} to respond to.`)
});
