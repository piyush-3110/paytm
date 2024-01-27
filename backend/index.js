const express = require("express");
const rootRouter = require("./routes/index");
const cors = require("cors");
const bodyparser = require("body-parser");
const app = express();
app.use(cors());
app.use(bodyparser.json());
app.use("/api/v1", rootRouter);
app.listen(3000, () => {
  console.log("App is running on port 3000");
});
