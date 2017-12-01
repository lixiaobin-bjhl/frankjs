
import getDefaultPageDto from 'library/function/getDefaultPageDto';

describe('function/getDefaultPageDto.js', () => {

    it('check default pageDto content', () => {
        var result = getDefaultPageDto();
        expect(result.pageNum).toBe(1);
    });
    
});