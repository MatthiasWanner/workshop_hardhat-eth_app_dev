import { ethers } from "hardhat";

async function main() {
  const signer = await ethers.getSigner(
    "0x8626f6940E2eb28930eFb4CeF49B2d1F2C9C1199"
  );
  const DCWP = await ethers.getContractFactory("DCWorkshop", signer);
  const dcworkshop = await DCWP.deploy(ethers.utils.parseUnits("1000000", 18));

  await dcworkshop.deployed();

  console.log("DCWorkshop Token deployed to:", dcworkshop.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
