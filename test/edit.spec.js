"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("mocha");
const chai_1 = require("chai");
const Algoritmo_1 = require("../src/AlgoritmoBase/Algoritmo");
// import {Strategy} from '../src/Algoritmos/interface';
const mergesort_1 = require("../src/Algoritmos/mergesort");
const bubblesort_1 = require("../src/Algoritmos/bubblesort");
describe('Pruebas Stretegy', () => {
    const m = new Algoritmo_1.Algoritmo([5, 6, 2, 4, 1, 3], new mergesort_1.Mergesort());
    it('Mergesort funciona', () => {
        (0, chai_1.expect)(m.ejecutar()).to.be.deep.equal([1, 2, 3, 4, 5, 6]);
    });
    it('Se puede cambiar el algoritmo dinamicamente', () => {
        m.setStrategy(new bubblesort_1.Bubblesort());
        (0, chai_1.expect)(m.getStrategy()).to.be.eql(new mergesort_1.Mergesort());
    });
    it('Se puede cambiar el vector dinamicamente', () => {
        m.setVector([50, 60, 20, 40, 10, 30]);
        (0, chai_1.expect)(m.getStrategy()).to.be.eql(new mergesort_1.Mergesort());
    });
    it('Bubblesort funciona', () => {
        (0, chai_1.expect)(m.ejecutar()).to.be.deep.equal([10, 20, 30, 40, 50, 60]);
    });
});
