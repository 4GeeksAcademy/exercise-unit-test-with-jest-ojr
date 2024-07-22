// Currency conversion values
let oneEuroIs = {
    "JPY": 156.5, // Japan Yen
    "USD": 1.07, // US Dollar
    "GBP": 0.87, // British Pound
};

// Function to convert Dollar to Yen
const fromDollarToYen = (dollarAmount) => {
    const euroAmount = dollarAmount / oneEuroIs.USD;
    return euroAmount * oneEuroIs.JPY;
};

// Function to convert Yen to Pound
const fromYenToPound = (yenAmount) => {
    const euroAmount = yenAmount / oneEuroIs.JPY;
    return euroAmount * oneEuroIs.GBP;
};

// Function to convert Euro to Dollar
const fromEuroToDollar = (euroAmount) => {
    return euroAmount * oneEuroIs.USD;
};

// Export the functions for testing
module.exports = { fromDollarToYen, fromYenToPound, fromEuroToDollar };
