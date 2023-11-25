const express = require("express");
const app = express();
const cors = require("cors");

require('dotenv').config()

//middleware

app.use(cors());
app.use(express.json()); //req.bodygit 

//routes
app.use("/auth", require("./routes/auth"));
app.use("/dashboard", require("./routes/dashboard"));
app.use("/rental", require("./routes/rental"));


// app.listen(5000, () => {
//   console.log(`Server is starting on port 5000`);
// });

app.listen(process.env.PORT, () => console.log("server is running"))
