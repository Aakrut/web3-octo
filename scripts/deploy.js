const { ethers } = require("hardhat");

async function main() {
  const contractFactory = await ethers.getContractFactory("BlogApp");
  const contractDeploy = await contractFactory.deploy("Mirror Blog App");
  await contractDeploy.deployed();

  console.log(`Contract Deployed at: ${contractDeploy.address}`);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
