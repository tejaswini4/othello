const Factory = artifacts.require("othellofactory");
const EMPTY = "0";
const BLACK = "1";
const WHITE = "3";


// function convertToNumber(array) {
//     // Converts from BN.js bignum into javascript number
//     for (var i = 0; i < array.length; i++) {
//         array[i] = array[i].toNumber();
//     }
//     return array
// }
//
// // returns 2D array grouped into groups of size
// function unflatten(array, size) {
//     const newArray = [];
//     while (array.length > 0) {
//         newArray.push(array.splice(0, size));
//     }
//     return newArray
// }

contract("Factory", async accounts => {
    let [alice, bob] = accounts;
    let factory;
    it("should create a new game when two players are there", async () => {
        factory = await Factory.deployed();
        await factory.createNewGame("alice", {from: alice});
        const result= await factory.createNewGame("bob", {from: bob});
        // console.log(result);
        assert.equal(result.logs[0].event, "NewGame");
        assert.equal(result.logs[0].args[0],bob);
        assert.equal(result.logs[0].args[1],alice);
    });
    it("getMyColor is working fine", async () => {
        factory = await Factory.deployed();
        await factory.createNewGame("alice", {from: alice});
        await factory.createNewGame("bob", {from: bob});
        const bobColor= await factory.getMyColor({from:bob});
        const aliceColor= await factory.getMyColor({from:alice});
        console.log(aliceColor);
        assert.equal(aliceColor,"WHITE");
        assert.equal(bobColor,"BLACK");
    });
})