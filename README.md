![Builderby](https://cdn.discordapp.com/attachments/1034314910563323914/1082805122763067412/IMG_06071.png)

# getNFTRank

This script allows you to extract data for a specific Solana NFT from MoonRank. It fetches the HTML for the NFT's page on MoonRank and then uses the JSDOM library to extract the rank and traits of the NFT. The rank and traits are then logged to the console.

## Prerequisites<br><br>

- Node.js v12.0.0 or higher
- npm v6.0.0 or higher<br><br>

## Setup<br><br>

Follow these steps to set up the environment for running this script:<br><br>

- Clone this repository to your local machine:

        git clone https://github.com/builderby/getNFTRank.git

- Change into the repository directory:

        cd getNFTRank

- Install the dependencies:

        npm install

<br><br>

## Usage<br><br>

The script can be ran using the following command, CLI is the bottom one you only need to use one or the other one:

        node getNFTRank.js

        node getNFTRankCLI.js
        
<br><br>You can also specify the mint address of the NFT you want to extract data for by changing the mintAddress variable at the end of the script.<br><br>

## Output<br><br>

The script will log the NFT's rank and traits to the console:

        🎉 NFT data received:
        Rank: [RANK]

        Traits:
        [TRAIT 1]: [VALUE 1] [PERCENTAGE 1]
        [TRAIT 2]: [VALUE 2] [PERCENTAGE 2]
        ...

<br><br>

## Troubleshooting<br><br>

If you encounter an error when running the script, make sure you have followed all the setup steps correctly and that you have the required dependencies installed. If the problem persists, please open an issue on this repository. Also make sure you changed the mint address. that is the most common error.<br><br>

## Buy me a coffee<br><br>

Solana Wallet: MorerMW4X2gUzhVRQCNFZJSkxC7wv7zGZqCNz72jGqs
