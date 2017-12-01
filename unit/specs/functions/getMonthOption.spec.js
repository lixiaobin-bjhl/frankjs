
import getMonthOption from 'library/function/getMonthOption';

describe('function/getMonthOption.js', () => {

    it('check months option length', () => {
        expect(getMonthOption().length).toEqual(12);
    });
});