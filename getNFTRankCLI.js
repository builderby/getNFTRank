const axios = require("axios");
const { JSDOM } = require("jsdom");
const readline = require("readline");

function extractNftTraitsAndRank(html) {
  const { window } = new JSDOM(html);
  const { document } = window;

  const rankSpan = document.querySelector(
    "span.text-mr-signature-yellow + span"
  );
  const rank = rankSpan ? parseInt(rankSpan.textContent.trim(), 10) : null;

  const traitDivs = document.querySelectorAll(
    "div.text-mr-rarity.font-normal.text-gray-900"
  );
  const traits = {};

  traitDivs.forEach((div) => {
    const traitElement = div.querySelector(".w-7\\/12");
    const percentageElement = div.querySelector(".w-3\\/12.text-right");

    if (traitElement && percentageElement) {
      const traitText = traitElement.getAttribute("title");
      const [trait, value] = traitText.split(": ");

      const percentageText = percentageElement.textContent.trim();

      if (trait && value) {
        traits[trait] = { value, percentage: percentageText };
      }
    }
  });

  const formattedTraits = Object.entries(traits)
    .map(([key, { value, percentage }]) => `${key}: ${value} ${percentage}`)
    .join("\n");

  return { rank, traits: formattedTraits };
}

async function fetchNftData(mintAddress) {
  const baseUrl = "https://moonrank.app/";
  const url = `${baseUrl}${mintAddress}`;

  console.log("🔍 Fetching NFT data from", url);

  try {
    const { data: html } = await axios.get(url);
    console.log("🔗 Data fetched successfully");
    const { rank, traits } = extractNftTraitsAndRank(html);
    return { rank, traits };
  } catch (error) {
    console.error("❌ Error fetching NFT data:", error);
    return { rank: null, traits: "" };
  }
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Please enter the NFT mint address: ", (mintAddress) => {
  fetchNftData(mintAddress)
    .then(({ rank, traits }) => {
      console.log("🎉 NFT data received:");
      console.log(`Rank: ${rank}`);
      console.log(`\nTraits:\n${traits}`);
    })
    .catch((error) => {
      console.error(`❌ Error: ${error}`);
    })
    .finally(() => {
      rl.close();
    });
});
