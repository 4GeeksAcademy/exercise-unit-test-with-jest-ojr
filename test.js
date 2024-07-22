const { fromDollarToYen, fromYenToPound, fromEuroToDollar } = require('./app.js');

describe('Currency Conversion', () => {
    test('fromDollarToYen converts Dollar to Yen correctly', () => {
        expect(fromDollarToYen(1)).toBeCloseTo(146.26, 2); // 2 decimal places
        expect(fromDollarToYen(100)).toBeCloseTo(14626.17, 2); // Updated expectation
    });

    test('fromYenToPound converts Yen to Pound correctly', () => {
        expect(fromYenToPound(1)).toBeCloseTo(0.00556, 5);
        expect(fromYenToPound(1000)).toBeCloseTo(5.56, 2);
    });

    test('fromEuroToDollar converts Euro to Dollar correctly', () => {
        expect(fromEuroToDollar(1)).toBeCloseTo(1.07, 2);
        expect(fromEuroToDollar(100)).toBeCloseTo(107, 2);
    });
});
