import {Strategy} from '../Algoritmos/interface';
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
   * @param a vector nuevo
   */
  setVector(a: number[]) {
    this.v = a;
  }
  /**
   * @return actual strategy
   */
  getStrategy(): Strategy {
    return this.strategy;
  }
  /**
   * Ordena el vector
   */
  ejecutar(): number[] {
    return this.strategy.ordenar(this.v);
  }
}
