// SPDX-License-Identifier: MIT
pragma solidity ^0.8.1;

/// @title First Smart Contract
/// @author Julian Boetto

contract HelloWorld {
    string public messageState = "Hello World!";

    string public constant MESSAGE_CONSTANT = "Hello constant!";

    address public constant DONATION_ADDRESS = 0x4E00087197F07094314a6B6FfD54D35b2C2f6074;

    address public immutable OWNER;

    constructor() {
        OWNER = msg.sender;
    }   
    
    function showMessage() public pure returns (string memory) {
        string memory message = "Hello Solidity World!";

        return message;
    }

    function getBlockNumber() public view returns (uint) {
        return block.timestamp;
    }
}