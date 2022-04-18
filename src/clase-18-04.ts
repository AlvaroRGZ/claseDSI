/**
 * Clase para implementar Template Method
 */
export abstract class Reduce {
    /**
     * @param self_ vector to reduce
     * @param result_ result of the operation
     */
    constructor(protected self_: number[], protected result_: number) {}

    /**
     * Runs the main method
     * @returns result of reducing by the way the child class does
     */
    public run(): number {
        this.result_ = 0;
        // Hook
        this.afterInitialization();
        this.result_ = this.reduce();
        // Hook
        this.afterReduction();
        return this.result_; 
    }
    /**
     * Template method
     * @returns result of reducing
     */
    protected abstract reduce(): number;

    // Hooks
    /**
     * Hook 1: after initialization
     */
    protected afterInitialization(){}
    /**
     * Hook 2: after Reduction
     */
    protected afterReduction(){}
}

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