import { ObjectId } from 'mongodb'

let groceries

export default class GroceriesDAO {

    // connect to db
    static async injectDB(conn) {
        if (groceries) {
            return
        }
        try {
            groceries = await conn.db(process.env.FRIGO_DB_NS).collection("groceries")
        } catch (e) {
            console.error(
                `Unable to establish a collection handle in groceriesDAO: ${e}`,
            )
        }
    }

    // fetch groceries from db
    static async getGroceries({
        filters = null,
        page = 0,
        itemsPerPage = 20,
    } = {}) {

        let query

        if (filters) {
            // MongoDB queries for different fields
            if("name" in filters) {
                query = { $text: { $search: filters["name"] }} // text search query
            } else if ("area" in filters) {
                query = { "area": { $eq: filters["area"] }} // equals query
            }
        }

        let cursor

        try {
            cursor = await groceries
                .find(query)
        } catch (e) {
            console.error(`Unable to issue find command, ${e}`)
            return { groceriesList: [], totalNumGroceries: 0 }
        }

        const displayCursor = cursor.limit(itemsPerPage).skip(itemsPerPage * page)

        try {
            const groceriesList = await displayCursor.toArray()
            const totalNumGroceries =await groceries.countDocuments(query)

            return { groceriesList, totalNumGroceries }
        } catch (e) {
            console.error(
                `Unable to convert cursor to array or problem counting documents, ${e}`
            )
            return { groceriesList: [], totalNumGroceries: 0 }
        }

    }

    // fetch areas from db
    static async getAreas() {
        let areas = []
        try {
            areas = await groceries.distinct("area")
            return areas
        } catch (e) {
            console.error(`Unable to get areas, ${e}`)
            return areas
        }
    }

    // add new grocery item to db
    static async addItem(name, area, quantity, unit, useUpBy, shoppingList, shoppingListQuantity) {

        try {

            const groceryItem = {
                name: name,
                area: area,
                quantity: quantity,
                unit: unit,
                useUpBy: useUpBy,
                shoppingList: shoppingList,
                shoppingListQuantity: shoppingListQuantity,
            }

            return await groceries.insertOne(groceryItem)

        } catch (e) {
        console.error(`Unable to add item: ${e}`)
        return { error: e }
        }

    }

    // modify existing item
    static async updateItem(itemId, name, area, quantity, unit, useUpBy, shoppingList, shoppingListQuantity) {

        try {
            const updateResponse = await groceries.updateOne(
              { _id: ObjectId(itemId)},
              { $set: { 
                name: name,
                area: area,
                quantity: quantity,
                unit: unit,
                useUpBy: useUpBy,
                shoppingList: shoppingList,
                shoppingListQuantity: shoppingListQuantity,
                } },
            )
      
            return updateResponse
          } catch (e) {
            console.error(`Unable to update item: ${e}`)
            return { error: e }
          }

    }

    // delete grocery item from db
    static async deleteItem(itemId) {

        try {
            const deleteResponse = await groceries.deleteOne({
              _id: ObjectId(itemId),
            })
      
            return deleteResponse
          } catch (e) {
            console.error(`Unable to delete item: ${e}`)
            return { error: e }
          }
    }

    
}