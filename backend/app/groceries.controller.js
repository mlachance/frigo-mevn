import GroceriesDAO from "../dao/groceriesDAO.js"

export default class GroceriesCtrl {

    static async appGetGroceries(req, res, next) {

        const itemsPerPage = req.query.itemsPerPage ? parseInt(req.query.itemsPerPage, 10) : 20
        const page = req.query.page ? parseInt(req.query.page, 10) : 0

        let filters = {}
        if (req.query.name) {
        filters.name = req.query.name
        } else if (req.query.area) {
        filters.area = req.query.area
        }

        const { groceriesList, totalNumGroceries } = await GroceriesDAO.getGroceries({
            filters,
            page,
            itemsPerPage,
          })
      
          let response = {
            groceries: groceriesList,
            page: page,
            filters: filters,
            entries_per_page: itemsPerPage,
            total_results: totalNumGroceries,
          }
          res.json(response)

    }

    static async appAddItem(req, res, next) {

        try {
            const name = req.body.name
            const area = req.body.area
            const quantity = req.body.quantity
            const unit = req.body.unit
            const useUpBy = req.body.useUpBy
            const shoppingList = req.body.shoppingList
            const shoppingListQuantity = req.body.shoppingListQuantity

            const groceryResponse = await GroceriesDAO.addItem(
                name,
                area,
                quantity,
                unit,
                useUpBy,
                shoppingList,
                shoppingListQuantity,
            )
            res.json({ status: "success" })
        } catch(e) {
            res.status(500).json({ error: e.message })
        }

    }

    static async appUpdateItem(req, res, next) {

        try {
            const itemId = req.body.review_id
            const name = req.body.name
            const area = req.body.area
            const quantity = req.body.quantity
            const unit = req.body.unit
            const useUpBy = req.body.useUpBy
            const shoppingList = req.body.shoppingList
            const shoppingListQuantity = req.body.shoppingListQuantity

            const groceryResponse = await GroceriesDAO.updateItem(
                itemId,
                name,
                area,
                quantity,
                unit,
                useUpBy,
                shoppingList,
                shoppingListQuantity,
            )

            var { error } = groceryResponse
            if (error) {
              res.status(400).json({ error })
            }

            res.json(groceryResponse)

        } catch(e) {
            res.status(500).json({ error: e.message })
        }

    }

    static async appDeleteItem(req, res, next) {

        try {
            const itemId = req.body.review_id

            const groceryResponse = await GroceriesDAO.deleteItem(
                itemId,
            )
            res.json(groceryResponse) // { id : [itemId] })
        } catch(e) {
            res.status(500).json({ error: e.message })
        }
        
    }

}