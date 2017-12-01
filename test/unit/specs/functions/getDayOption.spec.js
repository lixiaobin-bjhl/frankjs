
import getDayOption from 'library/function/getDayOption';

describe('function/getDayOption.js', () => {

    it('check day option length', () => {
        expect(getDayOption().length).toBe(31);
    });
    
});