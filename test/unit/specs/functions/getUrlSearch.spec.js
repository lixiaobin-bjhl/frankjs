
import getUrlSearch from 'library/function/getUrlSearch';

describe('function/getUrlSearch.js', () => {

    Object.defineProperty(location, 'href', {
        writable: true,
        value: 'http://www.baidu.com?name=xiaobin'
    });

    it('check search is correct', () => {
        
        expect(getUrlSearch().name).toEqual('xiaobin');
    });

});