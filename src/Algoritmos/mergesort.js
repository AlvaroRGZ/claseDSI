"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mergesort = void 0;
/**
 * Clase mergesort para ordenar vectores
 */
class Mergesort {
    /**
     * @param v vector a ordenar
     * @returns vector ordenado por mergesort
     */
    ordenar(v) {
        return this.divide(v);
    }
    /**
     * @param v vector a ordenar
     * @returns vector ordenado por mergesort
     */
    divide(items) {
        const halfLength = Math.ceil(items.length / 2);
        let low = items.slice(0, halfLength);
        let high = items.slice(halfLength);
        if (halfLength > 1) {
            low = this.divide(low);
            high = this.divide(high);
        }
        return this.merge(low, high);
    }
    /**
     * @param l limite izquierdo
     * @param r limite derecho
     * @returns vector ordenado
     */
    merge(low, high) {
        let indexLow = 0;
        let indexHigh = 0;
        const lengthLow = low.length;
        const lengthHigh = high.length;
        const combined = [];
        while (indexLow < lengthLow || indexHigh < lengthHigh) {
            const lowItem = low[indexLow];
            const highItem = high[indexHigh];
            if (lowItem !== undefined) {
                if (highItem === undefined) {
                    combined.push(lowItem);
                    indexLow++;
                }
                else {
                    if (lowItem <= highItem) {
                        combined.push(lowItem);
                        indexLow++;
                    }
                    else {
                        combined.push(highItem);
                        indexHigh++;
                    }
                }
            }
            else {
                combined.push(highItem);
                indexHigh++;
            }
        }
        return combined;
    }
}
exports.Mergesort = Mergesort;
