const { ethers } = require("hardhat");

async function checkBalance() {
  const contract = await ethers.getContract("OurToken");
  const balance = await contract.balanceOf(
    "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266"
  );
  const readable = balance.toString();
  console.log(readable);
}

checkBalance()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
