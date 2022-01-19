import { ThirdwebSDK } from "@3rdweb/sdk";
import { ethers } from "ethers";
require('dotenv').config()

const sdk = new ThirdwebSDK(
    new ethers.Wallet(
        process.env.PRIVATE_KEY as string,
        ethers.getDefaultProvider("https://")
    )
)