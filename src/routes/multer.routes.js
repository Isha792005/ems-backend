import empRouter from ".js";
import upload from ("../config/multer.js")
import { addEmployee } from "../controllers/employee.controller.js";

empRouter.post("/add",
    upload.single("profilePicture"), addEmployee);
    
    export default empRouter