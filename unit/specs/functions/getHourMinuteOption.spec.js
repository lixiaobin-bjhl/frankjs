
import getHourMinuteOption from 'library/function/getHourMinuteOption';

describe('function/getHourMinuteOption.js', () => {

    it('check hourMinuteOption content', () => {
        var times = getHourMinuteOption(8, 19, 30);
        expect(times[0]).toEqual('08:00');
        expect(times[1]).toEqual('08:30');
        expect(times[times.length - 1]).toEqual('19:00');
    });
    
});