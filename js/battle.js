let menu_id = 0;
let enterKey = 0;
let enemyHp = 30;

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

// りゅうおう戦の戦闘関数
function ryuouBattle(command_id){
    let audioElem1;
    const aBgm = "https://orangedays00.github.io/gs_dev18_02/music/katana-slash5.mp3";
    const caBgm = "https://orangedays00.github.io/gs_dev18_02/music/katana-slash2.mp3";
    const eaBgm = "https://orangedays00.github.io/gs_dev18_02/music/punch-heavy2.mp3";
    const playAttackBgm = (filename) => {
        audioElem1 = new Audio();
        audioElem1.src = filename;
        audioElem1.play();
    }
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
                console.log(`りゅうおう：${enemyId1}`);
                console.log(`ジーズ：${braveId1}`);
                if(braveId1 == 0 && enemyId1 == 1 || braveId1 == 1 && enemyId1 == 2 || braveId1 == 2 && enemyId1 == 0){
                    if(braveId1 == 0){

                        const criticalAttack1 = Math.floor((Math.random() + 2) * 30);
                        enemyHp = enemyHp - criticalAttack1;
                        if(enemyHp < 0){
                            setTimeout(()=>{
                                messageClear123();
                            },0);
                            setTimeout(()=>{
                                document.querySelector('.message1').innerHTML = `<span class="message-text">ジーズの こうげき！ かいしんのいちげき！りゅうおうに${criticalAttack1}のダメージ</span>`;
                                messageClear23();
                                console.log(enemyHp);
                            },300);
                            setTimeout(()=>{
                                document.querySelector('.game-enemy img#ryuou').classList.add('damage');
                                playAttackBgm(caBgm);
                            },400);
                            setTimeout(()=>{
                                document.querySelector('.game-enemy img#ryuou').classList.remove('damage');
                            },600);
                            setTimeout(()=>{
                                document.querySelector('.game-enemy img#ryuou').classList.add('death');
                            },700);
                            setTimeout(()=>{
                                document.querySelector('.message2').innerHTML = `<span class="dead-text">りゅうおうをたおした!</span>`;
                                document.querySelector('.message3').innerHTML = "";
                            },3000);
                            setTimeout(()=>{
                                gogogo();
                            },5000);
                            setTimeout(()=>{
                                changeTrue();
                                enterKey = 0;
                            },8000);
                        }else{
                            setTimeout(()=>{
                                messageClear123();
                            },0);
                            setTimeout(()=>{
                                document.querySelector('.message1').innerHTML = `<span class="message-text">ジーズの こうげき！ かいしんのいちげき！りゅうおうに${criticalAttack1}のダメージ</span>`;
                                messageClear23();
                                console.log(enemyHp);
                            },300);
                            setTimeout(()=>{
                                document.querySelector('.game-enemy img#ryuou').classList.add('damage');
                                playAttackBgm(caBgm);
                            },400);
                            setTimeout(()=>{
                                document.querySelector('.game-enemy img#ryuou').classList.remove('damage');
                            },600);
                            setTimeout(()=>{
                                enterKey = 0;
                            },2000);
                        }
                    } else {
                        const attack1 = Math.floor((Math.random() + 1) * 15);
                        enemyHp = enemyHp - attack1;
                        if(enemyHp < 0){
                            setTimeout(()=>{
                                messageClear123();
                            },0);
                            setTimeout(()=>{
                                document.querySelector('.message1').innerHTML = `<span class="message-text">ジーズの こうげき！ りゅうおうに${attack1}のダメージ</span>`;
                                messageClear23();
                                console.log(enemyHp);
                            },300);
                            setTimeout(()=>{
                                document.querySelector('.game-enemy img#ryuou').classList.add('damage');
                                playAttackBgm(aBgm);
                            },400);
                            setTimeout(()=>{
                                document.querySelector('.game-enemy img#ryuou').classList.remove('damage');
                            },600);
                            setTimeout(()=>{
                                document.querySelector('.game-enemy img#ryuou').classList.add('death');
                            },700);
                            setTimeout(()=>{
                                document.querySelector('.message2').innerHTML = `<span class="dead-text">りゅうおうをたおした</span>`;
                                document.querySelector('.message3').innerHTML = "";
                            },3000);
                            setTimeout(()=>{
                                gogogo();
                            },5000);
                            setTimeout(()=>{
                                changeTrue();
                                enterKey = 0;
                            },8000);
                        }else{
                            setTimeout(()=>{
                                messageClear123();
                            },0);
                            setTimeout(()=>{
                                document.querySelector('.message1').innerHTML = `<span class="message-text">ジーズの こうげき！ りゅうおうに${attack1}のダメージ</span>`;
                                messageClear23();
                                console.log(enemyHp);
                            },300);
                            setTimeout(()=>{
                                document.querySelector('.game-enemy img#ryuou').classList.add('damage');
                                playAttackBgm(aBgm);
                            },400);
                            setTimeout(()=>{
                                document.querySelector('.game-enemy img#ryuou').classList.remove('damage');
                            },600);
                            setTimeout(()=>{
                                enterKey = 0;
                            },2000);
                        }
                    }
                }else if(braveId1 == 0 && enemyId1 == 0 || braveId1 == 1 && enemyId1 == 1 || braveId1 == 2 && enemyId1 == 2){
                    setTimeout(()=>{
                        messageClear123();
                        },0);
                    setTimeout(()=>{
                        document.querySelector('.message1').innerHTML = '<span class="message-text">ジーズの こうげき！ ミス！</span>';
                        messageClear23();
                        },300);
                    setTimeout(()=>{
                            enterKey = 0;
                        },2000);
                }else if(braveId1 == 0 && enemyId1 == 2){
                    setTimeout(()=>{
                        messageClear123();
                    },0);
                    setTimeout(()=>{
                        document.querySelector('.message1').innerHTML = `<span class="message-text">ジーズの こうげき！ りゅうおうはかわした！</span>`;
                    },300);
                    setTimeout(()=>{
                        document.querySelector('.message2').innerHTML = `<span class="message-text">りゅうおうのはんげき！ ジーズはひらりとみをかわした</span>`;
                    },2000);
                    setTimeout(()=>{
                        enterKey = 0;
                    },4000);
                }else{
                    const enemyAttack1 = Math.floor(Math.random() * 15 + 10);
                    braveHp = braveHp - enemyAttack1;
                    if(braveHp < 0 ){
                        setTimeout(()=>{
                            messageClear123();
                        },0);
                        setTimeout(()=>{
                            document.querySelector('.message1').innerHTML = `<span class="message-text">ジーズの こうげき！ りゅうおうはかわした！</span>`;
                        },300);
                        setTimeout(()=>{
                            document.querySelector('.message2').innerHTML = `<span class="message-text">りゅうおうのはんげき！ ジーズは${enemyAttack1}のダメージをうけた</span>`;
                        },2000);
                        setTimeout(()=>{
                            document.querySelector('.game-window').classList.add('damage');
                            playAttackBgm(eaBgm);
                        },2100);
                        setTimeout(()=>{
                            document.querySelector('.game-window').classList.remove('damage');
                        },2300);
                        setTimeout(()=>{
                            document.querySelector('.brave-profile').classList.add('dead');
                            document.querySelector('.game-menu').classList.add('dead');
                            document.getElementById('message').classList.add('dead');
                            document.getElementById('hitPoint').innerHTML = "0";
                        },3200);
                        setTimeout(()=>{
                            document.querySelector('.message3').innerHTML = `<span class="dead-text">ジーズはしんでしまった...</span>`;
                        },5000);
                        setTimeout(()=>{
                            document.querySelector('.restart-go').classList.remove('none');
                        },6500);
                    }else if(braveHp >= 1 && braveHp <= 30){
                        setTimeout(()=>{
                            messageClear123();
                        },0);
                        setTimeout(()=>{
                            document.querySelector('.message1').innerHTML = `<span class="message-text">ジーズの こうげき！ りゅうおうはかわした！</span>`;
                        },300);
                        setTimeout(()=>{
                            document.querySelector('.message2').innerHTML = `<span class="message-text">りゅうおうのはんげき！ ジーズは${enemyAttack1}のダメージをうけた</span>`;
                        },2000);
                        setTimeout(()=>{
                            document.querySelector('.game-window').classList.add('damage');
                            playAttackBgm(eaBgm);
                        },2100);
                        setTimeout(()=>{
                            document.querySelector('.game-window').classList.remove('damage');
                        },2300);
                        setTimeout(()=>{
                            document.querySelector('.brave-profile').classList.add('pinch');
                            document.querySelector('.game-menu').classList.add('pinch');
                            document.getElementById('message').classList.add('pinch');
                            document.getElementById('hitPoint').innerHTML = `${braveHp}`;
                            document.querySelector('.message3').innerHTML = "";
                        },3200);
                        setTimeout(()=>{
                            enterKey = 0;
                        },5000);
                    }else{
                        setTimeout(()=>{
                            messageClear123();
                        },0);
                        setTimeout(()=>{
                            document.querySelector('.message1').innerHTML = `<span class="message-text">ジーズの こうげき！ りゅうおうはかわした！</span>`;
                        },300);
                        setTimeout(()=>{
                            document.querySelector('.message2').innerHTML = `<span class="message-text">りゅうおうのはんげき！ ジーズは${enemyAttack1}のダメージをうけた</span>`;
                        },2000);
                        setTimeout(()=>{
                            document.querySelector('.game-window').classList.add('damage');
                            playAttackBgm(eaBgm);
                        },2100);
                        setTimeout(()=>{
                            document.querySelector('.game-window').classList.remove('damage');
                        },2300);
                        setTimeout(()=>{
                            document.getElementById('hitPoint').innerHTML = `${braveHp}`;
                        },3200);
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
    let audioElem2;
    const aBgm = "https://orangedays00.github.io/gs_dev18_02/music/katana-slash5.mp3";
    const caBgm = "https://orangedays00.github.io/gs_dev18_02/music/katana-slash2.mp3";
    const eaBgm = "https://orangedays00.github.io/gs_dev18_02/music/punch-heavy1.mp3";

    const playAttackBgm = (filename) => {
        audioElem2 = new Audio();
        audioElem2.src = filename;
        audioElem2.play();
    }
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
                const enemyId2 = Math.floor(Math.random() * janken.length);
                const braveId2 = Math.floor(Math.random() * janken.length);
                console.log(`りゅうおう：${enemyId2}`);
                console.log(`ジーズ：${braveId2}`);
                if(braveId2 == 0 && enemyId2 == 1 || braveId2 == 1 && enemyId2 == 2 || braveId2 == 2 && enemyId2 == 0){
                    if(braveId2 == 0){

                        const criticalAttack2 = Math.floor((Math.random() + 2) * 30);
                        enemyHp = enemyHp - criticalAttack2;
                        if(enemyHp < 0){
                            setTimeout(()=>{
                                messageClear123();
                            },0);
                            setTimeout(()=>{
                                document.querySelector('.message1').innerHTML = `<span class="message-text">ジーズの こうげき！ かいしんのいちげき！りゅうおうに${criticalAttack2}のダメージ</span>`;
                                messageClear23();
                                console.log(enemyHp);
                            },300);
                            setTimeout(()=>{
                                document.querySelector('.game-enemy img#ryuouTrue').classList.add('damage');
                                playAttackBgm(caBgm);
                            },400);
                            setTimeout(()=>{
                                document.querySelector('.game-enemy img#ryuouTrue').classList.remove('damage');
                            },600);
                            setTimeout(()=>{
                                document.querySelector('.game-enemy img#ryuouTrue').classList.add('death');
                            },700);
                            setTimeout(()=>{
                                document.querySelector('.message2').innerHTML = `<span class="dead-text">りゅうおうをたおした!</span>`;
                                document.querySelector('.message3').innerHTML = "";
                            },3000);
                            setTimeout(()=>{
                                document.querySelector('.ending').classList.remove('none');
                                document.querySelector('.game-window').classList.add('none');
                            },6000);
                            setTimeout(()=>{
                                document.querySelector('.ending-text1').innerHTML = `<span class="ending-text">まばゆい　ひかりが　あふれだす……</span>`;
                            },7000);
                            setTimeout(()=>{
                                document.querySelector('.ending-text2').innerHTML = `<span class="ending-text">せかいに　へいわが　もどったのだ！</span>`;
                            },12000);
                            setTimeout(()=>{
                                document.querySelector('.restart').classList.remove('none');
                            },15000);
                        }else{
                            setTimeout(()=>{
                                messageClear123();
                            },0);
                            setTimeout(()=>{
                                document.querySelector('.message1').innerHTML = `<span class="message-text">ジーズの こうげき！ かいしんのいちげき！りゅうおうに${criticalAttack2}のダメージ</span>`;
                                messageClear23();
                                console.log(enemyHp);
                            },300);
                            setTimeout(()=>{
                                document.querySelector('.game-enemy img#ryuouTrue').classList.add('damage');
                                playAttackBgm(caBgm);
                            },400);
                            setTimeout(()=>{
                                document.querySelector('.game-enemy img#ryuouTrue').classList.remove('damage');
                            },600);
                            setTimeout(()=>{
                                enterKey = 0;
                            },2000);
                        }
                    } else {
                        const attack2 = Math.floor((Math.random() + 1) * 15);
                        enemyHp = enemyHp - attack2;
                        if(enemyHp < 0){
                            setTimeout(()=>{
                                messageClear123();
                            },0);
                            setTimeout(()=>{
                                document.querySelector('.message1').innerHTML = `<span class="message-text">ジーズの こうげき！ りゅうおうに${attack}のダメージ</span>`;
                                messageClear23();
                                console.log(enemyHp);
                            },300);
                            setTimeout(()=>{
                                document.querySelector('.game-enemy img#ryuouTrue').classList.add('damage');
                                playAttackBgm(aBgm);
                            },400);
                            setTimeout(()=>{
                                document.querySelector('.game-enemy img#ryuouTrue').classList.remove('damage');
                            },600);
                            setTimeout(()=>{
                                document.querySelector('.game-enemy img#ryuouTrue').classList.add('death');
                            },700);
                            setTimeout(()=>{
                                document.querySelector('.message2').innerHTML = `<span class="dead-text">りゅうおうをたおした</span>`;
                                document.querySelector('.message3').innerHTML = "";
                            },3000);
                            setTimeout(()=>{
                                document.querySelector('.ending').classList.remove('none');
                                document.querySelector('.game-window').classList.add('none');
                            },6000);
                            setTimeout(()=>{
                                document.querySelector('.ending-text1').innerHTML = `<span class="ending-text">まばゆい　ひかりが　あふれだす……</span>`;
                            },7000);
                            setTimeout(()=>{
                                document.querySelector('.ending-text2').innerHTML = `<span class="ending-text">せかいに　へいわが　もどったのだ！</span>`;
                            },12000);
                            setTimeout(()=>{
                                document.querySelector('.restart').classList.remove('none');
                            },15500);
                        }else{
                            setTimeout(()=>{
                                messageClear123();
                            },0);
                            setTimeout(()=>{
                                document.querySelector('.message1').innerHTML = `<span class="message-text">ジーズの こうげき！ りゅうおうに${attack2}のダメージ</span>`;
                                messageClear23();
                                console.log(enemyHp);
                            },300);
                            setTimeout(()=>{
                                document.querySelector('.game-enemy img#ryuouTrue').classList.add('damage');
                                playAttackBgm(aBgm);
                            },400);
                            setTimeout(()=>{
                                document.querySelector('.game-enemy img#ryuouTrue').classList.remove('damage');
                            },600);
                            setTimeout(()=>{
                                enterKey = 0;
                            },2000);
                        }
                    }
                }else if(braveId2 == 0 && enemyId2 == 0 || braveId2 == 1 && enemyId2 == 1 || braveId2 == 2 && enemyId2 == 2){
                    setTimeout(()=>{
                        messageClear123();
                        },0);
                    setTimeout(()=>{
                        document.querySelector('.message1').innerHTML = '<span class="message-text">ジーズの こうげき！ ミス！</span>';
                        messageClear23();
                        },300);
                    setTimeout(()=>{
                            enterKey = 0;
                        },2000);
                }else if(braveId2 == 0 && enemyId2 == 2){
                    setTimeout(()=>{
                        messageClear123();
                    },0);
                    setTimeout(()=>{
                        document.querySelector('.message1').innerHTML = `<span class="message-text">ジーズの こうげき！ りゅうおうはかわした！</span>`;
                    },300);
                    setTimeout(()=>{
                        document.querySelector('.message2').innerHTML = `<span class="message-text">りゅうおうのはんげき！ ジーズはひらりとみをかわした</span>`;
                    },2000);
                    setTimeout(()=>{
                        enterKey = 0;
                    },4000);
                }else{
                    const enemyAttack2 = Math.floor(Math.random() * 15 + 15);
                    braveHp = braveHp - enemyAttack2;
                    if(braveHp < 0 ){
                        setTimeout(()=>{
                            messageClear123();
                        },0);
                        setTimeout(()=>{
                            document.querySelector('.message1').innerHTML = `<span class="message-text">ジーズの こうげき！ りゅうおうはかわした！</span>`;
                        },300);
                        setTimeout(()=>{
                            document.querySelector('.message2').innerHTML = `<span class="message-text">りゅうおうのはんげき！ ジーズは${enemyAttack2}のダメージをうけた</span>`;
                        },2000);
                        setTimeout(()=>{
                            document.querySelector('.game-window').classList.add('damage');
                            playAttackBgm(eaBgm);
                        },2100);
                        setTimeout(()=>{
                            document.querySelector('.game-window').classList.remove('damage');
                        },2300);
                        setTimeout(()=>{
                            document.querySelector('.brave-profile').classList.add('dead');
                            document.querySelector('.game-menu').classList.add('dead');
                            document.getElementById('message').classList.add('dead');
                            document.getElementById('hitPoint').innerHTML = "0";
                        },3200);
                        setTimeout(()=>{
                            document.querySelector('.message3').innerHTML = `<span class="dead-text">ジーズはしんでしまった...</span>`;
                        },5000);
                        setTimeout(()=>{
                            document.querySelector('.restart-go').classList.remove('none');
                        },6500);
                    }else if(braveHp >= 1 && braveHp <= 30){
                        setTimeout(()=>{
                            messageClear123();
                        },0);
                        setTimeout(()=>{
                            document.querySelector('.message1').innerHTML = `<span class="message-text">ジーズの こうげき！ りゅうおうはかわした！</span>`;
                        },300);
                        setTimeout(()=>{
                            document.querySelector('.message2').innerHTML = `<span class="message-text">りゅうおうのはんげき！ ジーズは${enemyAttack2}のダメージをうけた</span>`;
                        },2000);
                        setTimeout(()=>{
                            document.querySelector('.game-window').classList.add('damage');
                            playAttackBgm(eaBgm);
                        },2100);
                        setTimeout(()=>{
                            document.querySelector('.game-window').classList.remove('damage');
                        },2300);
                        setTimeout(()=>{
                            document.querySelector('.brave-profile').classList.add('pinch');
                            document.querySelector('.game-menu').classList.add('pinch');
                            document.getElementById('message').classList.add('pinch');
                            document.getElementById('hitPoint').innerHTML = `${braveHp}`;
                            document.querySelector('.message3').innerHTML = "";
                        },3200);
                        setTimeout(()=>{
                            enterKey = 0;
                        },5000);
                    }else{
                        setTimeout(()=>{
                            messageClear123();
                        },0);
                        setTimeout(()=>{
                            document.querySelector('.message1').innerHTML = `<span class="message-text">ジーズの こうげき！ りゅうおうはかわした！</span>`;
                        },300);
                        setTimeout(()=>{
                            document.querySelector('.message2').innerHTML = `<span class="message-text">りゅうおうのはんげき！ ジーズは${enemyAttack2}のダメージをうけた</span>`;
                        },2000);
                        setTimeout(()=>{
                            document.querySelector('.game-window').classList.add('damage');
                            playAttackBgm(eaBgm);
                        },2100);
                        setTimeout(()=>{
                            document.querySelector('.game-window').classList.remove('damage');
                        },2300);
                        setTimeout(()=>{
                            document.getElementById('hitPoint').innerHTML = `${braveHp}`;
                        },3200);
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