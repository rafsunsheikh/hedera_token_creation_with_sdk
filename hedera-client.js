require("dotenv").config();
const { Client, AccountId, PrivateKey } = require("@hashgraph/sdk");

const HederaClient = new Client({
    network: { "0.testnet.hedera.com:50211": "0.0.3" },
    operator: {
        account: AccountId.fromString(process.env.ACCOUNT_ID),
        privateKey: PrivateKey.fromStringECDSA(process.env.PRIVATE_KEY)
    }
});
module.exports = HederaClient;