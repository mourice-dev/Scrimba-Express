/** @format */

import { getDBConnection } from "../db/db.js";

export async function getGenres(req, res) {
  try {
    const db = await getDBConnection();

    const genreRows = await db.all("SELECT DISTINCT genre FROM products");
    const genres = genreRows.map((row) => row.genre);
    res.json(genres);
  } catch (err) {
    res
      .status(500)
      .json({ error: "Failed to fetch genres", details: err.message });
  }
}

export async function getProducts(req, res) {
  try {
    const db = await getDBConnection();

    let query = "SELECT * FROM products";

    /*
Challenge:
1. Detect if a query string ‘genre’ is used. 
   If it is, retrieve only products with that genre from the database and serve them. 
   If not, all products should be served.

hint.md for help

Example incoming query: '?genre=rock'
*/
    const genre = req.query;
    genre.map((g) => g.genre);

    if (genre === "/genres") {

     query = "SELECT genre FROM products";
      const products = await db.all(query);
      res.json(products);

    } else {
      
      const products = await db.all(query);
      res.json(products);
    }
  } catch (err) {
    res
      .status(500)
      .json({ error: "Failed to fetch products", details: err.message });
  }
}

// import { getDBConnection } from '../db/db.js'

// export async function getGenres(req, res) {

//   try {

//     const db = await getDBConnection()

//     const genreRows = await db.all('SELECT DISTINCT genre FROM products')
//     const genres = genreRows.map(row => row.genre)
//     res.json(genres)

//   } catch (err) {

//     res.status(500).json({error: 'Failed to fetch genres', details: err.message})

//   }
// }

// export async function getProducts(req, res) {

//   try {

//     const db = await getDBConnection()

//     let query = 'SELECT * FROM products'

// /*
// Challenge:
// 1. Detect if a query string ‘genre’ is used.
//    If it is, retrieve only products with that genre from the database and serve them.
//    If not, all products should be served.

// hint.md for help

// Example incoming query: '?genre=rock'
// */

//     const products = await db.all(query)

//     res.json(products)

//   } catch (err) {

//     res.status(500).json({error: 'Failed to fetch products', details: err.message})

//   }

// }

// /** @format */
// import { getDBConnection } from "../db/db.js";

// export async function getGenres(req, res) {

//   try {
//     /*
// Challenge:

// 1. Get all distinct genres (no repeats) from the products table.

//   - Our front end code is expecting an array of genres as strings, but you will likely get an array of objects from the database. Find a solution to that!

// 2. Serve the array of genres and open up the mini browser to check the dropdown is populated.

// hint.md for help
// */
//     const db = await getDBConnection();

//     const selectGnres = await db.all("SELECT DISTINCT genre FROM products");

//     const genres = selectGnres.map(g => g.genre);

//     console.table(genres);

//     res.json(genres);

//   } catch (err) {
//     res
//       .status(500)
//       .json({ error: "Failed to fetch genres", details: err.message });
//   }
// }

// export async function getProducts() {
//   console.log("products");
// }

// /** @format */
// import { startups } from "../data/data.js";

// export const productersController = (req, res) => {
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
// };
