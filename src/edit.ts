/**
* class edit
*/
export class Algoritmo {
  constructor(private v: number[], private strategy: aOrdenacion){}

  /**
   * @return nombre de la persona
   */
  setStrategy(a: aOrdenacion) {
    return this.strategy;
  }
}


