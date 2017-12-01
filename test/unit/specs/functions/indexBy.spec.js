
import indexBy from 'library/function/indexBy';

describe('function/indexBy.js', () => {
    it('array convert to map', () => {
        var obj =  [
            {
                id: 1
            },
            {
                id: 2
            }
        ]
        expect(indexBy(obj, 'id')[1].id).toBe(1);
    });

});