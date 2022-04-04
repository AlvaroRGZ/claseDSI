/**
 * Ordena un vector
 */
export interface Strategy {
  /**
   * @param v vector a ordenar
   */
  ordenar (v: number[]): number[];
}
