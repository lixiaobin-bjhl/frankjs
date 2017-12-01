
import getMonthLastDay from 'library/function/getMonthLastDay';

describe('function/getMonthLastDay.js', () => {

    it('check month last day', () => {
        var times = new Date(2017, 10, 11);
        var lastDay = getMonthLastDay(times);
        expect(lastDay.getDate()).toEqual(30);
    });
    
    it('input incorrect param', () => {
        expect(getMonthLastDay).toThrowError('Invalid Date');
    });

});