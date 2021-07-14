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

}