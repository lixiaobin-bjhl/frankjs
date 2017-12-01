
import getSeason from 'library/function/getSeason';
describe('function/getSeason.js', () => {

    var result = 1;
    var date = new Date();
    var month = date.getMonth();

    beforeEach(()=> {
        switch (month) {
            case 1:
            case 2:
            case 3:
                result = 1;
                break;
            case 4:
            case 5:
            case 6:
                result = 2;
                break;
            case 7:
            case 8:
            case 9:
                result = 3;
                break;
            case 10:
            case 11:
            case 0:
                result = 4;
                break;
        }
    });

    it('get current season', () => {
        expect(getSeason()).toBe(result);
    });

    it('get january season', () => {
        var targetDate = new Date(2017, 0, 1);
        expect(getSeason(targetDate)).toBe(4);
    });

    it('get february season', () => {
        var targetDate = new Date(2017, 1, 1);
        expect(getSeason(targetDate)).toBe(4);
    });
});