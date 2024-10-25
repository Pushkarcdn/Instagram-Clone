import connectDB from "./db/index.js";
import app from "./app.js";
import config from "./config/index.js";

app.listen(config.port, () => {
  console.log("Server is running on port " + config.port);
});

connectDB();
