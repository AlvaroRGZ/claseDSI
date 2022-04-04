import 'mocha';
import {expect} from 'chai';
import {Algoritmo} from '../src/AlgoritmoBase/Algoritmo';
// import {Strategy} from '../src/Algoritmos/interface';
import {Mergesort} from '../src/Algoritmos/mergesort';
import {Bubblesort} from '../src/Algoritmos/bubblesort';

describe('Pruebas Stretegy', () => {
  const m: Algoritmo = new Algoritmo([5, 6, 2, 4, 1, 3], new Bubblesort());
  // const b: Algoritmo = new Algoritmo([5, 6, 2, 4, 1, 3], new Bubblesort());
  it('Se puede cambiar el algoritmo dinamicamente', () => {
    m.setStrategy(new Mergesort());
    expect(m.getStrategy()).to.be.eql(new Mergesort());
  });
});
