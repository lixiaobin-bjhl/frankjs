
import deepClone from 'library/function/deepClone';

describe('function/deepClone.js', () => {
    it('input array', () => {
        var array = [1, 2, 3];
        var result = deepClone(array);
        result[0] = 5;
        expect(array[0]).toBe(1);
        expect(result[0]).toBe(5);
    });

    it('input number', () => {
        var num = 1;
        var result = deepClone(num);
        result = 5;
        
        expect(num).toBe(1);
        expect(result).toBe(5);
    });


    it('input object', () => {
        var obj = {
            name: 'xiaobin'
        };
        var result = deepClone(obj);
        result.name = 'yingjie';
        expect(obj.name).toEqual('xiaobin');
        expect(result.name).toBe('yingjie');
    });

});