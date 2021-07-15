import express from "express"
import GroceriesController from "./groceries.controller.js"

const router = express.Router()

router.route("/")
    .get(GroceriesController.appGetGroceries)
    .post(GroceriesController.appAddItem)
    .put(GroceriesController.appUpdateItem)
    .delete(GroceriesController.appDeleteItem)

router.route("/areas").get(GroceriesController.appGetAreas)

export default router