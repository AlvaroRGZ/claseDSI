import {Reduce} from "./abstractReduce"
/**
 * Implements the AddReduce Method
 */
export class AddReduce extends Reduce {
    /**
     * @param self_ to reduce
     * @param result_ result of the operation
     */
    constructor(protected self_: number[], protected result_: number = 0) {
        super(self_, result_);
    }
    /**
     * Reduces all elements of a vector in a number which is the sum
     * of all of them
     */
    reduce(): number {
        let result: number = 0;
        this.self_.forEach((e) => {
            result += e;
        });
        return result;
    }
    /**
     * Hook afterInitialization 
     * @returns if result is greater than 10
     */
    afterInitialization(): boolean {
        return this.result_ > 10;
    }
}
