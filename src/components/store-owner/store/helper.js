import { getAccount, getContract, getWeb3 } from '../../../services/app.service';
import * as styles from './styles';

export const getUserStoreCount =(contract,account) => {

        return new Promise((resolve, reject) => {
              contract.getUserStoreCount.call({from:account})
              .then((result)=>{

                  resolve(result.toNumber())
              })
              .catch((e)=>{
                  console.log('--error', e)
                  reject(e)
              })
        });
}


export const getStores = ({contract, web3 },account) => {
  
        return new Promise((resolve, reject) => {
            getUserStoreCount(contract,account)
            .then(countResult => {
                const count = countResult;
                let stores = [];
                        
                    for(let i=0; i<count; i++) {

                        contract.getStorePrivate(i, {from:account}).then((storeResult)=>{
                       
                            const name = web3.toAscii(storeResult[0]);
                            const description = web3.toAscii(storeResult[1]);
                            const revenue =web3.fromWei(storeResult[2].toNumber());
                            stores.push({
                                name,
                                description,
                                revenue
                            })
                        
                            if ( i=== (count-1)) {
                                resolve(stores);
                            }
                        })
                       
                    }
                  
            })
        })
}

export const getStore = ({contract, web3 ,account, storeId}) => {
        return new Promise((resolve, reject) => {
           
        contract.getStorePrivate.call(storeId, {from:account}).then((storeResult)=>{
            const name = web3.toAscii(storeResult[0]);
            const description = web3.toAscii(storeResult[1]);
            resolve({name, description});
        })
    });
}

