import {Reduce} from "./abstractReduce"


export class ProdReduce extends Reduce {
    /**
     * @param self_ to reduce
     * @param result_ result of the operation
     */
    constructor(protected self_: number[], protected result_: number = 1) {
        super(self_, result_);
    }
    /**
     * Reduces all elements of a vector in a number which is the product
     * of all of them
     * @returns result
     */
    reduce(): number {
        let result: number = 1;
        this.self_.forEach((e) => {
            result *= e;
        });
        return result;
    }
    /**
     * Hook afterReduction 
     * @returns if result is equal to 10
     */
    afterReduction(): boolean {
        return this.result_ == 10;
    }
}