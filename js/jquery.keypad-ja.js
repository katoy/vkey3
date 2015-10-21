/* http://keith-wood.name/keypad.html
   Spanish initialisation for the jQuery keypad extension
   Written by Cristhian Benitez (cbenitez@gmail.com). */
(function($) { // hide the namespace
    //function moveCursor(input, pos) {
    //    if (input[0].setSelectionRange) {
    //        // Mozilla
    //        input[0].setSelectionRange(pos, pos);
    //    } else if (input[0].createTextRange) {
    //        // IE
    //        var range = input[0].createTextRange();
    //        range.move('character', pos);
    //        range.select();
    //    }
    //    input.focus();
    //}

    //$.keypad.addKeyDef('START', 'start',
    //    function(inst) {
    //        moveCursor(this, 0);
    //    });
    //$.keypad.addKeyDef('END', 'end',
    //    function(inst) {
    //        moveCursor(this, this.val().length);
    //    });

    $.keypad.regional['ja'] = {
        buttonText: '...',
        buttonStatus: 'キーパッドを開閉します',
        closeText: '閉じる',
        closeStatus: 'キーパッドを閉じます',
        clearText: '全消去',
        clearStatus: '入力文字列を全て削除します',
        backText: '削除',
        backStatus: '１文字削除します',
        shiftText: 'シフト',
        shiftStatus: '大文字・小文字の切り替え',
        spacebarText: '&nbsp;',
        spacebarStatus: '半角スペース',
        enterText: '改行',
        enterStatus: '改行します',
        tabText: '→',
        tabStatu: '水平タブ',

        kanaText: '英数', // '仮名  // katoy
        kanaStatus: '',
        shift2Text: 'シフト',
        shift2Status: '大文字・小文字の切り替え',

        alphabeticLayout: $.keypad.qwertyAlphabetic,
        fullLayout: $.keypad.qwertyLayout,
        isAlphabetic: $.keypad.isAlphabetic,
        isNumeric: $.keypad.isNumeric,
        isRTL: false
    };
    $.keypad.setDefaults($.keypad.regional['ja']);
})(jQuery);
