class Package {
    constructor(id,designerName, name, price, theme, menu, venu, occuredDate, noOfPeople) {
        this.id = id //This is a firebase assigned id;
        this.designerName = designerName;
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
