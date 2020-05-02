const _ = require("./lodash.js");

describe("lodash  test case", () => {
    test("chunk function", () => {
        const arr = [3, 4, 5, 6, 6, 7, 8, 10];
        expect(_.chunck(arr, 3)).toEqual([[3, 4, 5], [6, 6, 7], [8, 10]]);
    });

    test("compact function", () => {
        expect(_.compact([0, 1, false, 2, '', 3])).toEqual([1, 2, 3]);
    });
});