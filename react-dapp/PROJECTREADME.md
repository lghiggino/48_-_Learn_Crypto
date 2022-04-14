# Full Stack Ethereum Development

## Just go:
```
npx hardhat node
```

```
npx hardhat run scripts/deploy.js --network localhost

```
Starting the front end:
```
yarn start 
```

continuar aqui: https://youtu.be/a0osIaAOFSE?t=1887

## Dependencies list and usage
- ethers: will be used from the frontEnd to interact with the smart contract
- hardhat, hardhat-waffle, ethereum-waffle, hardhat-ethers: eth tooling


## Initialize the hardhat environment
- npx hardhat
-- create sample project
-- default root
-- yes gitignore
-- ls -> will contracts folder and hardhat.config.js

### hardhat.config.js
#### paths to artifacts
when we compile our code it will generate machine readable code called ABIs and aditional artifacts that should be readable in our react app. Therefore we set the path to artifacts at module.exports. Now when we run npx hardhat compile it will be ready to be interactable from the frontend
```
paths: {
    artifacts: './src/artifacts',
  },
```

#### local network config
setting the hardhat network (local) to development
```
networks: {
    hardhat: {
      chainId: 1337
    }
  }
```

### Greeter.sol
When we deploy this contract we need to pass a value to greeting as part of the initialization.
On the frontEnd we will be setting this string
But when we deploy it, and need to update it (setGreeting) we will do it via a script in our dev env.
- functions:
-- greet() public view
returns the greeing. 
public: means it can be read from outside the smart contract
view: means we are read-only from the blockchain, we are not modifying state

-- setGreeting()
updates the value of greeting to the value that enters as an argument
this function, that will change the value stored in the block chain will only be executed upon paying gas fee

### sample-script.js -> deploy.js
This is what will deploy our contract when we want to do so.
line 17: we get a reference to the contract we want to deploy
line18 : we deploy passing the constructor text("Hello, Hardhat!")
then await the deployment
line22: the address we will be deploying to

## Compiling the smart contract
```
npx hardhat compile
```
#### src/artifacts/contracts/Greeter.json
the abi[] will be imported into the frontEnd.


## Starting the local blockchain node
```
npx hardhat node
```
will create a local node and list 20 real open public accounts

On a new terminal:

```
npx hardhat run scripts/deploy.js --network localhost

```
will return the chain address of the deployment, and logs on the network terminale

## Installing MetaMask and create a metamask wallet
Change the network to localhost
Then import the private key from account 0 into MM:
Account #0: 0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266 (10000 ETH)
Private Key: 0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80

## Writing the frontEnd code
### yarn start 
Will start the react front End application, then we can open up the src/app.js
#### app.js
import { useState } from 'react';
import { ethers } from 'hardhat';

## Deploying a live test network

## Creating a Token Contract

## Creating the Token front end 

## ERC20 Tokens

## Remix IDE

## Conclusion
