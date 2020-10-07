;
;
function getMountains() {
    var mountains = [{ Name: '', Height: 0 }];
    mountains.push({ Name: 'Kilimanjaro', Height: 19341 });
    mountains.push({ Name: 'Everest', Height: 29029 });
    mountains.push({ Name: 'Denali', Height: 20310 });
    var tallestMountain = findTheTallestMountain(mountains);
    console.log("The tallest mountain is Mt. " + ("" + tallestMountain.Name));
}
;
function findTheTallestMountain(mountains) {
    var tallestMountain = { Name: '', Height: 0 };
    for (var _i = 0, mountains_1 = mountains; _i < mountains_1.length; _i++) {
        var m = mountains_1[_i];
        if (m.Height > tallestMountain.Height) {
            tallestMountain = m;
        }
    }
    ;
    return tallestMountain;
}
;
function getProducts() {
    var products = [{ name: '', price: 0 }];
    products.push({ name: 'Mechanical Part', price: 200 });
    products.push({ name: 'Computer Part', price: 129 });
    products.push({ name: 'Bike Part', price: 28 });
    var averagePrice = findAverageProductPrice(products);
    console.log("The average price is: $" + ("" + averagePrice));
}
;
function findAverageProductPrice(products) {
    var total = 0;
    var averagePrice = 0;
    for (var _i = 0, products_1 = products; _i < products_1.length; _i++) {
        var p = products_1[_i];
        total += p.price;
    }
    ;
    averagePrice = total / (products.length - 1);
    return averagePrice;
}
;
function getInventory() {
    var products = [
        { name: 'Motor', price: 10.00 },
        { name: 'LED', price: 1.00 },
        { name: 'Sensor', price: 12.50 }
    ];
    var inventory = [
        { product: products[0], quantity: 10 },
        { product: products[1], quantity: 20 },
        { product: products[2], quantity: 4 }
    ];
    var total = findTotalInventoryPrice(inventory);
    console.log("The total value of inventory is $" + ("" + total));
}
;
function findTotalInventoryPrice(inventory) {
    var total = 0;
    for (var num = 0; num < inventory.length; num++) {
        total += (inventory[num].product.price * inventory[num].quantity);
    }
    ;
    return total;
}
//# sourceMappingURL=app.js.map