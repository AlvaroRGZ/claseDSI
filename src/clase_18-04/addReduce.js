"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddReduce = void 0;
const abstractReduce_1 = require("./abstractReduce");
/**
 * Implements the AddReduce Method
 */
class AddReduce extends abstractReduce_1.Reduce {
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
     * Reduces all elements of a vector in a number which is the sum
     * of all of them
     */
    reduce() {
        let result = 0;
        this.self_.forEach((e) => {
            result += e;
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
exports.AddReduce = AddReduce;
