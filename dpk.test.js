const { deterministicPartitionKey } = require("./dpk");
const { verifyHash } = require("./__test-helpers__");

describe("deterministicPartitionKey", () => {
  it("Returns the literal '0' when given no input", () => {
    const trivialKey = deterministicPartitionKey();
    expect(trivialKey).toBe("0");
  });

  it("Returns the literal '0' when input is an empty string", () => {
    const trivialKey = deterministicPartitionKey("");
    expect(trivialKey).toBe("0");
  });

  it("Returns the value of the inputted object property if the object has 'partitionKey'", () => {
    const trivialKey = deterministicPartitionKey({ partitionKey: 15 });
    expect(trivialKey).toBe(15);
  });

  it("When inputted object has no 'partitionKey', Returns 'true' if trivialKey value is hashed", () => {
    const trivialKey = deterministicPartitionKey({ partitionKey: null });
    const isVerified = verifyHash(trivialKey);
    expect(isVerified).toBe(true);
  });
});
