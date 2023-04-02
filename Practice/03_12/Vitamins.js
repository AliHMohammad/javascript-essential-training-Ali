

class Vitamins {
    constructor(
        name,
        brand,
        capsules,
        daySupply,
        expiryDate,
        lidOpen
    ) {
        this.name = name;
        this.brand = brand;
        this.capsules = capsules;
        this.daySupply = daySupply;
        this.expiryDate = expiryDate;
        this.lidOpen = lidOpen;
    }
    newName(name) {
        this.name = name;
    }
    changeLid(lidStatus) {
        this.lidOpen = lidStatus;
    }

}

export default Vitamins