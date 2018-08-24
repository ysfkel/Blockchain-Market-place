

export const getTotalSupply = ({  contract, web3 ,account}) => {
        return new Promise((resolve, reject) => {
         
                 contract.totalSupply.call({from: account}).then((totalSupplyResult) => {
                        console.log('==totalSupplyResult', totalSupplyResult);
                          console.log('==totalSupplyResult', totalSupplyResult.toNumber());
                       resolve(totalSupplyResult.toNumber())
                 })
        })
    
}

export const transferAmountToTokenSaleContract = ({  contract, account, amountToSell, contractAddress}) => {
       console.log('--TRANSFER DETAILS', contract, account, amountToSell, contractAddress)
        return new Promise((resolve, reject) => {
         
                 contract.transfer(contractAddress, amountToSell, {from: account}).then((totalSupplyResult) => {
                       
                       resolve()
                 })
        })
    
}

export const getContractAddress = ({ contract, web3 ,account}) => {
     return new Promise((resolve, reject) => {
         
                 contract.getContractAddress.call().then((result) => {
                        console.log('==totalSupplyResult', result);
                          console.log('==result', result);
                       resolve(result)
                 })
        })
}


export const transferAmount = ({ contract, web3 ,account}) => {
     return new Promise((resolve, reject) => {
         
                 contract.getContractAddress.call().then((result) => {
                        console.log('==totalSupplyResult', result);
                          console.log('==result', result);
                       resolve(result)
                 })
        })
}