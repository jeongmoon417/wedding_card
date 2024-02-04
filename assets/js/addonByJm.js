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
	
	setPhotoWwipe();
	
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

function setPhotoWwipe(){
	$('.gallery-one').magnificPopup({
        delegate: 'a', // child items selector, by clicking on it popup will open
        type: 'image',
        gallery:{enabled:true}                
    });
	
	/* Collapse menu after click 
    -----------------------------------------*/
    $('#tmNavbar a').click(function(){
        $('#tmNavbar').collapse('hide');

       // adjustHeightOfPage($(this).data("no")); // Adjust page height       
    });

    /* Browser resized 
    -----------------------------------------*/
    $( window ).resize(function() {
        var currentPageNo = $(".cd-hero-slider li.selected .js-tm-page-content").data("page-no");
        
        // wait 3 seconds
        setTimeout(function() {
            adjustHeightOfPage( currentPageNo );
        }, 1000);
        
    });

    // Remove preloader (https://ihatetomatoes.net/create-custom-preloading-screen/)
    $('body').addClass('loaded');
}