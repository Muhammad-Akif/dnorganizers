class Package {
    constructor(id, name, price, theme, menu, venu) {
        this.id = id //This is a firebase assigned id;
        this.name = name;
        this.price = price;
        this.theme = theme;
        this.menu = menu
        this.venu = venu;
    }
}

export default Package;
