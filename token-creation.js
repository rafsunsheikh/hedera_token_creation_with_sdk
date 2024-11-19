require("dotenv").config();
const { Client, AccountId, PrivateKey, TokenCreateTransaction, TokenAssociateTransaction, TransferTransaction, AccountBalanceQuery } = require("@hashgraph/sdk");

async function main(){
    const operatorKey = PrivateKey.fromStringECDSA(process.env.PRIVATE_KEY); 
    const operatorId = AccountId.fromString(process.env.ACCOUNT_ID);

    let client = Client.forTestnet();
    client.setOperator(operatorId, operatorKey);

    // Create Stablecoin Token

    var createTokenTx = await new TokenCreateTransaction()
        .setTokenName("BD Token")
        .setTokenSymbol("BDT")
        .setDecimals(0)
        .setInitialSupply(1000)
        .setTreasuryAccountId(operatorId)
        .execute(client);

    var createTokenReceipt = await createTokenTx.getReceipt(client);
    var tokenId = createTokenReceipt.tokenId;

    console.log("New Token ID:", tokenId.toString());

}
main();