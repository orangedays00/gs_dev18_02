let menuTryId = 0;

const kingMessage = ()=>{
	setTimeout(()=>{
		document.querySelector('.retry-question .message1').innerHTML = `<span class="message-text">おお！ジーズよ！　じぶんの　よくぼうに　まけるとは　なさけない</span>`;
    }, 1500);
    setTimeout(()=>{
		document.querySelector('.retry-question .message2').innerHTML = `<span class="message-text">あらためて　りゅうおうに　いどむきもちは　あるか？</span>`;
    }, 3500);
}


function retryAnswer(){
	switch (event.key) {
		case "ArrowLeft": //カーソルキーの左
			break;
		case "ArrowUp": //カーソルキーの上
			if (menuTryId <= 1) {
				retrySelect(2);
			} else {
				retrySelect(menuTryId - 1);
			}
			break;
		case "ArrowRight": //カーソルキーの右
			break;
		case "ArrowDown": //カーソルキーの下
			if (menuTryId >= 2) {
				retrySelect(1);
			} else {
				retrySelect(menuTryId + 1);
			}
			break;
		case "Enter": //エンターキー
			doRetryAnswer(menuTryId);
			break;
		default: //その他の場合はキーコードを表示
			break;
	}
}


function retrySelect(id){
	if (menuTryId == id) {
		//前回と同じメニューが選ばれた場合はコマンドを実行
		doRetryAnswer(id);
	} else {
		if (menuTryId != 0) {
			//現在のメニューのカーソルを消す
			document.getElementById('retryAnswer' + menuTryId).className = 'menu';
		}
		//今回選ばれたメニューにカーソルを表示
		document.getElementById('retryAnswer' + id).className = 'menu menu-active';
		menuTryId = id;
	}
}

function doRetryAnswer(command_id){
	switch (command_id) {
		case 1: //はい
			setTimeout(()=>{
				document.querySelector('.retry-question .message1').innerHTML = `<span class="message-text">さすがだ　ジーズ！　きたいしているぞ！</span>`;
				document.querySelector('.retry-question .message2').innerHTML = "";
            },0);
            setTimeout(()=>{
                document.querySelector('.retry').classList.add('game-over');
            },2000);
            setTimeout(()=>{
                document.querySelector('.retry').classList.add('none');
            },5500);
			setTimeout(()=>{
                location.reload();
            }, 5500);
			break;
		case 2: //いいえ
        setTimeout(()=>{
            document.querySelector('.retry-question .message1').innerHTML = `<span class="message-text">そうか...　つぎのゆうしゃに　きたいしよう...</span>`;
            document.querySelector('.retry-question .message2').innerHTML = "";
            },0);
            setTimeout(()=>{
                document.querySelector('.retry').classList.add('game-over');
            },2000);
            setTimeout(()=>{
                document.querySelector('.retry').classList.add('none');
                document.querySelector('.game-over-end').classList.remove('none');
            },5500);
				break;
		default:
			break;
	}
}