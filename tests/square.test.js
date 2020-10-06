const square = require("../square");

function Student(name, age, level) {
    this.name = name;
    this.age = age;
    this.level = level;
}

function fling() {
    throw new Error("fling");
}

test("Test square function", () => {
    expect(square(8)).toBe(64);
});

test("Try exception", () => {
    expect(fling).toThrow();
});


test("Test Mock Func", () => {
    const arr = [];
    const mockedFunc = jest.fn(e => e%2 == 0);
    for (let i = 0; i <= 10; i++) {
        arr.push(i);
    }

    const arr2 = arr.filter(mockedFunc);
    expect(arr2.length).toBeLessThan(arr.length);

})
