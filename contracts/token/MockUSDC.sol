// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract MockUSDC is ERC20 {
    constructor(
        string memory _name,
        string memory _symbol
    ) ERC20(_name, _symbol){}

      function decimals() public pure override returns (uint8) {
        return 6;
    }
  
    /**
     * @notice A method that mints new the sender 100,000 tokens. 
     */
    function mint(
        ) 
        external 
        {
        _mint(msg.sender, 100000 * 10**6);
    }
}