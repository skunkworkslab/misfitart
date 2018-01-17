var ConvertLib = artifacts.require("./ConvertLib.sol");
var DigitalArtCollectible = artifacts.require("./DigitalArtCollectible.sol");
module.exports = function(deployer) {
  deployer.deploy(ConvertLib);
  deployer.link(ConvertLib, DigitalArtCollectible);
  deployer.deploy(DigitalArtCollectible);
};
