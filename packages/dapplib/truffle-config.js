require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const WalletProvider = require('./src/lib/wallet-provider');


let mnemonic = 'kidney entire bright venture street cruise rifle honey inner private furnace gate'; 
let testAccounts = [
"0xf1015e19030d7e5616980ce6347f4bde5c6ad83f01c6dee219388d211b170001",
"0x10722f96285fae9a5e50007e204d8aaa78a14d1e3fc7b817401866f97176b754",
"0xb70035bfc3755e4df9ad7fdfe39da54c4af18963637afe9747508c5e255fac67",
"0x9ab0071371094db6162acb7bb048e3d0ff1033d5a1e315790f931aa35a0b69a3",
"0xd7d7eec45fb0d7ff27b63d1f4d832e35edb2a2586f7171a39cd9f72fe02b15f5",
"0xd421f9a5af2085e4ccaa25f1e39577391a8291f97f00734b359e34686d97e505",
"0xf602632e80daac574f3afac38636102d74d040efeaf8bc7452bc7d2cfda16db8",
"0xdc8f1cdc72e6de711c767b1a505994241fb8b2f4226cd90b897a0ea7a9e7f052",
"0x7ec4712560823f33d6128a156503fb971b377efac73f634a6a6e6cd1612c312e",
"0xa46ed2e9a25666267a1dd660cb459d63718a8ecc04411e505d7361bdeadb22db"
]; 
let devUri = 'https://test.confluxrpc.org/v2';
let host = devUri.replace('http://','').replace('https://','');
let privateKeys = new WalletProvider(mnemonic, 10).privateKeys;

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            network_id: '*',
            host,
            port: 80,
            type: "conflux",
            privateKeys,
            walletProvider: () => new WalletProvider(mnemonic, 10)
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

