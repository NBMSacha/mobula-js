const ethers = require('ethers');
const axios = require('axios');

module.exports = class Mobula {
    async getData(tokenAddress) {
        const provider = ethers.getDefaultProvider('https://polygon-rpc.com');
        const API_ADDRESS = '0x76edF9562F2Cca3bc36DB2ed58A4adC0b10F1048'
        const apiContract = new ethers.Contract(API_ADDRESS,
            ['function staticData(address token) external view returns(string)'], provider)

        const dataHash = await apiContract.staticData(tokenAddress)
        const r = await axios.get('https://gateway.ipfs.io/ipfs/' + dataHash)
        return r.data
    }
}