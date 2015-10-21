$(function() { 
    $("#aKeypadL").keypad($.extend({
        showAnim: 'show',  // 'slideDown',
        duration: 'fast',
        showOn: 'button',
        buttonImageOnly: true,
        buttonImage: './images/keypad.png',
        keypadOnly: false,
        //startText: '|<',
        //startStatus: '先頭へ移動します',
        //endText:   '>|',
        //endStatus:   '末尾へ移動します',
        katahiraText:   'カナ', // 'ひら'],
        katahiraStatus:  'カタカナ', // '平仮名'],
        // kanaText: '英数', // '仮名
        // kanaStatus: '',
        zenkakuText: '-', // 半角', '全角'
        zenkakuStatus: '半角・全角の切り替え (半角平仮名はありません)',
        layout : $.keypad.kanaL // $.keypad.kanaR
    },
    $.keypad.regional['ja'])
    );

    $("#aKeypadR").keypad($.extend({
        showAnim: 'show',  // 'slideDown',
        duration: 'fast',
        showOn: 'button',
        buttonImageOnly: true,
        buttonImage: './images/keypad.png',
        keypadOnly: false,
        //startText: '|<',
        //startStatus: '先頭へ移動します',
        //endText:   '>|',
        //endStatus:   '末尾へ移動します',
        katahiraText:   'カナ', // 'ひら'],
        katahiraStatus:  'カタカナ', // '平仮名'],
        // kanaText: '英数', // '仮名
        // kanaStatus: '',
        zenkakuText: '-', // 半角', '全角'
        zenkakuStatus: '半角・全角の切り替え (半角平仮名はありません)',
        layout : $.keypad.kanaR // $.keypad.kanaL
    },
    $.keypad.regional['ja'])
    );

    $('#fullKeypad').keypad({
        showAnim: 'show',
        duration: 'fast',
        showOn: 'button',
        keypadOnly: false,
        buttonImageOnly: true,
        buttonImage: './images/keypad.png',
        layout: $.keypad.qwertyLayout
    });
})
