import express from "express";
import { addEmployee, deleteEmployee, editEmployee, getbyId, getEmployee } from "../controllers/employee.controller.js";
import upload from "../config/multer.js";

const  empRouter = express.Router();

empRouter.post("/add", upload.single("profilePicture"), addEmployee);
empRouter.get("/get", getEmployee)
empRouter.get("/get/:id", getbyId)
empRouter.delete("/delete/:id", deleteEmployee)
empRouter.patch("/update/:id", upload.single("profilePicture"), editEmployee);
export default empRouter;

