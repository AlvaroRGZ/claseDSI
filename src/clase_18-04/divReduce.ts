import {Reduce} from "./abstractReduce"

export class DivReduce extends Reduce {
    /**
     * @param self_ to reduce
     * @param result_ result of the operation
     */
    constructor(protected self_: number[], protected result_: number = 1) {
        super(self_, result_);
    }
    /**
     * Reduces all elements of a vector in a number which is the division
     * of all of them
     * @returns result
     */
    reduce(): number {
        let result: number = 1;
        this.self_.forEach((e) => {
            result /= e;
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
