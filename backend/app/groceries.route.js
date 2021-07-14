import express from "express"
import GroceriesCtrl from "./groceries.controller.js"

const router = express.Router()

router.route("/")
    .get(GroceriesCtrl.appGetGroceries)
    .post(GroceriesCtrl.appAddItem)
    .put(GroceriesCtrl.appUpdateItem)
    .delete(GroceriesCtrl.appDeleteItem)


export default router