module.exports = function(deployer) {
    deployer.deploy(usingOraclize);
    deployer.deploy(SoccerBet);
    deployer.autolink();
};
