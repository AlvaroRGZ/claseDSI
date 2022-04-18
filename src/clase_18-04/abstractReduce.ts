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