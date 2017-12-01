
import getScrollbarWidth from 'library/function/getScrollbarWidth';

describe('function/getScrollTopWidth.js', () => {

    it('check scroll bar', () => {
        var width = getScrollbarWidth();
        expect(width).toBe(0);
    });

    it('scrollbarWidth is not undefined', () => {
        var fn = getScrollbarWidth;
        var scrollbarWidth = 5;
        var width = fn.call();
        expect(width).toBe(0);
    });

});