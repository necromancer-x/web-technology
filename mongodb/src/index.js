import app from "./app.js";
import dotenv from "dotenv";
import connectDB from "./db/config.db.js";

dotenv.config({
  path: "./.env",
});

const port = process.env.PORT || 3000;

//To connect with our database, configuration is written in src/db/config.db.js
connectDB()
  .then(() => {
    app.listen(port, () => {
      console.log(`Example app listening on port http://localhost:${port}`);
    });
  })
  .catch((err) => {
    console.error("MongoDB connection error", err);
    process.exit(1);
  });
