// SPDX-License-Identifier: MIT
pragma solidity >=0.5.0 <0.8.0;

/// @title First Smart Contract
/// @author Julian Boetto

contract HelloWorld {
    string public message = "Hello World!";

    function showMessage() public view returns (string memory) {
        return message;
    }
}