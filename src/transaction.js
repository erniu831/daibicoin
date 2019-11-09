/**
 * Transaction
 * @ripient: 收款地址
 * @sender: 付款地址
 * @value: 金额
 */
class Transaction {
    constructor () {
        this.recipient = '';
        this.sender = '';
        this.value = 0;
    }
    generate (rec, sen, val) {
        this.recipient = rec;
        this.sender = sen;
        this.value = val;
        return Object.assign(this)
    }
}

export default Transaction
