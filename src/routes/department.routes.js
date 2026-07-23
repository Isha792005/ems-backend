import express from "express";
import { createDepartment, getDepartment } from "../controllers/department.controller.js";

const depRouter = express.Router();

depRouter.post("/createdep", createDepartment)
depRouter.get("/getdep", getDepartment)
export default depRouter