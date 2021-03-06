import './App.css';
import { useState } from 'react';
import { ethers } from 'ethers'
import Greeter from './artifacts/contracts/Greeter.sol/Greeter.json'
// import Token from './artifacts/contracts/Token.sol/Token.json'

const greeterAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3"
// const tokenAddress = "0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512"

function App() {
  const [greeting, setGreetingValue] = useState('')
  const [netWorkData, setNetworkData] = useState('')

  async function requestAccount() {
    await window.ethereum.request({ method: 'eth_requestAccounts' });
  }

  async function fetchGreeting() {
    if (typeof window.ethereum !== 'undefined') {
      const provider = new ethers.providers.Web3Provider(window.ethereum)
      console.log({ provider })
      const contract = new ethers.Contract(greeterAddress, Greeter.abi, provider)
      // const contract = await ethers.getContractFactory("Greeter");

      try {
        console.log("entrou no try de fetchGreeting")
        const data = await contract.greet()
        setNetworkData(data)
        console.log('data: ', data)
      } catch (err) {
        console.log("Error: ", err)
      }
    }
  }

  async function setGreeting() {
    if (!greeting) return
    if (typeof window.ethereum !== 'undefined') {
      await requestAccount()
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      console.log({ provider })
      const signer = provider.getSigner()
      const contract = new ethers.Contract(greeterAddress, Greeter.abi, signer)
      const transaction = await contract.setGreeting(greeting)
      await transaction.wait()
      setGreetingValue('')
      fetchGreeting()
    }
  }


  return (
    <div className="App">
      <header className="App-header">
        <p>Current greeting: {netWorkData}</p>
        <button onClick={fetchGreeting}>Fetch Greeting</button>
        <input
          onChange={e => setGreetingValue(e.target.value)}
          placeholder="Set greeting"
          value={greeting}
        />
        <button onClick={setGreeting}>Set Greeting</button>

      </header>
    </div>
  );
}

export default App;
