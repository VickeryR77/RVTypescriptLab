interface Mountain {
    Name: string,
    Height: number
};

interface Product {
    name: string,
    price: number
};

interface InventoryItem {
    product: Product,
    quantity: number
}

function getMountains() {
    let mountains: Mountain[] = [{ Name: '', Height: 0 }];

    mountains.push({ Name: 'Kilimanjaro', Height: 19341 });
    mountains.push({ Name: 'Everest', Height: 29029 });
    mountains.push({ Name: 'Denali', Height: 20310 });
        
    var tallestMountain = findTheTallestMountain(mountains);
    console.log("The tallest mountain is Mt. "+`${ tallestMountain.Name }`);
};

function findTheTallestMountain(mountains: Mountain[]) {

    let tallestMountain: Mountain = {Name:'',Height:0};

    for (let m of mountains) {
        if (m.Height > tallestMountain.Height) {
            tallestMountain = m;
        }
    };
    return tallestMountain;
};

function getProducts() {
    let products: Product[] = [{ name: '', price: 0 }];

    products.push({ name: 'Mechanical Part', price: 200});
    products.push({ name: 'Computer Part', price: 129 });
    products.push({ name: 'Bike Part', price: 28 });

    var averagePrice = findAverageProductPrice(products);

    console.log("The average price is: $"+`${ averagePrice }`);
};

function findAverageProductPrice(products: Product[]) {

    let total = 0;
    let averagePrice = 0;

    for (let p of products) {
        total += p.price;
    };

    averagePrice = total / (products.length - 1);
    return averagePrice;
};

function getInventory() {

    let products: Product[] = [
        { name: 'Motor', price: 10.00 },
        { name: 'LED', price: 1.00 },
        { name: 'Sensor', price: 12.50 }
    ];

    let inventory: InventoryItem[] = [
        { product: products[0], quantity: 10 },
        { product: products[1], quantity: 20 },
        { product: products[2], quantity: 4 }
    ];

    var total = findTotalInventoryPrice(inventory);
    console.log("The total value of inventory is $"+`${ total }`);
};

function findTotalInventoryPrice(inventory: InventoryItem[]) {

    var total = 0;

    for (let num = 0; num < inventory.length; num++) {
        total += (inventory[num].product.price * inventory[num].quantity);
    };

    return total;
}