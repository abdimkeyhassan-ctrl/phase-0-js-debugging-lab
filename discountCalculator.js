// function calculateDiscountedPrice(quantity, pricePerItem) {
//     let totalPrice = 0;
//     debugger
//     for (let i = 1; i < quantity; i++) {
//         totalPrice += pricePerItem;
//     }

//     if (quantity >= 10) {
//         totalPrice *= 0.9;
//     }

//     return totalPrice;
// }
// function calculateDiscountedPrice(quantity, pricePerItem) {
//     let totalPrice = 0;

//     debugger; // START

//     for (let i = 1; i < quantity; i++) {
//         totalPrice += pricePerItem;
//     }

//     debugger; // AFTER LOOP

//     if (quantity >= 10) {
//         totalPrice *= 0.9;
//     }

//     debugger; // AFTER DISCOUNT

//     return totalPrice;
// } 
// for (let i = 0; i < quantity; i++) {
//     totalPrice += pricePerItem;
// }
function calculateDiscountedPrice(quantity, pricePerItem) {
    let totalPrice = 0;

    debugger;

    for (let i = 0; i < quantity; i++) {
        totalPrice += pricePerItem;
    }

    debugger;

    if (quantity >= 10) {
        totalPrice *= 0.9;
    }

    debugger;

    return totalPrice;
}

module.exports = calculateDiscountedPrice;