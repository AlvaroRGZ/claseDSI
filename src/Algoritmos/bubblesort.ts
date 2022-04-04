import {Strategy} from './interface';

/**
 * Clase mergesort para ordenar vectores
 */
export class Bubblesort implements Strategy {
  /**
   * @param v vector a ordenar
   * @returns vector ordenado por mergesort
   */
  ordenar(v: number[]): number[] {
    return v;
  }
}
