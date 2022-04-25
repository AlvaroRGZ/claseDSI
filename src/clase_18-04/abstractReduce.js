"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Reduce = void 0;
/**
 * Clase para implementar Template Method
 */
class Reduce {
    /**
     * @param self_ vector to reduce
     * @param result_ result of the operation
     */
    constructor(self_, result_) {
        this.self_ = self_;
        this.result_ = result_;
    }
    /**
     * Runs the main method
     * @returns result of reducing by the way the child class does
     */
    run() {
        this.result_ = 0;
        // Hook
        this.afterInitialization();
        this.result_ = this.reduce();
        // Hook
        this.afterReduction();
        return this.result_;
    }
    // Hooks
    /**
     * Hook 1: after initialization
     */
    afterInitialization() { }
    /**
     * Hook 2: after Reduction
     */
    afterReduction() { }
}
exports.Reduce = Reduce;
