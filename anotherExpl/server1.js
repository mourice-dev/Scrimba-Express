/** @format */

import express from "express";
import { startups } from "../data/data.js";

const PORT = 8000;

const app = express();

app.get("/api", (req, res) => {
  let filteredData = startups;

  const { industry, country, continent, is_seeking_funding, has_mvp } =
    req.query;

  if (industry) {
    filteredData = filteredData.filter(
      (startup) => startup.industry.toLowerCase() === industry.toLowerCase()
    );
  }

  if (country) {
    filteredData = filteredData.filter(
      (startup) => startup.country.toLowerCase() === country.toLowerCase()
    );
  }

  if (continent) {
    filteredData = filteredData.filter(
      (startup) => startup.continent.toLowerCase() === continent.toLowerCase()
    );
  }

  if (is_seeking_funding) {
    filteredData = filteredData.filter(
      (startup) =>
        startup.is_seeking_funding ===
        JSON.parse(is_seeking_funding.toLowerCase())
    );
  }

  if (has_mvp) {
    filteredData = filteredData.filter(
      (startup) => startup.has_mvp === JSON.parse(has_mvp.toLowerCase())
    );
  }

  res.json(filteredData);
});

app.get("/api/:field/:term", (req, res) => {
  const { field, term } = req.params;

  const allowedFields = ["country", "continent", "industry"];

  if (!allowedFields.includes(field)) {
    return res
      .status(400)
      .json({
        message:
          "Search field not allowed. Please use only 'country', 'continent', 'industry'",
      });
  }

  /*
Challenge:
1. If the client’s 'field' is not supported, serve this object:
  {message: "Search field not allowed. Please use only 'country', 'continent', 'industry'" }
2. Chain in the .status(<code>) method to set a status code.
	What status code should you set?
3. You might run into an error! Find a solution!

hint.md for help!
*/

  const filteredData = startups.filter(
    (startup) => startup[field].toLowerCase() === term.toLowerCase()
  );

  res.json(filteredData);
});

/*
** The functionality **
Get all startups in a given country via api/country/<country name>
Get all startups in a given continent via api/continent/<continent name>
Get all startups in a given industry via api/industry/<industry name>

**Test Cases** 

These should work:
  api/country/india
  api/continent/europe
  api/industry/ai

This should return the object given in the challenge above. 
	api/has_mvp/true

*/

app.listen(PORT, () => console.log(`server connected on port ${PORT}`));
