/** @format */
import express from "express";

import { productersController } from "../controllers/productersController.js";

const apiRoute = express.Router();
apiRoute.get("/", productersController);

export { apiRoute };
