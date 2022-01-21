let web3 = require('@solana/web3.js')
let splToken = require('@solana/spl-token')

    (async () => {
        let connection = new web3.Connection(
            "QUICKNODE_URL_HERE",
            'confirmed'
        )
    })

let fromWallet = web3.Keypair.generate()
let fromAirdropSignature = await connection.requestAirdrop(
    fromWallet.publicKey,
    web3.LAMPORTS_PER_SOL
)

await connection.confirmTransaction(fromAirdropSignature)

let mint = await splToken.Token.createMint(
    connection,
    fromWallet,
    fromWallet.publicKey,
    null,
    9,
    splToken.TOKEN_PROGRAM_ID
)

let fromTokenAccount = await mint.getOrCreateAssociatedAccountInfo(
    fromWallet.publicKey,
);

let toWallet = web3.Keypair.generate()

let toTokenAccount = await mint.getOrCreateAssociatedAccountInfo(
    toWallet.publicKey,
);

//https://www.quicknode.com/guides/web3-sdks/how-to-mint-an-nft-on-solana
//With our first two steps complete, we should be ready to move onto step 3. The time to mint the NFT and send it to someone has come!