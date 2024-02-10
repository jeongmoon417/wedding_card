/*********************************
 * 기존 템플릿에 추가하는 소스들
 * 
 *********************************/

const accountCopyBtn = document.querySelectorAll('.account-copy-btn');
const shareLinkCopy = document.getElementById('share-link-copy');

const audio = new Audio('audio/song1.mp3');		//audio가 load 될 때 자동재생 됨
audio.autoplay = true;

$(document).ready(function(){
	
	// 꽃잎 내리는 효과
	$('#mainImg').sakura();
	
	//alert('hi');
	audio.play();
	setBgmIcon();
	
	//디데이 셋팅
	setDDay();
	
	//갤러리 초기화
	setPhotoWwipe();
	
	
	
});


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

/**
 * 음악 버튼
 * @returns
 */
function actionToggle() {
	  
	// 버튼 active 클래스 토글 (회전)
	const action = document.querySelector('.action');
	  action.classList.toggle('active');
	  
	 // 음악 재생,정지
	  if( audio.paused )
			 audio.play();
	  else
		  audio.pause();
	  
	  // 아이콘 설정
	  setBgmIcon();
}

/**
 * 배경음악 재생, 정지
 * @returns
 */
function setBgmIcon(){
	 if( audio.paused ){
		 $("#musicIcon").removeClass( 'fa-volume-up' );
		 $("#musicIcon").addClass( 'fa-volume-mute' );
	 }
		 
	  else{
		 $("#musicIcon").removeClass( 'fa-volume-mute' );
		 $("#musicIcon").addClass( 'fa-volume-up' );
		  
	  }
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

/*shareLinkCopy.addEventListener('click', () => {
  window.navigator.clipboard.writeText(document.location.href).then(
    () => {
      alert('주소 복사 완료!');
    },
    () => {
      try {
        const tempShareLink = document.createElement("textarea");
        tempShareLink.value = document.location.href;
        tempShareLink.style.cssText = "position:absolute;left:-9999px;top:-9999px";
        document.body.appendChild(tempShareLink);
        tempShareLink.select();
        document.execCommand("copy");
        alert('주소 복사 완료!');
      } catch(err) {
        alert(`주소 복사 실패 (${err})! 아래 연락처로 문의 부탁드립니다!`);
      }

      document.body.removeChild(tempShareLink);
    }
  );
});

Kakao.init('199d271581eb40b8d632a008fdd8fe11');

Kakao.Share.createCustomButton({
  container: '#kakaotalk-sharing-btn',
  templateId: 97955,
});*/

Kakao.init('199d271581eb40b8d632a008fdd8fe11');

Kakao.Share.createDefaultButton({
		container: '#kakaotalk-sharing-btn',
		objectType: 'feed',
		content: {
		    title: '양경환 ♥ 이정문 결혼합니다.',
		    description: '6월 29일 (토) 12시 30분 \n 더채플앳논현 5층 라메르홀',
		    imageUrl:
		      'https://jeongmoon417.github.io/wedding_card/images/banner2.jpg',
		    link: {
		      mobileWebUrl: 'https://jeongmoon417.github.io/wedding_card/',
		      webUrl: 'https://jeongmoon417.github.io/wedding_card/',
		    },
	    },
    buttons: [
      {
        title: '모바일 청첩장 보기',
        link: {
          mobileWebUrl: 'https://jeongmoon417.github.io/wedding_card/',
          webUrl: 'https://jeongmoon417.github.io/wedding_card/',
        },
      }
    ],
});