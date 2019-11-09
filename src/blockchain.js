import Block from "./block";
import Transaction from "./transaction";
import { BigNumber } from "bignumber"
class Blockchain{
    constructor() {
        this.genesisChain = this.createGenesisBlock(0, [], 0);
        this.chain = [];
        this.difficulty = 4;
        this.target = 2 ** (256 - this.difficulty)
        this.transactionPool = []
    }
    createGenesisBlock(index, timestamp, data, previousHash = '') {
        return new Block(index, timestamp, data, previousHash);
    }
    submitTransaction(send, rec, val) {
        this.transactionPool.push(Transaction.generate(send, rec, val))
    }
    getLatestBlock() {
        return this.chain[this.chain.length - 1];
    }
    // addBlock(newBlock) {
    //     newBlock.previousHash = this.getLatestBlock().hash;
    //     newBlock.mineBlock(this.difficulty);
    //     this.chain.push(newBlock);
    // }
    isPowVaild(pow) {
        try {
            if (!pow.startswith('0x')) {
                pow = '0x' + pow
            }
            return new BigNumber
        }
    }
    isChainValid() {
        for (let i = 1; i < this.chain.length; i++){
            const currentBlock = this.chain[i];
            const previousBlock = this.chain[i - 1];
            if (currentBlock.hash !== currentBlock.calculateHash()) {
                return false;
            }
            if (currentBlock.previousHash !== previousBlock.hash) {
                return false;
            }
        }
        return true;
    }
}
export default Blockchain
