const express = require("express");
const routes = require("./routes");
const path = require("path");
const connectDB = require("./config/db");
const app = express();
//Connect DB
connectDB();
app.use(express.json());

app.use(routes);

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client,build,index.html"));
  });
}

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Server started on $(PORT)`));
