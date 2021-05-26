import BookedEvents from "../Models/models/bookedEvents";
// import asd from '../Models/models'

const transformIntoBookedEvents = (payload) => {
    const transformData = [];
    const response = payload.object;
    for (let id in response) {
        if (response[id].userEmail != payload.email) continue 
        transformData.push(
            new BookedEvents(
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
                response[id].status,
                response[id].ratings
            )
        )
    }
    return transformData;
}

export default transformIntoBookedEvents;
