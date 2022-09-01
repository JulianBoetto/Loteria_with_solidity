const Lottery = artifacts.require("Lottery");

contract("Lottery", function ([accA, accB, accC]) {
    beforeEach(async () => {
        contract = await Lottery.deployed();
    });

    it("Verify owner", async () => {
        const ownerAddress = await contract.OWNER();

        assert(ownerAddress === accA, "Need to be equal")
    });

    it("Can get players", async () => {
        const players = await contract.getPlayers();

        assert(players.length === 0, "Need to be zero")
    });

    it("Can check balance ", async () => {
        const contractAddress = await contract.address;
        const balance = await web3.eth.getBalance(contractAddress);
        const etherBalance = web3.utils.fromWei(balance, "ether");

        assert(etherBalance === "0", "Need to be equal")
    });
})