import {Strategy} from '../Algoritmos/interface';
// import {Mergesort} from '../Algoritmos/mergesort'
/**
 * Clase algoritmo
 */
export class Algoritmo {
  /**
   * @param v vector a ordenas
   * @param strategy algoritmo para ordenar
   */
  constructor(private v: number[], private strategy: Strategy) {}

  /**
   * Asigns a new strategy
   * @param a new strategy
   */
  setStrategy(a: Strategy) {
    this.strategy = a;
  }
  /**
   * @return actual strategy
   */
  getStrategy(): Strategy {
    return this.strategy;
  }
}
