# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)






# Full Stack Ethereum Development

## Dependencies list and usage
- ethers: will be used from the frontEnd to interact with the smart contract
- hardhat, hardhat-waffle, ethereum-waffle, hardhat-ethers: eth tooling


### Initialize the hardhat environment
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
