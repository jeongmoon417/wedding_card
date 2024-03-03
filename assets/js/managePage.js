/*********************************
 * 기존 템플릿에 추가하는 소스들
 * 
 *********************************/

const accountCopyBtn = document.querySelectorAll('.account-copy-btn');
const shareLinkCopy = document.getElementById('share-link-copy');

//const audio = new Audio('audio/song2.mp3');		//audio가 load 될 때 자동재생 됨
//audio.autoplay = true;

$(document).ready(function(){
	
	//초기화
	init();
	
	//디데이 셋팅
	setDDay();
	
	//갤러리 초기화
	setPhotoWwipe();

	
	
});

/**
 * 초기화
 */
function init() {
	$('#shareMessage').val("6월 29일 (토) 12시 30분 \n더채플앳논현 5층 라메르홀");
	$('#shareTitle').val("양경환 ♥ 이정문 결혼합니다.");
	
	/*$('#myTest').click(function(){
       alert('https://jeongmoon417.github.io/wedding_card/' + $('input[name="cardType"]:checked').val())
  
    });*/
}

/**
 * 디데이 셋팅
 * @returns
 */
function setDDay(){
	const today = new Date();
	const dday = new Date("Jun 29,2024, 00:00:00");
	let gap = dday - today;
	
	const dayGap = Math.ceil(gap / (1000*60*60*24));
	var dDayText = dayGap + "일 남았습니다.";
	
	$("#calDiv").append("<h3 style='color: #aeaeae;'>" + dDayText + "</h3>");
	
}

/**
 * 사진 초기화
 * @returns
 */
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
  
    });

    /* Browser resized 
    -----------------------------------------*/
    $( window ).resize(function() {
        var currentPageNo = $(".cd-hero-slider li.selected .js-tm-page-content").data("page-no");
        
    });

    // Remove preloader (https://ihatetomatoes.net/create-custom-preloading-screen/)
    $('body').addClass('loaded');
}

function shareKakao() {
	
	//alert('hi');
	
	Kakao.Share.sendCustom({
        templateId: 104956,
        templateArgs: {
        	TITLE: $('#shareTitle').val(),
        	MASSAGE: $('#shareMessage').val(),
        	PATH: 'wedding_card/' + $('input[name="cardType"]:checked').val(),
        	IMG : 'https://jeongmoon417.github.io/wedding_card/images/banner' + ($('input[name="cardType"]:checked').val()=="index.html" ? '' : '2') + '.jpg',
        },   
    });
}


accountCopyBtn.forEach((e, index) => {
	e.addEventListener('click', () => {
    window.navigator.clipboard.writeText(
      accountCopyBtn[index].parentElement.querySelector('.col-1').textContent
       + ' ' +  accountCopyBtn[index].parentElement.querySelector('.col-2').textContent.replaceAll('-', '')
    ).then(
      () => {
        alert(`계좌번호가 복사되었습니다.`);
      },
      () => {
        try {
          const tempAccountText = document.createElement("textarea");
          tempAccountText.value = accountCopyBtn[index].parentElement.querySelector('.col-1').textContent
              + ' ' + accountCopyBtn[index].parentElement.querySelector('.col-2').textContent.replaceAll('-', '');
          tempAccountText.style.cssText = "position:absolute;left:-9999px;top:-9999px";
          document.body.appendChild(tempAccountText);
          tempAccountText.select();
          document.execCommand("copy");
          alert(`계좌번호가 복사되었습니다.`);
        } catch(err) {
          alert(`계좌 복사 실패 (${err})! 연락처로 문의 부탁드립니다!`);
        }

        document.body.removeChild(tempAccountText);
      }
    );
  });
});

shareLinkCopy.addEventListener('click', () => {
  window.navigator.clipboard.writeText(document.location.href).then(
    () => {
      alert('주소가 클립보드에 복사되었습니다.');
    },
    () => {
      try {
        const tempShareLink = document.createElement("textarea");
        tempShareLink.value = document.location.href;
        tempShareLink.style.cssText = "position:absolute;left:-9999px;top:-9999px";
        document.body.appendChild(tempShareLink);
        tempShareLink.select();
        document.execCommand("copy");
        alert('주소가 클립보드에 복사되었습니다.');
      } catch(err) {
        alert(`주소 복사 실패 (${err})! 아래 연락처로 문의 부탁드립니다!`);
      }

      document.body.removeChild(tempShareLink);
    }
  );
});

Kakao.init('199d271581eb40b8d632a008fdd8fe11');

Kakao.Share.createDefaultButton({
		container: '#kakaotalk-sharing-btn',
		objectType: 'feed',
		content: {
		    title: $('#shareTitle').val(),
		    description: $('#shareMessage').val(),
		    imageUrl:
		      'https://jeongmoon417.github.io/wedding_card/images/banner' + ($('input[name="cardType"]:checked').val()=="index.html" ? '' : '2') + '.jpg',
		    link: {
		      mobileWebUrl: 'https://jeongmoon417.github.io/wedding_card/' + $('input[name="cardType"]:checked').val(),
		      webUrl: 'https://jeongmoon417.github.io/wedding_card' + $('input[name="cardType"]:checked').val()
		    },
	    },
    buttons: [
      {
        title: '모바일 청첩장 보기',
        link: {
          mobileWebUrl: 'https://jeongmoon417.github.io/wedding_card/' + $('input[name="cardType"]:checked').val(),
          webUrl: 'https://jeongmoon417.github.io/wedding_card/' + $('input[name="cardType"]:checked').val(),
        },
      }
    ],
});







