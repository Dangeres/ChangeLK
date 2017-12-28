(function (){	
	var name = document.getElementsByClassName('im-page--title-main');
	
	var initList = document.getElementsByClassName('im-chat-input--textarea fl_l _im_text_input _emoji_field_wrap _voice_field_wrap');
	
	console.log('============================================ this app working');
	
	for(var a=0;a<initList.length;a++){
		addButton(initList[a]);
	}
	
	function addButton(path){
		var links = document.createElement('button');
		links.className = "translateBut";
		links.textContent = "Переведи!";
		links.setAttribute("onmouseout","text:'Эта кнопка нужна для перевода с английской на русскую раскладку.'");
		links.addEventListener('click', function(event){
			console.log('click has been count');
			var l = path.textContent.length;
			var goodMSG = document.getElementsByClassName('im_editable im-chat-input--text _im_text')[0].textContent;
			//console.log('Not translated : '+goodMSG);
			//console.log(' Переведенный: '+addTranslation(goodMSG));
			insert(addTranslation(goodMSG));
			//event.respond();
		});
		path.appendChild(links);
	}
	
	function insert(TText){
		var textMSG = document.getElementsByClassName('im_editable im-chat-input--text _im_text');
		textMSG[0].textContent = TText;
		var hide = document.getElementsByClassName('placeholder')[0];
		hide.setAttribute('style','display:none;');
		var change = document.getElementsByClassName('im-send-btn im-chat-input--send _im_send im-send-btn_audio')[0];
		if(change && TText!="") change.className = 'im-send-btn im-chat-input--send _im_send im-send-btn_send';
		//console.log(change);
		//console.log(textMSG[0]);
	}
	
	function addTranslation(message){
		var map = {"q":"й", "w":"ц", "e":"у", "r":"к", "t":"е", "y":"н", "u":"г", 
            "i":"ш", "o":"щ", "p":"з", "[":"х", "]":"ъ", "a":"ф", "s":"ы", 
            "d":"в", "f":"а", "g":"п", "h":"р", "j":"о", "k":"л", "l":"д", 
            ";":"ж", "'":"э", "z":"я", "x":"ч", "c":"с", "v":"м", "b":"и", 
            "n":"т", "m":"ь", ",":"б", ".":"ю", "/":".",
			"Q":"Й", "W":"Ц", "E":"У", "R":"К", "T":"Е", "Y":"Н", "U":"Г", 
            "I":"Ш", "O":"Щ", "P":"З", "{":"Х", "}":"Ъ", "A":"Ф", "S":"Ы", 
            "D":"В", "F":"А", "G":"П", "H":"Р", "J":"О", "K":"Л", "L":"Д", 
            ":":"Ж", '"':"Э", "Z":"Я", "X":"Ч", "C":"С", "V":"М", "B":"И", 
            "N":"Т", "M":"Ь", "<":"Б", ">":"Ю", "?":"?", "&":"?"
		}
		var r = '';
		for (var i = 0; i < message.length; i++) {
			r += map[message.charAt(i)] || message.charAt(i);
		}
		//console.log('Переведенный: '+r);
		return r;
	}
})();