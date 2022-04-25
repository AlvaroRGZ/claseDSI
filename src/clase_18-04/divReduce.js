"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DivReduce = void 0;
const abstractReduce_1 = require("./abstractReduce");
class DivReduce extends abstractReduce_1.Reduce {
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
     * Reduces all elements of a vector in a number which is the division
     * of all of them
     * @returns result
     */
    reduce() {
        let result = 1;
        this.self_.forEach((e) => {
            result /= e;
        });
        return result;
    }
    /**
     * Hook afterInitialization
     * @returns if result is greater than 10
     */
    afterInitialization() {
        return this.result_ > 10;
    }
}
exports.DivReduce = DivReduce;
