// jsを記述する際はここに記載していく
console.log('はじめてのジャバスクリプト');
console.log(23+5);
console.log(2000-1800);
console.log('18+5');
const name = '安藤将晃';
console.log(name);

const point = 90;
if(point >= 80){
    console.log('素晴らしい!おめでとう!');
}else{
    console.log('もっと頑張りましょう!');
}

const index = Math.floor(Math.random() * 5);

if(index == 0){
    console.log('大吉');
}else if(index == 1){
    console.log('吉');
}else if(index == 2){
    console.log('中吉');
}else if(index == 3){
    console.log('凶');
}else{
    console.log('大凶')
}

const array = ['SSR','SR','SR','R','R','R','R','R','R','R','R'];
const arrayIndex = Math.round(Math.random() * array.length);

if(arrayIndex == 0){
    console.log('SSR 大当たり！');
}else if(arrayIndex == 1 || arrayIndex == 2){
    console.log('SR 中当たり');
}else{
    console.log('R レア...');
}


const janken = [
    'グー',
    'チョキ',
    'パー',
];


// 簡単なジャンケン
const enemyJankenId = Math.round(Math.random() * janken.length);
const meJankenId = Math.round(Math.random() * janken.length);
console.log(enemyJankenId);
console.log(meJankenId);

if(meJankenId == 0 && enemyJankenId == 1 || meJankenId == 1 && enemyJankenId == 2 || meJankenId == 2 && enemyJankenId == 0){
    console.log('自分の勝ち、相手の負け');
}else if(meJankenId == 0 && enemyJankenId == 0 || meJankenId == 1 && enemyJankenId == 1 || meJankenId == 2 && enemyJankenId == 2){console.log('引き分け');
}else{
    console.log('自分の負け、相手の勝ち');
}

// 手を表示
console.log(`自分の手:${janken[meJankenId]}`);
console.log(`相手の手:${janken[enemyJankenId]}`);
if(meJankenId == 0 && enemyJankenId == 1 || meJankenId == 1 && enemyJankenId == 2 || meJankenId == 2 && enemyJankenId == 0){
    console.log('自分の勝ち、相手の負け');
}else if(meJankenId == 0 && enemyJankenId == 0 || meJankenId == 1 && enemyJankenId == 1 || meJankenId == 2 && enemyJankenId == 2){console.log('引き分け');
}else{
    console.log('自分の負け、相手の勝ち');
}

$(function () {
    $(".button").on("click",function(){
        // $('.button').css("color","red");

    const index = Math.floor(Math.random() * 5);

    if(index == 0){
        $(".kekka").html('大吉');
    }else if(index == 1){
        $(".kekka").html('吉');
    }else if(index == 2){
        $(".kekka").html('中吉');
    }else if(index == 3){
        $(".kekka").html('凶');
    }else{
        $(".kekka").html('大凶')
    }
    });
    // この中に書いていく
});


// // jsを記述する際はここに記載していく
// console.log("はじめてのジャバスクリプト");
// // 演習2
// console.log(23 + 5);
// console.log(2000 - 1800);
// console.log("18+5");
// // var test = "テストの文字列を入れてみます";
// // console.log(test); //テストの文字列を入れてみます　が表示されます
// // 演習3
// var name = "もりた";
// console.log(name);
// if (name == "おおほり") {
//   // 処理を書きます
//   console.log("正しいです！");
// } else {
//   // 処理を書きます
//   console.log("間違っています!");
// }
// if (janken == "グー") {
//   console.log("グーです");
// } else if (janken == "チョキ") {
//   console.log("チョキです");
// } else if (janken == "パー") {
//   console.log("パーです");
// }
// 素晴らしい!おめでとう!」と表示させる それ以外の場合は「もっと頑張りましょう!」と表示
// 演習４
// var point = 50;
// if (point >= 80) {
//   console.log("素晴らしい!おめでとう!");
// } else {
//   console.log("もっと頑張りましょう!");
// }
// // 箱の中身を確認します
// // 0 ~ 4までの数字が出ます
// $(function () {
//   // この中に書いていく
//   $(".button").on("click", function () {
//     // $(".button").css("color", "red");
//     // $(".kekka").html("押されましたよ");
//     var random = Math.floor(Math.random() * 5);
//     console.log(random, "便利な機能を使ってランダムな数字が出ます");
//     if (random == 0) {
//       // 0の時に実行したいことをかく
//       console.log("大吉");
//       $(".kekka").html("大吉");
//     } else if (random == 1) {
//       // 1の時に実行したいことをかく
//       console.log("中吉");
//       $(".kekka").html("中吉");
//     } else if (random == 2) {
//       // 2の時に実行したいことをかく
//       console.log("小吉");
//     } else if (random == 3) {
//       console.log("吉");
//     } else if (random == 4) {
//       console.log("末");
//     }
//     // この下は消さない
//   });
//   // 下は消しちゃダメ
// });
