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
    v = v.slice(); // creates a copy of the v

    for (let i = 0; i < v.length; i++) {
      for (let j = 0; j < v.length - 1; j++) {
        if (v[j] > v[j + 1]) {
          const swap: number = v[j];
          v[j] = v[j + 1];
          v[j + 1] = swap;
        }
      }
    }
    return v;
  }
}
