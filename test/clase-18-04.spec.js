"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("mocha");
const chai_1 = require("chai");
const addReduce_1 = require("../src/clase_18-04/addReduce");
const subReduce_1 = require("../src/clase_18-04/subReduce");
const divReduce_1 = require("../src/clase_18-04/divReduce");
const prodReduce_1 = require("../src/clase_18-04/prodReduce");
describe('Pruebas Patron Template Method', () => {
    const a = new addReduce_1.AddReduce([1, 2, 3, 4, 5, 6]);
    it('Funciona AddReduce', () => {
        (0, chai_1.expect)(a.run()).to.be.deep.equal(21);
    });
    const s = new subReduce_1.SubReduce([1, 2, 3, 4, 5, 6]);
    it('Funciona SubReduce', () => {
        (0, chai_1.expect)(s.run()).to.be.deep.equal(-21);
    });
    const d = new divReduce_1.DivReduce([1, 2, 3, 4, 5, 6]);
    it('Funciona DivReduce', () => {
        (0, chai_1.expect)(d.run()).to.be.deep.equal(0.001388888888888889);
    });
    const p = new prodReduce_1.ProdReduce([1, 2, 3, 4, 5, 6]);
    it('Funciona ProdReduce', () => {
        (0, chai_1.expect)(p.run()).to.be.deep.equal(720);
    });
});
