import * as helper from './helper';


export const getProductsIds =({storeIndex, accountIndex, account, contract}) => {

    return new Promise((resolve, reject) => {
          contract.getProductsIdsCustomer.call(accountIndex, storeIndex,{from:account})
          .then((result)=>{
           
              const ids = result.map(i=>i.toNumber());
             
             resolve(ids)
          })
          .catch((e)=>{
              console.log('--error', e)
              reject(e)
          })
    });
}


export const getProducts =({storeIndex, accountIndex, account, contract}) => {
    return new Promise((resolve, reject) => {
        getProductsIds({storeIndex, accountIndex, account, web3, contract}).then((productIds) => {
       
             const promise  = productIds.map((productId) => {
            
                   return contract.getProductCustomer.call(accountIndex, storeIndex, productId, {from: account});
             });
             Promise.all(promise).then((result) => {
                 if(result && result.length > 0) {
                         const products = result.map((productResult) => {
                               return helper.transformProduct({productResult, web3});
                         });
                    
                         resolve(products);
                   
                 }
                
             }).catch(function(e) {
                  console.log('--error  fetching products', e)
             })
        })
     });
}

export const getProduct = ({ vendorAccountId, contract, web3 ,account, storeId, productId}) => {
        return new Promise((resolve, reject) => {
         
                 contract.getProductCustomer.call(vendorAccountId,storeId, productId, {from: account}).then((productResult) => {
                       const product = helper.transformProduct({productResult, web3});
                       resolve(product)
                 })
        })
    
}
//address vendorAccount, uint storeIndex, uint productId, uint productQuantity
export const addItemToCart = ({vendor,  storeIndex,  productId, purchasedQuantity  , account, contract}) => {
    return new Promise((resolve, reject) => {
        console.log(vendor, storeIndex, productId, purchasedQuantity)
        contract.addItemToCart(vendor, storeIndex, productId, purchasedQuantity,  {from: account, gas: 3000000}).then((reesult) => {
              resolve();
        })
    });
}

