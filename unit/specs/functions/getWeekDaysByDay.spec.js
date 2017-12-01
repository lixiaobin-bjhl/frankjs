
import getWeekDaysByDay from 'library/function/getWeekDaysByDay';
require('@/common/filter/date');

describe('function/getWeekDaysByDay.js', () => {

    it('check week days', () => {
        var result = getWeekDaysByDay(new Date());
        expect(result[0].day).toEqual('周一');
        expect(result[6].day).toEqual('周日');
    });

    it('chec the day is sunday', () => {
        var result = getWeekDaysByDay(new Date('2017-12-3'));
        expect(result[0].day).toEqual('周一');
        expect(result[6].day).toEqual('周日');
    });
});