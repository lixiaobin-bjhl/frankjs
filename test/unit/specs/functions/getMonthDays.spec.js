
import getMonthDays from 'library/function/getMonthDays';

describe('function/getMonthDays.js', () => {

    it('check month days', () => {
        var times = new Date(2017, 10, 11);
        var daysTotal = getMonthDays(times);
        expect(daysTotal).toEqual(30);
    });
    
});