class Package {
    constructor(id, name, price, theme, menu, venu, occuredDate, noOfPeople) {
        this.id = id //This is a firebase assigned id;
        this.name = name;
        this.price = price;
        this.theme = theme;
        this.menu = menu; //[{id, name, price}, ....]
        this.venu = venu; //[{id, name, price}, ....]
        this.occuredDate = occuredDate;
        this.noOfPeople = noOfPeople;
    }
}

export default Package;
