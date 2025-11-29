/** @format */

import express from "express";
import { startups } from './data/data.js'

// const celebrity = {
//   type: "action hero",
//   name: "nshut maurice",
// };
const PORT = 8000;

const app = express();

app.get("/", (req, res) => {
    res.send("Server is running. Go to /api to see data.");
});

app.get('/api', (req, res) => {
  const fitleredData = startups;

  let {
    industry,
    country,
    continent,
    is_seeking_funding,
    has_mvp
  } = req.query;

  const toBool = (value) => (value === "true" ? true : value === "false" ? false : undefined )

has_mvp = toBool(has_mvp);
is_seeking_funding = toBool(is_seeking_funding);

if (has_mvp !== undefined) {
  fitleredData = fitleredData.filter((item) => {
    item.has_mvp === has_mvp
  })
}
if (is_seeking_funding !== undefined) {
  fitleredData = fitleredData.filter((item) => {
    item.is_seeking_funding === is_seeking_funding
  })
}
if (industry) {
  fitleredData = fitleredData.filter((item) => {
     item.industry.toLowerCase() === industry.toLowerCase()
  })
}
if (country) {
  fitleredData = fitleredData.filter((item) => {
     item.country.toLowerCase() === country.toLowerCase()
  })
}
if (continent) {
  fitleredData = fitleredData.filter((item) => {
    item.continent.toLowerCase() === continent.toLowerCase()
  })
}
  
  res.json(startups)
})

// app.get("/api/user/:id", (req, res) => {
//   console.log(req.params.id)
//   res.json(req.params.id)
//   });


app.listen(PORT, () => {
  console.log(`server connected! ${PORT}`);
});
