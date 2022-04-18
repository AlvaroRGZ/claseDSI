import 'mocha';
import {expect} from 'chai';
import {AddReduce}  from '../src/clase_18-04/addReduce';
import {SubReduce}  from '../src/clase_18-04/subReduce';
import {DivReduce}  from '../src/clase_18-04/divReduce';
import {ProdReduce} from '../src/clase_18-04/prodReduce';

describe('Pruebas Patron Template Method', () => {
  const a: AddReduce = new AddReduce([1, 2, 3, 4, 5, 6]);
  it('Funciona AddReduce', () => {
    expect(a.run()).to.be.deep.equal(21);
  });
  const s: SubReduce = new SubReduce([1, 2, 3, 4, 5, 6]);
  it('Funciona SubReduce', () => {
    expect(s.run()).to.be.deep.equal(-21);
  });
  const d: DivReduce = new DivReduce([1, 2, 3, 4, 5, 6]);
  it('Funciona DivReduce', () => {
    expect(d.run()).to.be.deep.equal(0.001388888888888889);
  });
  const p: ProdReduce = new ProdReduce([1, 2, 3, 4, 5, 6]);
  it('Funciona ProdReduce', () => {
    expect(p.run()).to.be.deep.equal(720);
  });
});
