class Burger {
    constructor(
        public name: string,
        public price: number,
        public size: string,
        private extraCheese: boolean = false,
        private extraSauce: boolean = false,
        private lettuce: boolean = false,
        private tomoto: boolean = false,
        private sauce: boolean = false
    ) {}

    public getDetails(): string {
        return `Burger: ${this.name},
        Price: ${this.price},
        Size: ${this.size},
        Extra Cheese: ${this.extraCheese},
        Extra Sauce: ${this.extraSauce},
        Lettuce: ${this.lettuce},
        Tomoto: ${this.tomoto},
        Sauce: ${this.sauce}`;
    }
}

class BurgerBuilder {
    private name: string = "";
    private price: number = 0;
    private size: string = "";

    private extraCheese: boolean = false;
    private extraSauce: boolean = false;
    private lettuce: boolean = false;
    private tomoto: boolean = false;
    private sauce: boolean = false;

    public setName(name: string): BurgerBuilder {
        this.name = name;
        return this;
    }

    public setPrice(price: number): BurgerBuilder {
        this.price = price;
        return this;
    }

    public setSize(size: string): BurgerBuilder {
        this.size = size;
        return this;
    }

    public addExtraCheese(): BurgerBuilder {
        this.extraCheese = true;
        return this;
    }

    public addExtraSauce(): BurgerBuilder {
        this.extraSauce = true;
        return this;
    }

    public addLettuce(): BurgerBuilder {
        this.lettuce = true;
        return this;
    }

    public addTomoto(): BurgerBuilder {
        this.tomoto = true;
        return this;
    }

    public addSauce(): BurgerBuilder {
        this.sauce = true;
        return this;
    }

    public build(): Burger {
        if (!this.name || !this.size || this.price <= 0) {
            throw new Error("Name, valid price and size are required");
        }

        return new Burger(
            this.name,
            this.price,
            this.size,
            this.extraCheese,
            this.extraSauce,
            this.lettuce,
            this.tomoto,
            this.sauce
        );
    }
}

const burger = new BurgerBuilder()
    .setName("Cheese Burger")
    .setPrice(5.99)
    .setSize("Medium")
    .addExtraCheese()
    .addLettuce()
    .addTomoto()
    .build();

console.log(burger.getDetails());