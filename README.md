## Hedera Stablecoin Token Creation with SDK

### Install SDK with `npm`

Initialize npm:
`npm init`
Use Default values in the project details

Install sdk:
`npm i @hashgraph/sdk`

install dotenv:
`npm i dotenv`

Check in the package.json file for:

```
"dependencies": {
    "@hashgraph/sdk": "^2.53.0",
    "dotenv": "^16.4.5"
}
```

Create .env file with the Hedera Testnet account Details:

```
ACCOUNT_ID = ""
PRIVATE_KEY = ""

ACCOUNT_ID_2 = ""
PRIVATE_KEY_2 = ""
```

Run each file with:
`node <filename>`

Sequence of File Execution:

1. token-creation.js
2. token-association.js
3. token-transfer.js
4. token-balance-check.js
