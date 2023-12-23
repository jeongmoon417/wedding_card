/**
 * 기존 템플릿에 추가하는 소스들
 */

// audio가 load 될 때 자동재생 됨
var audio = new Audio('audio/song1.mp3');
audio.autoplay = true;

//페이지 로드 시 실행할 코드 구현
$(document).ready(function(){
	//audio.play();
	//alert('hi');
	audio.play();
});

function playBgMusic(){
	 if( audio.paused )
		 audio.play();
	  else
		  audio.pause();
}