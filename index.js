$(function () {

    // 送信
    $('form').submit(function () {
        var result = $('input[name="result"]:checked').val();

        if (straw == "はい"){
             var msg = `注文をキャンセル`;
        }
        sendText(msg);

        return false;
    });
});
