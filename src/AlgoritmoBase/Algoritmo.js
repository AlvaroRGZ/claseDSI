"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Algoritmo = void 0;
/**
 * Clase algoritmo
 */
class Algoritmo {
    /**
     * @param v vector a ordenas
     * @param strategy algoritmo para ordenar
     */
    constructor(v, strategy) {
        this.v = v;
        this.strategy = strategy;
    }
    /**
     * Asigns a new strategy
     * @param a new strategy
     */
    setStrategy(a) {
        this.strategy = a;
    }
    /**
     * @param a vector nuevo
     */
    setVector(a) {
        this.v = a;
    }
    /**
     * @return actual strategy
     */
    getStrategy() {
        return this.strategy;
    }
    /**
     * Ordena el vector
     */
    ejecutar() {
        return this.strategy.ordenar(this.v);
    }
}
exports.Algoritmo = Algoritmo;
