pragma solidity ^0.4.18;
import "./Ownerble.sol";
import "./VendorManager.sol";
import "./AdminUserManager.sol";

contract UserManager is Ownerble, AdminUserManager, VendorManager {
    
    
    function getUserRole() public view returns(uint) {
        
        if(vendors[msg.sender].isVendorOrApplicant == true) {
            return uint(AppRole(vendors[msg.sender].role));
        }
        else if(adminstratorAccounts[msg.sender].isAdmin == true) {
             return uint(AppRole(adminstratorAccounts[msg.sender].role));
        }else {
            return uint(AppRole.Customer);
        }
    }
    
    
}