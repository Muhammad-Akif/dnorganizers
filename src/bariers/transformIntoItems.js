import Item from "../Models/models/item";

const transformIntoItems = (payload) => {
    const transformData = [];
    const response = payload;
    for (let type in response) { //type contains theme, menu and venu
        const itemsData = []
        for (let id in response[type]) {
            itemsData.push(
                new Item(id, response[type][id].name, response[type][id].price)
            )
        }
        transformData.push(
            {[type]:  itemsData}
        )
    }
    return transformData;//[{menu: [{id, name, price}, {}]}]
}

export default transformIntoItems;
