"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProdReduce = void 0;
const abstractReduce_1 = require("./abstractReduce");
class ProdReduce extends abstractReduce_1.Reduce {
    /**
     * @param self_ to reduce
     * @param result_ result of the operation
     */
    constructor(self_, result_ = 1) {
        super(self_, result_);
        this.self_ = self_;
        this.result_ = result_;
    }
    /**
     * Reduces all elements of a vector in a number which is the product
     * of all of them
     * @returns result
     */
    reduce() {
        let result = 1;
        this.self_.forEach((e) => {
            result *= e;
        });
        return result;
    }
    /**
     * Hook afterReduction
     * @returns if result is equal to 10
     */
    afterReduction() {
        return this.result_ == 10;
    }
}
exports.ProdReduce = ProdReduce;
