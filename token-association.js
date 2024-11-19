require("dotenv").config();
const { Client, AccountId, PrivateKey, TokenCreateTransaction, TokenAssociateTransaction, TransferTransaction, AccountBalanceQuery } = require("@hashgraph/sdk");

async function main(){
    const operatorKey = PrivateKey.fromStringECDSA(process.env.PRIVATE_KEY); 
    const operatorId = AccountId.fromString(process.env.ACCOUNT_ID);

    let client = Client.forTestnet();
    client.setOperator(operatorId, operatorKey);

    // Associate a new account with the token 

    // Grab 2nd account from .env file
    const Account2Key = PrivateKey.fromStringECDSA(process.env.PRIVATE_KEY_2); 
    const  Account2Id = AccountId.fromString(process.env.ACCOUNT_ID_2);

    tokenId = "0.0.5148585"; // Change the token ID here

    // Associate new account with the token 
    var associateTx = await new TokenAssociateTransaction()
        .setAccountId(Account2Id)
        .setTokenIds([tokenId])
        .freezeWith(client)
        .sign(Account2Key);

    var submitAssociateTx = await associateTx.execute(client);
    var associateReceipt = await submitAssociateTx.getReceipt(client);

    console.log("Associated Tx Receipt:", associateReceipt);

}
main();