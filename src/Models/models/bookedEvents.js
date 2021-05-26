class BookedEvents {
    constructor(id, price, theme, menu, venu, eventName, isPackage, serPackName, serPackId, userEmail, bookDate, occuredDate, designerName, noOfPeople, status, ratings) {
        this.id = id //this is /BookedEvents generated id by firebase
        this.price = price;
        this.theme = theme;
        this.menu = menu;
        this.venu = venu;
        this.eventName = eventName;
        this.isPackage = isPackage;
        this.serPackName = serPackName;
        this.serPackId = serPackId; //this is a firebase generated id
        this.userEmail = userEmail; //this is how we know who own this
        this.bookDate = bookDate; //when user click the book now button on app
        this.occuredDate = occuredDate; //When user want this function to be held
        this.designerName = designerName;
        this.noOfPeople = noOfPeople;
        this.status = status; //what's the status of it
        this.ratings = ratings; //{}
    }
}

export default BookedEvents;
