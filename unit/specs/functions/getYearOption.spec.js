
import getYearOption from 'library/function/getYearOption';

describe('function/makePhoneCall.js', () => {

    it('not has all', () => {
        var options = getYearOption();
        var date = new Date();
        var year = date.getFullYear();

        expect(options[0].value).toBe(year - 5);
        expect(options[options.length - 1].value).toBe(year + 5);

    });

    it('has all', () => {
        var options = getYearOption(true);
        var date = new Date();
        var year = date.getFullYear();
        expect(options[0].value).toBe(0);
        expect(options[options.length - 1].value).toBe(year + 5);

    });

});