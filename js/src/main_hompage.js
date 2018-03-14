(function($){

var li = $('li').find('a');             // li의 a를 변수로 지정
li.on('focus',function() {             //li에 focus잡혔을때만 함수 실행
$(this).addClass('focus');             //선택한 요소에 ".focus"를 추가
$(this).parent().css({zIndex:300}); 
});  
                                       
li.on('blur', function() {              //li 클릭시 "blur(focus상태가 풀린 요소에게 함수 실행)"로 
                                        //실행하고 함수실행
$(this).removeClass('focus');
$(this).parent().removeAttr('style');
// $(this).parent().css('backgroundColor','#888');
});

var process = $('.process');
var pro_view = $('.pro_view');

process.on('click', function(){
  pro_view.show();
}); 

pro_view.mouseleave(function() {
 pro_view.hide();
});

})(this.jQuery);