// ==UserScript==
// @name        LORPonyBlocker
// @namespace   lorponyblocker
// @description Скрипт, скрывающий аватарки поклонников My Little Pony на linux.org.ru
// @include     *linux.org.ru*
// @version     0.1
// ==/UserScript==

(function($){

 var BASEURL='https://raw.github.com/bodqhrohro/LORPonyBlocker/master/ponyfaglist.json';
 
 if (/settings/.test(window.location.href)){
  $('#profileForm tr:eq(7)').after(
   $('<tr/>').append(
    $('<td/>').append(
     $('<button>Обновить базу понифагов</button>')
      .click(
       function(){
        $.ajax({
         url: BASEURL,
         dataType: 'jsonp',
         success: function(data){
          var lastList=localStorage.getItem('ponyfaglist');
          if (lastList==data){
           alert('База не изменена, обновление не требуется');
          } else {
           localstorage.setItem('ponyfaglist',data);
           alert('База обновлена');
          }
         },
         error: function(){
          alert('Обновление не доступно. Проверьте Ваше интернет-подключение или обратитесь к разработчику.');
         }
        });
        return false;
       }
      )
    )
   )
  );
 }
 var base=JSON.parse(localStorage.getItem('ponyfaglist'));
 var checkNick=function(){
  var nick=$(this).text();
  for (var i=0;i<base.length;i++){
   if (nick==base[i]){
    console.log(base[i]+' '+nick);
   (($(this).closest('.msg-container')).find('.userpic')).hide();
   }
  }
 };
 $('article.msg a[itemprop=\'creator\']').each(checkNick);
})(unsafeWindow?unsafeWindow.jQuery:jQuery);