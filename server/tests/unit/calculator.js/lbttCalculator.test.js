const { lbttCalculator } = require("../../../lbttCalculator");

test("returns correct lbtt rate for properties valued less than £145,000", () => {
  expect(lbttCalculator(145000)).toBe(0);
});

test("returns correct lbtt rate for properties valued between £145,000.01 and £250,000.00", () => {
  expect(lbttCalculator(250000)).toBe(5000);
});

test("returns correct lbtt rate for properties valued between £250,000.01 and £325,000.00", () => {
  expect(lbttCalculator(325000)).toBe(16250);
});

test("returns correct lbtt rate for properties valued between £325,000.01 and £750,000.00", () => {
  expect(lbttCalculator(750000)).toBe(75000);
});

test("returns correct lbtt rate for properties valued above £750,000.00", () => {
  expect(lbttCalculator(750001)).toBe(90000.12);
});

test("throws error if input is not provided", () => {
  expect(() => lbttCalculator()).toThrow("Please provide a property price.");
});

test("throws error if input is not of type number", () => {
  expect(() => {
    lbttCalculator("hello");
  }).toThrowError("Please provide a property price of type number.");
});
