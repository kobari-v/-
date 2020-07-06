$(function(){
    //画面読み込み時に表示
    $("#controlArea1").hide(); //初期表示は隠す

//指定ボタンを押下すると処理を開始
$("#btn1").on("click",function(){
$("#controlArea1").show();//div領域を表示
});

//指定ボタンを押下すると処理を開始する
$("#btn2").on("click",function(){
$("#controlArea1").hide(); //div領域を隠す
});
});
$(function(){
//画面読み込み時に表示
$("#controlArea2").hide(); //初期表示は隠す
//指定ボタンを押下すると処理を開始
$("#btn3").on("click",function(){
$("#controlArea2").show();//div領域を表示
});

//指定ボタンを押下すると処理を開始する
$("#btn4").on("click",function(){
$("#controlArea2").hide(); //div領域を隠す
});
});

