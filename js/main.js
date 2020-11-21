let menuId = 0;
let answerYesCount = 0;
let answerNoCount = 0;
let enterKey = 0;

function startMessage(){
	message1('.message2',`<span class="message-text">どうじゃ？　わしの　みかたになるか？</span>`,2000);
	classListAddRemove('.game-enemy','choices','.blackboard-answer','none',3500);
}



function questionAnswer(){
	switch (event.key) {
		case "ArrowLeft": //カーソルキーの左
			break;
		case "ArrowUp": //カーソルキーの上
			if (menuId <= 1) {
				questionSelect(2);
			} else {
				questionSelect(menuId - 1);
			}
			break;
		case "ArrowRight": //カーソルキーの右
			break;
		case "ArrowDown": //カーソルキーの下
			if (menuId >= 2) {
				questionSelect(1);
			} else {
				questionSelect(menuId + 1);
			}
			break;
		case "Enter": //エンターキー
			enterKey = enterKey + 1;
			document.querySelector('.game-enemy').classList.remove('choices');
			document.querySelector('.blackboard-answer').classList.add('none');
			doAnswer(menuId);
			break;
		default: //その他の場合
			break;
	}
}
function questionSelect(id){
	if (menuId == id) {
		//前回と同じメニューが選ばれた場合はコマンドを実行
		doAnswer(id);
	} else {
		if (menuId != 0) {
			//現在のメニューのカーソルを消す
			document.getElementById('blackboardAnswer' + menuId).className = 'menu';
		}
		//今回選ばれたメニューにカーソルを表示
		document.getElementById('blackboardAnswer' + id).className = 'menu menu-active';
		menuId = id;
	}
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

function classListAddRemove(qs1,cla1,qs2,clr1,time){
	setTimeout(()=>{
		document.querySelector(qs1).classList.add(cla1);
		document.querySelector(qs2).classList.remove(clr1);
	},time);
}

function doAnswer(command_id){
	switch (command_id) {
		case 1: //はい
			answerYesCount += 1;
			if(enterKey == 1){
				if(answerYesCount == 1){
					message12('.message1',`<span class="message-text">ほんとうだな？</span>`,'.message2',"",0);
					classListAddRemove('.game-enemy','choices','.blackboard-answer','none',1200);
				}
			}else if(enterKey == 2){
				if(answerYesCount == 2){
					message1('.message1',`<span class="message-text">では　せかいのはんぶん　やみのせかいを　あたえよう！</span>`,0);
					message1('.message2',`<span class="message-text slowly">おまえの　たびは　おわった</span>`,2000);
					message1('.message3',`<span class="message-text slowly">さあ　ゆっくり　やすむがよい！　わあっはっはっはっ</span>`,3500);
					classListAdd1('.question-mode','game-over',5000);
					classListAdd1('.question-mode','none',8500);
					setTimeout(()=>{
						document.querySelector('.retry').classList.remove('none');
						kingMessage();
					},8500);
				}else{
					break;
				}
			}
			break;
		case 2: //いいえ
			answerNoCount += 1;
			if(enterKey == 1){
				if(answerNoCount == 1){
					message12('.message1',`<span class="message-text">このわしをたおすというのだな！</span>`,'.message2',"",0);
					message1('.message2',`<span class="message-text">おろかものめ！　おもいしるがよいっ！</span>`,1200);
					classListAdd1('.question-mode','mode-change',2500);
					setTimeout(()=>{
						document.querySelector('.question-mode').classList.add('none');
						history.pushState(null, null, "/gs_dev18_02/battle.html");
					},4000);
					setTimeout(()=>{
						window.location.reload();
					},4200);
				}else{
					break;
				}
			}else if(enterKey == 2){
				if(answerYesCount == 1 && answerNoCount == 1){
					message12('.message1',`<span class="message-text">やはり　このわしをたおすというのだな！</span>`,'.message2',"",0);
					message1('.message2',`<span class="message-text">おろかものめ！　おもいしるがよいっ！</span>`,1200);
					classListAdd1('.question-mode','mode-change',2500);
					setTimeout(()=>{
						document.querySelector('.question-mode').classList.add('none');
						history.pushState(null, null, "/gs_dev18_02/battle.html");
					},4000);
					setTimeout(()=>{
						window.location.reload();
					},4200);
				}else{
					break;
				}
			}
				break;
		default:
			break;
	}
}