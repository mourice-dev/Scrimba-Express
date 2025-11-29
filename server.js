/** @format */

import express from "express";
import { startup } from './data/data.js'

// const celebrity = {
//   type: "action hero",
//   name: "nshut maurice",
// };
const PORT = 8000;

const app = express();

app.get("/", (req, res) => {
    res.send("Server is running. Go to /api to see data.");
});

app.get("/api", (req, res) => {
  console.log("Root route hit");
  res.json(startup);
});


app.listen(PORT, () => {
  console.log(`server connected! ${PORT}`);
});
