let menu_id = 0;
let enterKey = 0;
let enemyHp = 30;

let audioElem;
const aBgm = "https://orangedays00.github.io/gs_dev18_02/music/katana-slash5.mp3";
const caBgm = "https://orangedays00.github.io/gs_dev18_02/music/katana-slash2.mp3";
const eaBgm = "https://orangedays00.github.io/gs_dev18_02/music/punch-heavy2.mp3";
const playAttackBgm = (filename) => {
    audioElem = new Audio();
    audioElem.src = filename;
    audioElem.play();
}

//キー入力による分岐処理
function game_keydown(){
    if(document.getElementById('ryuouTrue').className == "none"){
        switch (event.key) {
            case "ArrowLeft": //カーソルキーの左
                break;
            case "ArrowUp": //カーソルキーの上
                if (menu_id <= 1) {
                    activeMenu(4);
                } else {
                    activeMenu(menu_id - 1);
                }
                break;
            case "ArrowRight": //カーソルキーの右
                break;
            case "ArrowDown": //カーソルキーの下
                if (menu_id >= 4) {
                    activeMenu(1);
                } else {
                    activeMenu(menu_id + 1);
                }
                break;
            case "Enter": //エンターキー
                enterKey = enterKey + 1;
                ryuouBattle(menu_id);
                // console.log(enterKey);
                break;
            default: //その他の場合
                break;
        }
    }
    if(document.getElementById('ryuou').classList.contains('none') == true){
        switch (event.key) {
            case "ArrowLeft": //カーソルキーの左
                break;
            case "ArrowUp": //カーソルキーの上
                if (menu_id <= 1) {
                    activeMenu(4);
                } else {
                    activeMenu(menu_id - 1);
                }
                break;
            case "ArrowRight": //カーソルキーの右
                break;
            case "ArrowDown": //カーソルキーの下
                if (menu_id >= 4) {
                    activeMenu(1);
                } else {
                    activeMenu(menu_id + 1);
                }
                break;
            case "Enter": //エンターキー
                enterKey = enterKey + 1;
                ryuouTrueBattle(menu_id);
                // console.log(enterKey);
                break;
            default: //その他の場合
                break;
        }
    }
}



function activeMenu(id){
    if(document.getElementById('ryuouTrue').className == "none"){
        if (menu_id == id) {
            //前回と同じメニューが選ばれた場合はコマンドを実行
            ryuouBattle(id);
        } else {
            if (menu_id != 0) {
                //現在のメニューのカーソルを消す
                document.getElementById('menu' + menu_id).className = 'menu';
            }
            //今回選ばれたメニューにカーソルを表示
            document.getElementById('menu' + id).className = 'menu menu-active';
            menu_id = id;
        }
    }
    if(document.getElementById('ryuou').classList.contains('none') == true){
        if (menu_id == id) {
            //前回と同じメニューが選ばれた場合はコマンドを実行
            ryuouTrueBattle(id);
        } else {
            if (menu_id != 0) {
                //現在のメニューのカーソルを消す
                document.getElementById('menu' + menu_id).className = 'menu';
            }
            //今回選ばれたメニューにカーソルを表示
            document.getElementById('menu' + id).className = 'menu menu-active';
            menu_id = id;
        }
    }
}

const messageClear123 = ()=>{
    document.querySelector('.message1').innerHTML = "";
    document.querySelector('.message2').innerHTML = "";
    document.querySelector('.message3').innerHTML = "";
}
// messageClear123();

const messageClear23 = ()=>{
    document.querySelector('.message2').innerHTML = "";
    document.querySelector('.message3').innerHTML = "";
}

// りゅうおうの登場関数
const gogogo = ()=>{
    document.getElementById('ryuou').classList.add('none');
    document.getElementById('gogogo').classList.remove('none');
    document.querySelector('.game-enemy img#gogogo').classList.add('gogogo');
}

// りゅうおう（真）の登場関数
const changeTrue = ()=>{
    document.getElementById('gogogo').classList.add('none');
    document.getElementById('ryuouTrue').classList.remove('none');
    document.querySelector('.message1').innerHTML = `<span class="dead-text">りゅうおうは しんのすがたをあらわした!</span>`;
    document.querySelector('.message2').innerHTML = "";
    enemyHp = 100;
}

function message1(qs,inhtml,time){
	setTimeout(()=>{
		document.querySelector(qs).innerHTML = inhtml;
	},time);
}

function message12(qs1,inhtml1,qs2,inhtml2,time){
	setTimeout(()=>{
		document.querySelector(qs1).innerHTML = inhtml1;
		document.querySelector(qs2).innerHTML = inhtml2;
	},time);
}

function classListAdd1(qs,cla,time){
	setTimeout(()=>{
		document.querySelector(qs).classList.add(cla);
	},time);
}

function classListRemove1(qs,clr,time){
    setTimeout(()=>{
		document.querySelector(qs).classList.remove(clr);
	},time);
}

function classListAddRemove(qsa,cla,qsr,clr,time){
	setTimeout(()=>{
		document.querySelector(qsa).classList.add(cla);
		document.querySelector(qsr).classList.remove(clr);
	},time);
}

function damageBgm(qs,cla,pab,time){
    setTimeout(()=>{
        document.querySelector(qs).classList.add(cla);
        playAttackBgm(pab);
    },time);
}

function callbackMessage(qs,inhtml,call,time){
    setTimeout(()=>{
        document.querySelector(qs).innerHTML = inhtml;
        call();
    },time);
}

function callback(call,time){
    setTimeout(()=>{
        call();
    },time);
}

function pinch(cla,qs1,qs2,qs3,qs4,qs5,inhtml4,inhtml5,time){
    setTimeout(()=>{
        document.querySelector(qs1).classList.add(cla);
        document.querySelector(qs2).classList.add(cla);
        document.querySelector(qs3).classList.add(cla);
        document.querySelector(qs4).innerHTML = inhtml4;
        document.querySelector(qs5).innerHTML = inhtml5;
    },time);
}

function death(cla,qs1,qs2,qs3,qs4,inhtml4,time){
    setTimeout(()=>{
        document.querySelector(qs1).classList.add(cla);
        document.querySelector(qs2).classList.add(cla);
        document.querySelector(qs3).classList.add(cla);
        document.querySelector(qs4).innerHTML = inhtml4;
    },time);
}


// りゅうおう戦の戦闘関数
function ryuouBattle(command_id){
    if(enterKey == 1){
        // document.getElementById("game-control").value = "コマンド番号:" + command_id;
        switch (command_id) {
            case 1: //たたかう
                let braveHp = parseInt(document.getElementById('hitPoint').textContent);
                const janken = [
                    'グー',
                    'チョキ',
                    'パー',
                ];
                const enemyId1 = Math.floor(Math.random() * janken.length);
                const braveId1 = Math.floor(Math.random() * janken.length);
                if(braveId1 == 0 && enemyId1 == 1 || braveId1 == 1 && enemyId1 == 2 || braveId1 == 2 && enemyId1 == 0){
                    if(braveId1 == 0){

                        const criticalAttack1 = Math.floor((Math.random() + 2) * 30);
                        enemyHp = enemyHp - criticalAttack1;
                        if(enemyHp < 0){
                            callback(messageClear123,0);
                            callbackMessage('.message1',`<span class="message-text">ジーズの こうげき！ かいしんのいちげき！りゅうおうに${criticalAttack1}のダメージ</span>`,messageClear23,300);
                            damageBgm('.game-enemy img#ryuou','damage',caBgm,400);
                            classListRemove1('.game-enemy img#ryuou','damage',600);
                            classListAdd1('.game-enemy img#ryuou','death',700);
                            message12('.message2',`<span class="dead-text">りゅうおうをたおした!</span>`,'.message3',"",3000);
                            callback(gogogo,5000);
                            setTimeout(()=>{
                                changeTrue();
                                enterKey = 0;
                            },8000);
                        }else{
                            callback(messageClear123,0);
                            callbackMessage('.message1',`<span class="message-text">ジーズの こうげき！ かいしんのいちげき！りゅうおうに${criticalAttack1}のダメージ</span>`,messageClear23,300);
                            damageBgm('.game-enemy img#ryuou','damage',caBgm,400);
                            classListRemove1('.game-enemy img#ryuou','damage',600);
                            setTimeout(()=>{
                                enterKey = 0;
                            },2000);
                        }
                    } else {
                        const attack1 = Math.floor((Math.random() + 1) * 15);
                        enemyHp = enemyHp - attack1;
                        if(enemyHp < 0){
                            callback(messageClear123,0);
                            callbackMessage('.message1',`<span class="message-text">ジーズの こうげき！ りゅうおうに${attack1}のダメージ</span>`,messageClear23,300);
                            damageBgm('.game-enemy img#ryuou','damage',aBgm,400);
                            classListRemove1('.game-enemy img#ryuou','damage',600);
                            classListAdd1('.game-enemy img#ryuou','death',700);
                            message12('.message2',`<span class="dead-text">りゅうおうをたおした!</span>`,'.message3',"",3000);
                            callback(gogogo,5000);
                            setTimeout(()=>{
                                changeTrue();
                                enterKey = 0;
                            },8000);
                        }else{
                            callback(messageClear123,0);
                            callbackMessage('.message1',`<span class="message-text">ジーズの こうげき！ りゅうおうに${attack1}のダメージ</span>`,messageClear23,300);
                            damageBgm('.game-enemy img#ryuou','damage',aBgm,400);
                            classListRemove1('.game-enemy img#ryuou','damage',600);
                            setTimeout(()=>{
                                enterKey = 0;
                            },2000);
                        }
                    }
                }else if(braveId1 == 0 && enemyId1 == 0 || braveId1 == 1 && enemyId1 == 1 || braveId1 == 2 && enemyId1 == 2){
                    callback(messageClear123,0);
                    callbackMessage('.message1','<span class="message-text">ジーズの こうげき！ ミス！</span>',messageClear23,300);
                    setTimeout(()=>{
                            enterKey = 0;
                        },2000);
                }else if(braveId1 == 0 && enemyId1 == 2){
                    callback(messageClear123,0);
                    message1('.message1',`<span class="message-text">ジーズの こうげき！ りゅうおうはかわした！</span>`,300);
                    message1('.message2',`<span class="message-text">りゅうおうのはんげき！ ジーズはひらりとみをかわした</span>`,2000);
                    setTimeout(()=>{
                        enterKey = 0;
                    },4000);
                }else{
                    const enemyAttack1 = Math.floor(Math.random() * 15 + 10);
                    braveHp = braveHp - enemyAttack1;
                    if(braveHp < 0 ){
                        callback(messageClear123,0);
                        message1('.message1',`<span class="message-text">ジーズの こうげき！ りゅうおうはかわした！</span>`,300);
                        message1('.message2',`<span class="message-text">りゅうおうのはんげき！ ジーズは${enemyAttack1}のダメージをうけた</span>`,2000);
                        damageBgm('.game-window','damage',eaBgm,2100);
                        classListRemove1('.game-window','damage',2300);
                        death('dead','.brave-profile','.game-menu','#message','#hitPoint',"0",3200);
                        message1('.message3',`<span class="dead-text">ジーズはしんでしまった...</span>`,5000);
                        classListRemove1('.restart-go','none',6500);
                    }else if(braveHp >= 1 && braveHp <= 30){
                        callback(messageClear123,0);
                        message1('.message1',`<span class="message-text">ジーズの こうげき！ りゅうおうはかわした！</span>`,300);
                        message1('.message2',`<span class="message-text">りゅうおうのはんげき！ ジーズは${enemyAttack1}のダメージをうけた</span>`,2000);
                        damageBgm('.game-window','damage',eaBgm,2100);
                        classListRemove1('.game-window','damage',2300);
                        pinch('pinch','.brave-profile','.game-menu','#message','#hitPoint','.message3',`${braveHp}`,"",3200);
                        setTimeout(()=>{
                            enterKey = 0;
                        },5000);
                    }else{
                        callback(messageClear123,0);
                        message1('.message1',`<span class="message-text">ジーズの こうげき！ りゅうおうはかわした！</span>`,300);
                        message1('.message2',`<span class="message-text">りゅうおうのはんげき！ ジーズは${enemyAttack1}のダメージをうけた</span>`,2000);
                        damageBgm('.game-window','damage',eaBgm,2100);
                        classListRemove1('.game-window','damage',2300);
                        message1('#hitPoint',`${braveHp}`,3200);
                        setTimeout(()=>{
                            enterKey = 0;
                        },5000);
                    }
                }
                break;
            case 2: //ぼうぎょ
                document.querySelector('.message1').innerHTML = `<span class="message-text">ジーズは みをまもっている！</span>`;
                document.querySelector('.message2').innerHTML = `<span class="message-text"></span>`;
                setTimeout(()=>{
                    enterKey = 0;
                },3000);
                break;
            case 3: //どうぐ
                document.querySelector('.message1').innerHTML = `<span class="message-text">しかし　なにももっていなかった...</span>`;
                document.querySelector('.message2').innerHTML = `<span class="message-text"></span>`;
                setTimeout(()=>{
                    enterKey = 0;
                },3000);
                break;
            case 4: //にげる
                document.querySelector('.message1').innerHTML = `<span class="message-text">しかし　まわりこまれてしまった！</span>`;
                document.querySelector('.message2').innerHTML = `<span class="message-text"></span>`;
                setTimeout(()=>{
                    enterKey = 0;
                },3000);
                break;
            default:
                break;
        }
    }else{
        return;
    }
}

// りゅうおう（真）戦の戦闘関数
function ryuouTrueBattle(command_id){
    if(enterKey == 1){
        switch (command_id) {
            case 1: //たたかう
                let braveHp = parseInt(document.getElementById('hitPoint').textContent);
                const janken = [
                    'グー',
                    'チョキ',
                    'パー',
                ];
                const enemyId2 = Math.floor(Math.random() * janken.length);
                const braveId2 = Math.floor(Math.random() * janken.length);
                if(braveId2 == 0 && enemyId2 == 1 || braveId2 == 1 && enemyId2 == 2 || braveId2 == 2 && enemyId2 == 0){
                    if(braveId2 == 0){

                        const criticalAttack2 = Math.floor((Math.random() + 2) * 30);
                        enemyHp = enemyHp - criticalAttack2;
                        if(enemyHp < 0){
                            callback(messageClear123,0);
                            callbackMessage('.message1',`<span class="message-text">ジーズの こうげき！ かいしんのいちげき！りゅうおうに${criticalAttack2}のダメージ</span>`,messageClear23,300);
                            damageBgm('.game-enemy img#ryuouTrue','damage',caBgm,400);
                            classListRemove1('.game-enemy img#ryuouTrue','damage',600);
                            classListAdd1('.game-enemy img#ryuouTrue','death',700);
                            message12('.message2',`<span class="dead-text">りゅうおうをたおした!</span>`,'.message3',"",3000);
                            classListAddRemove('.game-window','none','.ending','none',6000);
                            message1('.ending-text1',`<span class="ending-text">まばゆい　ひかりが　あふれだす……</span>`,7000);
                            message1('.ending-text2',`<span class="ending-text">せかいに　へいわが　もどったのだ！</span>`,12000);
                            classListRemove1('.restart','none',15000);
                        }else{
                            callback(messageClear123,0);
                            callbackMessage('.message1',`<span class="message-text">ジーズの こうげき！ かいしんのいちげき！りゅうおうに${criticalAttack2}のダメージ</span>`,messageClear23,300);
                            damageBgm('.game-enemy img#ryuouTrue','damage',caBgm,400);
                            classListRemove1('.game-enemy img#ryuouTrue','damage',600);
                            setTimeout(()=>{
                                enterKey = 0;
                            },2000);
                        }
                    } else {
                        const attack2 = Math.floor((Math.random() + 1) * 15);
                        enemyHp = enemyHp - attack2;
                        if(enemyHp < 0){
                            callback(messageClear123,0);
                            callbackMessage('.message1',`<span class="message-text">ジーズの こうげき！ りゅうおうに${attack2}のダメージ</span>`,messageClear23,300);
                            damageBgm('.game-enemy img#ryuouTrue','damage',aBgm,400);
                            classListRemove1('.game-enemy img#ryuouTrue','damage',600);
                            classListAdd1('.game-enemy img#ryuouTrue','death',700);
                            message12('.message2',`<span class="dead-text">りゅうおうをたおした!</span>`,'.message3',"",3000);
                            classListAddRemove('.game-window','none','.ending','none',6000);
                            message1('.ending-text1',`<span class="ending-text">まばゆい　ひかりが　あふれだす……</span>`,7000);
                            message1('.ending-text2',`<span class="ending-text">せかいに　へいわが　もどったのだ！</span>`,12000);
                            classListRemove1('.restart','none',15500);
                        }else{
                            callback(messageClear123,0);
                            callbackMessage('.message1',`<span class="message-text">ジーズの こうげき！ りゅうおうに${attack2}のダメージ</span>`,messageClear23,300);
                            damageBgm('.game-enemy img#ryuouTrue','damage',aBgm,400);
                            classListRemove1('.game-enemy img#ryuouTrue','damage',600);
                            setTimeout(()=>{
                                enterKey = 0;
                            },2000);
                        }
                    }
                }else if(braveId2 == 0 && enemyId2 == 0 || braveId2 == 1 && enemyId2 == 1 || braveId2 == 2 && enemyId2 == 2){
                    callback(messageClear123,0);
                    callbackMessage('.message1','<span class="message-text">ジーズの こうげき！ ミス！</span>',messageClear23,300);
                    setTimeout(()=>{
                            enterKey = 0;
                        },2000);
                }else if(braveId2 == 0 && enemyId2 == 2){
                    callback(messageClear123,0);
                    message1('.message1',`<span class="message-text">ジーズの こうげき！ りゅうおうはかわした！</span>`,300);
                    message1('.message2',`<span class="message-text">りゅうおうのはんげき！ ジーズはひらりとみをかわした</span>`,2000);
                    setTimeout(()=>{
                        enterKey = 0;
                    },4000);
                }else{
                    const enemyAttack2 = Math.floor(Math.random() * 15 + 15);
                    braveHp = braveHp - enemyAttack2;
                    if(braveHp < 0 ){
                        callback(messageClear123,0);
                        message1('.message1',`<span class="message-text">ジーズの こうげき！ りゅうおうはかわした！</span>`,300);
                        message1('.message2',`<span class="message-text">りゅうおうのはんげき！ ジーズは${enemyAttack2}のダメージをうけた</span>`,2000);
                        damageBgm('.game-window','damage',eaBgm,2100);
                        classListRemove1('.game-window','damage',2300);
                        death('dead','.brave-profile','.game-menu','#message','#hitPoint',"0",3200);
                        message1('.message3',`<span class="dead-text">ジーズはしんでしまった...</span>`,5000);
                        classListRemove1('.restart-go','none',6500);
                    }else if(braveHp >= 1 && braveHp <= 30){
                        callback(messageClear123,0);
                        message1('.message1',`<span class="message-text">ジーズの こうげき！ りゅうおうはかわした！</span>`,300);
                        message1('.message2',`<span class="message-text">りゅうおうのはんげき！ ジーズは${enemyAttack2}のダメージをうけた</span>`,2000);
                        damageBgm('.game-window','damage',eaBgm,2100);
                        classListRemove1('.game-window','damage',2300);
                        pinch('pinch','.brave-profile','.game-menu','#message','#hitPoint','.message3',`${braveHp}`,"",3200);
                        setTimeout(()=>{
                            enterKey = 0;
                        },5000);
                    }else{
                        callback(messageClear123,0);
                        message1('.message1',`<span class="message-text">ジーズの こうげき！ りゅうおうはかわした！</span>`,300);
                        message1('.message2',`<span class="message-text">りゅうおうのはんげき！ ジーズは${enemyAttack2}のダメージをうけた</span>`,2000);
                        damageBgm('.game-window','damage',eaBgm,2100);
                        classListRemove1('.game-window','damage',2300);
                        message1('#hitPoint',`${braveHp}`,3200);
                        setTimeout(()=>{
                            enterKey = 0;
                        },5000);
                    }
                }
                break;
            case 2: //ぼうぎょ
                document.querySelector('.message1').innerHTML = `<span class="message-text">ジーズは みをまもっている！</span>`;
                document.querySelector('.message2').innerHTML = `<span class="message-text"></span>`;
                setTimeout(()=>{
                    enterKey = 0;
                },3000);
                break;
            case 3: //どうぐ
                document.querySelector('.message1').innerHTML = `<span class="message-text">しかし　なにももっていなかった...</span>`;
                document.querySelector('.message2').innerHTML = `<span class="message-text"></span>`;
                setTimeout(()=>{
                    enterKey = 0;
                },3000);
                break;
            case 4: //にげる
                document.querySelector('.message1').innerHTML = `<span class="message-text">しかし　まわりこまれてしまった！</span>`;
                document.querySelector('.message2').innerHTML = `<span class="message-text"></span>`;
                setTimeout(()=>{
                    enterKey = 0;
                },3000);
                break;
            default:
                break;
        }
    }else{
        return;
    }
}