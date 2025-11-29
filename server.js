/** @format */

import express from "express";

const celebrity = {
  type: "action hero",
  name: "nshut maurice",
};

const app = express();

app.get("/", (req, res) => {
  console.log("Root route hit");
  res.json(celebrity);
});


app.listen(8000, () => {
  console.log(`server connected! 8000`);
});
