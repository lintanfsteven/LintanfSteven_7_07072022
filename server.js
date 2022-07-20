const express = require("express");
const userRoutes = require("./routes/user");
require("dotenv").config({ path: "./config/.env" });
require("./config/db");
const app = express("app");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//routes
app.use("/api/user", userRoutes);

// server
app.listen(process.env.PORT, () => {
  console.log(`Listening on port ${process.env.PORT}`);
});
