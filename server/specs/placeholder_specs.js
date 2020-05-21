const assert = require("assert");
const Placeholder = require("../placeholder.js");

describe("Placeholder", function () {
  let placeholder;

  beforeEach(function () {
    placeholder = new Placeholder();
  });

  it("should [placeholder goal]", function () {
    const actual = "";
    assert.strictEqual(actual, "");
  });
});
