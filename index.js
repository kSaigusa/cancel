$(function () {

    // 送信
    $('form').submit(function () {
        var result = $('input[name="result"]:checked').val();

        if ( == "はい"){
            var msg = `注文をキャンセル`;
        }else{
            var msg = `キャンセルいたしませんでした`;
        }
        
        sendText(msg);

        return false;
    });
});
