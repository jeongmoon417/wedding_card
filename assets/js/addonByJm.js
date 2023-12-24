/**
 * 기존 템플릿에 추가하는 소스들
 */

// audio가 load 될 때 자동재생 됨
var audio = new Audio('audio/song1.mp3');
audio.autoplay = true;

$(document).ready(function(){
	
	// 꽃잎 내리는 효과
	$('#mainImg').sakura();
	
	//alert('hi');
	audio.play();
	
	setDDay();
	
});

function playBgMusic(){
	 if( audio.paused )
		 audio.play();
	  else
		  audio.pause();
}

function setDDay(){
	const today = new Date();
	const dday = new Date("Jun 29,2024, 00:00:00");
	let gap = dday - today;
	
	const dayGap = Math.ceil(gap / (1000*60*60*24));
	var dDayText = dayGap + "일 남았습니다.";
	
	$("#calDiv").append("<h3 style='color: #aeaeae;'>" + dDayText + "</h3>");
	
}

function callMapApi() {
	
	const userAgent = navigator.userAgent.toLowerCase(); //userAgent 문자열 값 받아오기

	if (userAgent.indexOf("android") > -1) {    
	   //안드로이드일 때 실행할 동작
		alert('Android');
		location.href = "intent://place?lat=37.4979502&lng=127.0276368&name=%EA%B2%BD%EA%B8%B0%EB%8F%84%20%EC%84%B1%EB%82%A8%EC%8B%9C%20%EB%B6%84%EB%8B%B9%EA%B5%AC%20%EC%A0%95%EC%9E%90%EB%8F%99&appname=com.example.myapp#Intent;scheme=nmap;action=android.intent.action.VIEW;category=android.intent.category.BROWSABLE;package=com.nhn.android.nmap;end";
	} else if (
	  	userAgent.indexOf("iphone") > -1 ||
	    userAgent.indexOf("ipad") > -1 || 
	    userAgent.indexOf("ipod") > -1 
	  ) {   	
	  //IOS일 때 실행할 동작
	   alert('ios');
	} else {    
	  //아이폰, 안드로이드가 아닐 때 실행할 동작
		alert('other');
	}
}