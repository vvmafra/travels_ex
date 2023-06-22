import {Router} from "express"
import { getPassengers } from "../controllers/passenger.controller.js"

const passengerRouter = Router()

passengerRouter.get("/passengers/travels", getPassengers)

export default passengerRouter