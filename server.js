/** @format */

import express from "express";
import { startups } from "./data/data.js";
import { productersController } from "./controllers/productersController.js";
import {apiRoute} from "./routes/apiRoute.js"

const PORT = 8000;

const app = express();


app.use('/api', apiRoute)

app.use((req, res) => {
  res.status(404).json({
    data: 'endpoint not found'
  })
})

app.listen(PORT, () => console.log(`server connected on port ${PORT}`));

// app.get("/api", (req, res) => {
//   let filteredData = startups;

//   const { industry, country, continent, is_seeking_funding, has_mvp } =
//     req.query;

//   if (industry) {
//     filteredData = filteredData.filter(
//       (startup) => startup.industry.toLowerCase() === industry.toLowerCase()
//     );
//   }

//   if (country) {
//     filteredData = filteredData.filter(
//       (startup) => startup.country.toLowerCase() === country.toLowerCase()
//     );
//   }

//   if (continent) {
//     filteredData = filteredData.filter(
//       (startup) => startup.continent.toLowerCase() === continent.toLowerCase()
//     );
//   }

//   if (is_seeking_funding) {
//     filteredData = filteredData.filter(
//       (startup) =>
//         startup.is_seeking_funding ===
//         JSON.parse(is_seeking_funding.toLowerCase())
//     );
//   }

//   if (has_mvp) {
//     filteredData = filteredData.filter(
//       (startup) => startup.has_mvp === JSON.parse(has_mvp.toLowerCase())
//     );
//   }

//   res.json(filteredData);
// });
/*
Challenge:
1. When a user hits the /api endpoint with query params, filter the data so 
we only serve objects that meet their requirements. 
     
The user can filter by the following properties:
  industry, country, continent, is_seeking_funding, has_mvp

Test Cases

/api?industry=renewable%20energ y&country=germany&has_mvp=true
  Should get the "GreenGrid Energy" object.

/api?industry=renewable%20energy&country=germany&has_mvp=false
  Should not get any object

/api?continent=asia&is_seeking_funding=true&has_mvp=true
  should get for objects with IDs 3, 22, 26, 29
*/


// import express from "express";

// const app = express();

// /*
// Challenge: 
// 1. Update the code so a GET request to api/metals/gold
//     logs an object {category: ‘metals’, type: ‘gold’}

// But a GET request to api/crypto/eth
//     logs an object {category: crypto-name, type: eth}
// */

// app.get("/api/:category/:type", (req, res) => {
//   console.log(req.params);
//   res.json();
// });

// app.listen(8000, () => console.log("listening 8000"));