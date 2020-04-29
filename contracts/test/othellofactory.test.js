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
    it("should not be able to create a new game when there is only player in the blockchain", async () => {
        factory = await Factory.deployed();
        result = factory.createNewGame("alice", {from: alice});
        assert.equal(result, false);
    });
    // it("can be queried with getTiles", async () => {
    //     correctBoard = [
    //         [0, 0, 0, 0, 0, 0, 0, 0],
    //         [0, 0, 0, 0, 0, 0, 0, 0],
    //         [0, 0, 0, 0, 0, 0, 0, 0],
    //         [0, 0, 0, 3, 1, 0, 0, 0],
    //         [0, 0, 0, 1, 3, 0, 0, 0],
    //         [0, 0, 0, 0, 0, 0, 0, 0],
    //         [0, 0, 0, 0, 0, 0, 0, 0],
    //         [0, 0, 0, 0, 0, 0, 0, 0],
    //     ];
    //     board = await Board.deployed();
    //     // console.log(await board.getTiles());
    //     gameState = unflatten(convertToNumber(await board.getTiles()), 8);
    //     assert.deepEqual(gameState, correctBoard, "initial game state is incorrect");
    // });
}