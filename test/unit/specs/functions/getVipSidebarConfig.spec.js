
import getVipSidebarConfig from 'library/function/getVipSidebarConfig';

describe('function/getVipSideBarConfig.js', () => {

    it('check result type', () => {
        var result = getVipSidebarConfig([], 'crm');
        expect(typeof result).toEqual('object');
    });

    it('check tag 196', () => {
        var result = getVipSidebarConfig([
            {
                tag: 196,
                type: 0
            }
        ]);
        expect(
            result.some((item)=> {
                return item.label === '课消统计'
            })
        ).toBeTruthy();
    });
    
    it('check tag 206', () => {

        var result = getVipSidebarConfig([
            {
                tag: 206,
                type: 0
            }
        ]);

        expect(result.some((item)=> {
            return item.label === '积分系统'
        })).toBeTruthy();
    });


    it('check location href has crm', () => {
        Object.defineProperty(location, 'href', {
            writable: true,
            value: 'http://www.baidu.com/crm/'
        });
        var result = getVipSidebarConfig([
            {
                tag: 196,
                type: 0
            }
        ]);
        expect(result.some((item)=> {
            return item.url.indexOf('vip_kx_stats') != -1
        })).toBeTruthy();
    });

    it('check location href has setup', () => {
        Object.defineProperty(location, 'href', {
            writable: true,
            value: 'http://www.baidu.com/setup'
        });
        var result = getVipSidebarConfig([
            {
                tag: 196,
                type: 0
            }
        ]);
        expect(result.some((item)=> {
            return item.url.indexOf('setup') != -1
        })).toBeTruthy();
    });

    it('check location href has setup crm', () => {
        Object.defineProperty(location, 'href', {
            writable: true,
            value: 'http://www.baidu.com/crm/setup'
        });
        var result = getVipSidebarConfig([
            {
                tag: 196,
                type: 0
            }
        ]);
        expect(result.some((item)=> {
            return item.label !== '积分系统'
        })).toBeTruthy();
    });


    it('check type is not 0', () => {
        var result = getVipSidebarConfig([
            {
                tag: 206,
                type: 1
            }
        ]);
        expect(result.some((item)=> {
            return item.url.indexOf('vip_kx_stats') == -1
        })).toBeFalsy();
    });

});