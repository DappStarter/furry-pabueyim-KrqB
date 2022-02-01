require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid process orient venture strike cost mean protect just enter equal gift'; 
let testAccounts = [
"0x915dbb9cb4fbdad09b718e3d86cb26372c07e0a949b74cc92d61ace63520b548",
"0xb4e030bd81d2fe0bedd975b4e3cdea5f2bade961b76da155af533c81558c97c6",
"0x222d4156fc1dedf2bcb3e4609622b6d6f47fd878c808218994cb2d317b8c2195",
"0x889849d8ca3acded2d10755a365716b9a03c44c55f09eca614cb67fa9e04f341",
"0xf78cc68732b2de0e341d768746ca7b99625a7f5f896d63af86916ba5f499615b",
"0x2b7a52e204773d67273cb006fcbf2c4a34c1c050c7b3af6b2d88f07e9411e105",
"0x6175e09270ecd4d1d93a4ab7b29c0eca2851e1dc1b9dbcdc4ff6a490c63f8e9e",
"0xa2caaf6a6924ffe74e843f952cd620a2369cbdc681a2c474934c36e85c20df49",
"0xdaf147e335f4b0a8ea76a2d35379907b4977c6bb94d9b39ea9f066f4ea77dfab",
"0x449ca16ada90a0699b963c913abe4e92ecdb2f047bc5bb0549e828ffb631ccee"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


