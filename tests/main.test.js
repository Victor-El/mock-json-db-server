jest.mock("../sum");
const sum = require("../sum");

sum.mockImplementation(() => 6);

test("Module mock works", () => {
    expect(sum(2, 10)).toEqual(6);
});
