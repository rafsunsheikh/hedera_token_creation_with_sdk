require("dotenv").config();
const { Client, AccountId, PrivateKey, TokenCreateTransaction, TokenAssociateTransaction, TransferTransaction, AccountBalanceQuery } = require("@hashgraph/sdk");

async function main(){
    const operatorKey = PrivateKey.fromStringECDSA(process.env.PRIVATE_KEY); 
    const operatorId = AccountId.fromString(process.env.ACCOUNT_ID);

    let client = Client.forTestnet();
    client.setOperator(operatorId, operatorKey);

    // Transfer Tokens from Treasury to Account 2 

    // Grab 2nd account from .env file
    const Account2Key = PrivateKey.fromStringECDSA(process.env.PRIVATE_KEY_2); 
    const  Account2Id = AccountId.fromString(process.env.ACCOUNT_ID_2);

    tokenId = "0.0.5148585"; // Change the token ID here
 
    var transferTx = await new TransferTransaction()
        .addTokenTransfer(tokenId, operatorId, -100)
        .addTokenTransfer(tokenId, Account2Id, 100)
        .execute(client);

    var transferReceipt = await transferTx.getReceipt(client);
    console.log("Transfer Tx Receipt:", transferReceipt);
}
main();