import express from "express";
import { createCity, getCity, getCityByState, getIdCity } from "../controllers/city.controller.js";


const cityRouter = express.Router();

cityRouter.post("/createcity", createCity );
cityRouter.get("/getcity", getCity)
cityRouter.get("/cityget/:id",getIdCity)
cityRouter.ge;("/state/:id", getCityByState);



export default cityRouter;