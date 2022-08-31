const Lottery = artifacts.require("Lottery");

contract("Lottery", function ([accA, accB, accC]) {
    beforeEach(async () => {
        contract = await Lottery.deployed();
    });

    it("Verify owner", async () => {
        const ownerAddress = await contract.OWNER();

        assert(ownerAddress == accA, "Need to be equal")
    })
})