function Blockchain(){
    this.chain =[];
    this.newtransactions = [];
}
Blockchain.prototype.createNewBlock = function (mynonce,previousBlockHash,myhash){
    const newBlock = {
        index: this.chain.length + 1,
        timestamp: Date.now(),
        transactions : this.newtransactions,
        nonce : mynonce,
        myhash : myhash,
        previousBlockHash : previousBlockHash
    };
    this.newtransactions = [];
    this.chain.push(newBlock);

    return newBlock;
}

module.exports = Blockchain;