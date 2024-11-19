require("dotenv").config();
const { Client, AccountId, PrivateKey, TokenCreateTransaction, TokenAssociateTransaction, TransferTransaction, AccountBalanceQuery } = require("@hashgraph/sdk");

async function main(){
    const operatorKey = PrivateKey.fromStringECDSA(process.env.PRIVATE_KEY); 
    const operatorId = AccountId.fromString(process.env.ACCOUNT_ID);

    let client = Client.forTestnet();
    client.setOperator(operatorId, operatorKey);

    // Grab 2nd account from .env file
    const Account2Key = PrivateKey.fromStringECDSA(process.env.PRIVATE_KEY_2); 
    const  Account2Id = AccountId.fromString(process.env.ACCOUNT_ID_2);

    tokenId = "0.0.5148585"; // Change the token ID here
 
    var accountbalance = await new AccountBalanceQuery()
        .setAccountId(operatorId)
        .execute(client);
    console.log("Operator Account Balance:", accountbalance.tokens.toString());

    var account2balance = await new AccountBalanceQuery()
        .setAccountId(Account2Id)
        .execute(client);
    console.log("Account 2 Balance:", account2balance.tokens.toString());
}
main();