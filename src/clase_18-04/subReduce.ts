import {Reduce} from "./abstractReduce"

export class SubReduce extends Reduce {
    /**
     * @param self_ to reduce
     * @param result_ result of the operation
     */
    constructor(protected self_: number[], protected result_: number = 0) {
        super(self_, result_);
    }
    /**
     * Reduces all elements of a vector in a number which is the diference
     * of all of them
     * @returns result
     */
    reduce(): number {
        let result: number = 0;
        this.self_.forEach((e) => {
            result -= e;
        });
        return result;
    }
    /**
     * Hook afterReduction 
     * @returns if result is lower than 10
     */
    afterReduction(): boolean {
        return this.result_ < 10;
    }
}