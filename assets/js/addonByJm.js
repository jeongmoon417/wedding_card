/**
 * 기존 템플릿에 추가하는 소스들
 */

// audio가 load 될 때 자동재생 됨
var audio = new Audio('audio/song1.mp3');
audio.autoplay = true;

$(document).ready(function(){
	
	$('#mainImg').sakura();
	
	//alert('hi');
	audio.play();
});

function playBgMusic(){
	 if( audio.paused )
		 audio.play();
	  else
		  audio.pause();
}