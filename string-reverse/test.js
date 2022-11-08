const stringReverse = require("./index");

test("stringReverse function exists", () => {
  expect(stringReverse).toBeDefined();
});

test("String reverses", () => {
  expect(stringReverse("abcd")).toEqual("dcba");
});

test("String reverses with uppercase", () => {
  expect(stringReverse("AbCd")).toEqual("dCbA");
});
