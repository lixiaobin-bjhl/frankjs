/**
 * @fileOverview chairty-function-indexBy
 * @author XiaoBin Li(lixiaobin8878@gmail.com) 
 */

'use strict';

export default function indexBy (array, key) {
    var map = {};
    array.forEach(function (item, index) {
        map[item[key]] = item;
    });
    return map;
}