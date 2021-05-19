import Package from "../Models/models/package";

const transformIntoPackage = (payload) => {
    const transformData = [];
    const response = payload;
    for (let id in response) {
        transformData.push(
            new Package(id, response[id].name, response[id].price, response[id].theme, response[id].menu, response[id].venu)
        )
    }
    return transformData;
}

export default transformIntoPackage;
