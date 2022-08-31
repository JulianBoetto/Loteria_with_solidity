// SPDX-License-Identifier: MIT
pragma solidity ^0.8.1;

/// @title First Smart Contract
/// @author Julian Boetto

contract HelloWorld {
    string public messageState = "Hello World!";

    string public constant MESSAGE_CONSTANT = "Hello constant!";

    address public constant DONATION_ADDRESS = 0x808ee9973ff652b3Bd2Df33A2eF1AE182335f3f6;

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