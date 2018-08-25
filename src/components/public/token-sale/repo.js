
export const buyTokens =({ tokenAmount, price ,account, tokenSaleContract}) => {

    return new Promise((resolve, reject) => {
              tokenSaleContract
              .buyTokens(tokenAmount, {from:account, value:price, 
              gas: 3000000 })
              .then((result)=>{
                   console.log('...buyTokens complete')
                   resolve();
              })
              .catch((e)=>{
                  
                  reject(e)
              })
     });
}