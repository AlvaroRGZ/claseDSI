"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubReduce = void 0;
const abstractReduce_1 = require("./abstractReduce");
class SubReduce extends abstractReduce_1.Reduce {
    /**
     * @param self_ to reduce
     * @param result_ result of the operation
     */
    constructor(self_, result_ = 0) {
        super(self_, result_);
        this.self_ = self_;
        this.result_ = result_;
    }
    /**
     * Reduces all elements of a vector in a number which is the diference
     * of all of them
     * @returns result
     */
    reduce() {
        let result = 0;
        this.self_.forEach((e) => {
            result -= e;
        });
        return result;
    }
    /**
     * Hook afterReduction
     * @returns if result is lower than 10
     */
    afterReduction() {
        return this.result_ < 10;
    }
}
exports.SubReduce = SubReduce;
