
require('library/filter/week');

describe('filter/week.js', () => {

    it('input 1', () => {
        var week = Vue.filter('week')(1);
        expect(week).toEqual('一');
    });

    it('input empty', () => {
        var week = Vue.filter('week')();
        expect(week).toEqual('');
    });

    it('input timestamp', () => {
        var today = new Date('Tue Nov 28 2017 17:53:54 GMT+0800 (CST)');
        var week = Vue.filter('week')(1511862822861);
        expect(week).toEqual('二');
    });
});