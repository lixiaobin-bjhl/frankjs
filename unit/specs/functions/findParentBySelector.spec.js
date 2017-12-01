
import findParentBySelector from 'library/function/findParentBySelector';

describe('function/findParentBySelector.js', () => {

    it('the usual case', () => {
        var div = document.createElement('div');
        div.innerHTML = '' 
            + '<div class="a">'
            + '   <div class="a" id="goal">'
            + '        <div class="c"></div>'
            + '   </div>'
            + '</div>';
        document.body.appendChild(div);
        setTimeout(()=> {
            var result = findParentBySelector(document.querySelector('.c'), '.a');
            expect(result.id).toEqual('goal');
        });
    });

    it('the element has not parentNode', () => {
        var result = findParentBySelector(document, '.a');
        expect(result).toBe(null);
    });

    it('the element has parentNode but not goal', () => {
        var result = findParentBySelector(document.body, '.d');
        expect(result).toBe(null);
    });

});