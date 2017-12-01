
import float2Int from 'library/function/float2Int';

describe('function/float2Int.js', () => {

    it('input 2', () => {
        expect(float2Int(2)).toBe(2);
    });

    it('input 2.22', () => {
        expect(float2Int(2.22)).toBe(222);
    });

    it('input 2.22, 3', () => {
        expect(float2Int(2.22, 3)).toBe(2220);
    });

});