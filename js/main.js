let menuId = 0;
let answerYesCount = 0;
let answerNoCount = 0;
let enterKey = 0;

function startMessage(){
	setTimeout(()=>{
		document.querySelector('.message2').innerHTML = `<span class="message-text">どうじゃ？　わしの　みかたになるか？</span>`;
	}, 2000);
	setTimeout(()=>{
		document.querySelector('.game-enemy').classList.add('choices');
		document.querySelector('.blackboard-answer').classList.remove('none');
	},3500);
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

function doAnswer(command_id){
	switch (command_id) {
		case 1: //はい
			answerYesCount += 1;
			if(enterKey == 1){
				if(answerYesCount == 1){
					setTimeout(()=>{
						document.querySelector('.message1').innerHTML = `<span class="message-text">ほんとうだな？</span>`;
						document.querySelector('.message2').innerHTML = "";
					},0);
					setTimeout(()=>{
						document.querySelector('.game-enemy').classList.add('choices');
						document.querySelector('.blackboard-answer').classList.remove('none');
					},1200);
				}
			}else if(enterKey == 2){
				if(answerYesCount == 2){
					setTimeout(()=>{
						document.querySelector('.message1').innerHTML = `<span class="message-text">では　せかいのはんぶん　やみのせかいを　あたえよう！</span>`;
					},0);
					setTimeout(()=>{
						document.querySelector('.message2').innerHTML = `<span class="message-text slowly">おまえの　たびは　おわった</span>`;
					},2000);
					setTimeout(()=>{
						// document.querySelector('.message3').classList.add('slowly');
						document.querySelector('.message3').innerHTML = `<span class="message-text slowly">さあ　ゆっくり　やすむがよい！　わあっはっはっはっ</span>`;
					},3500);
					setTimeout(()=>{
						document.querySelector('.question-mode').classList.add('game-over');
					},5000);
					setTimeout(()=>{
						document.querySelector('.question-mode').classList.add('none');
					},8500);
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
					setTimeout(()=>{
						document.querySelector('.message1').innerHTML = `<span class="message-text">このわしをたおすというのだな！</span>`;
						document.querySelector('.message2').innerHTML = "";
					},0);
					setTimeout(()=>{
						document.querySelector('.message2').innerHTML = `<span class="message-text">おろかものめ！　おもいしるがよいっ！</span>`;
					},1200);
					setTimeout(()=>{
						document.querySelector('.question-mode').classList.add('mode-change');
					},2500);
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
					setTimeout(()=>{
						document.querySelector('.message1').innerHTML = `<span class="message-text">やはり　このわしをたおすというのだな！</span>`;
						document.querySelector('.message2').innerHTML = "";
					},0);
					setTimeout(()=>{
						document.querySelector('.message2').innerHTML = `<span class="message-text">おろかものめ！　おもいしるがよいっ！</span>`;
					},1200);
					setTimeout(()=>{
						document.querySelector('.question-mode').classList.add('mode-change');
					},2500);
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