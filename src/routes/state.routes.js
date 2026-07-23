import express from "express"
import { createstate, getState } from "../controllers/state.controller.js"
const stateRouter = express.Router()

stateRouter.post("/createState", createstate)
stateRouter.get("/getState", getState)


export default stateRouter;