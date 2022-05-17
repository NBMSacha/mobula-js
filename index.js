const ethers = require('ethers');
const axios = require('axios');

module.exports = class Mobula {
    async getMetaData(tokenAddress) {
        const provider = ethers.getDefaultProvider('https://polygon-rpc.com');
        const API_ADDRESS = '0x4f93eed1fC945b5bC3FaAEc5C057DFf27dB31DBA'
        const apiContract = new ethers.Contract(API_ADDRESS,
            ['function staticData(address token) external view returns(string)'], provider)

        const dataHash = await apiContract.staticData(tokenAddress)

        try {
            const r = await axios.get('https://gateway.ipfs.io/ipfs/' + dataHash)
            return r.data
        } catch (err) {
            return {}
        }
    }
}
