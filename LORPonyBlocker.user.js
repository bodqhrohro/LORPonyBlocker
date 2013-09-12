// ==UserScript==
// @name        LORPonyBlocker
// @namespace   lorponyblocker
// @description Скрипт, скрывающий аватарки поклонников My Little Pony на linux.org.ru
// @include     *linux.org.ru*
// @version     0.2
// ==/UserScript==

(function($){

 var ponyfaglist=[
 'a1batross',
 'amomymous',
 'AnimusPEXUS',
 'Antimatter',
 'avertex',
 'Cooler',
 'Copycat',
 'cryptohedge',
 'Dark_SavanT',
 'Darth_Revan',
 'dearboy',
 'Deneb',
 'derlafff',
 'drBatty',
 'druganddrop-2',
 'ekzotech',
 'essir',
 'evilmanul',
 'Extraterrestrial',
 'Falcon-peregrinus',
 'fornlr',
 'hizel',
 'Hoodoo',
 'Igorrr',
 'IPR',
 'ishitori',
 'kiverattes',
 'ktk',
 'Legioner',
 'Lorchanin',
 'mephistopheles',
 'mopsene',
 'morse',
 'Old_Hamster',
 'olibjerd',
 'PaxthonFettel',
 'proud_anon',
 'rikardoac',
 'Romaboy',
 'rtvd',
 'sudoer',
 'tailgunner',
 'vazgen05',
 'x0r'
 ];
 var checkNick=function(){
  var nick=$(this).text();
  for (var i=0;i<ponyfaglist.length;i++){
   if (nick==ponyfaglist[i]){
    (($(this).closest('.msg-container')).find('.userpic')).hide();
   }
  }
 };
 $('article.msg a[itemprop=\'creator\']').each(checkNick);
})(unsafeWindow?unsafeWindow.jQuery:jQuery);