const HelloWorld = artifacts.require("HelloWorld");

contract('HelloWorld', function(accounts) {
  beforeEach(async () => {
    contract = await HelloWorld.new();
  });

  it.skip("need show our message", async () => {
    const res = await contract.showMessage();

    assert(res === "Hello Solidity World!");
  });
});
