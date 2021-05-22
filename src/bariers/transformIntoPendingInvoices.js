import PendingInvoices from "../Models/models/pendingInvoices";

const transformIntoPendingInvoices = (payload) => {
    const transformData = [];
    const response = payload.object;
    for (let id in response) {
        if (response[id].userEmail != payload.email) continue 
        transformData.push(
            new PendingInvoices(
                id,
                response[id].price,
                response[id].theme,
                response[id].menu,
                response[id].venu,
                response[id].eventName,
                response[id].isPackage,
                response[id].serPackName,
                response[id].serPackId,
                response[id].userEmail,
                response[id].bookDate,
                response[id].occuredDate,
                response[id].designerName,
                response[id].noOfPeople,
                response[id].status
            )
        )
    }
    return transformData;
}

export default transformIntoPendingInvoices;
