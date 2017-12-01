
import getScrollTop from 'library/function/getScrollTop';

describe('function/getScrollTop.js', () => {

    it('scroll top equal 0', () => {
        expect(getScrollTop()).toBe(0);
    });

    it('set scroll Top 100', () => {
        Object.defineProperty(document.body, 'scrollTop', {
            writable: true,
            value: 100
        });
        expect(getScrollTop()).toBe(100);
    });

    it('set documentElement Top 200', () => {
        Object.defineProperty(document.body, 'scrollTop', {
            writable: true,
            value: 100
        });
        Object.defineProperty(document.documentElement, 'scrollTop', {
            writable: true,
            value: 200
        });
        expect(getScrollTop()).toBe(200);
    });

});