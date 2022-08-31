// SPDX-License-Identifier: MIT
pragma solidity ^0.8.1;

/// @title First Smart Contract
/// @author Julian Boetto

contract HelloWorld {

    function showMessage() public pure returns (string memory) {
        string memory message = "Hello World!";

        return message;
    }

    function getBlockNumber() public view returns (uint) {
        return block.timestamp;
    }
}