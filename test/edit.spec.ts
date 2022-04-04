import 'mocha';
import {expect} from 'chai';
import {Algoritmo} from '../src/AlgoritmoBase/Algoritmo';
// import {Strategy} from '../src/Algoritmos/interface';
import {Mergesort} from '../src/Algoritmos/mergesort';
import {Bubblesort} from '../src/Algoritmos/bubblesort';

describe('Pruebas Stretegy', () => {
  const m: Algoritmo = new Algoritmo([5, 6, 2, 4, 1, 3], new Mergesort());
  it('Mergesort funciona', () => {
    expect(m.ejecutar()).to.be.deep.equal([1, 2, 3, 4, 5, 6]);
  });
  it('Se puede cambiar el algoritmo dinamicamente', () => {
    m.setStrategy(new Bubblesort());
    expect(m.getStrategy()).to.be.eql(new Mergesort());
  });
  it('Se puede cambiar el vector dinamicamente', () => {
    m.setVector([50, 60, 20, 40, 10, 30]);
    expect(m.getStrategy()).to.be.eql(new Mergesort());
  });
  it('Bubblesort funciona', () => {
    expect(m.ejecutar()).to.be.deep.equal([10, 20, 30, 40, 50, 60]);
  });
});
