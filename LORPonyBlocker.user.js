// ==UserScript==
// @name        LORPonyBlocker
// @namespace   lorponyblocker
// @description Скрипт, скрывающий аватарки поклонников My Little Pony на linux.org.ru
// @include     *linux.org.ru*
// @version     0.2.1
// ==/UserScript==

(function(document, fn) {
    var script = document.createElement('script');
    script.setAttribute("type", "text/javascript");
    script.textContent = '(' + fn + ')(window, window.document);';
    document.head.appendChild(script); // run the script
    document.head.removeChild(script); // clean up
})(document, function(window, document) {

(function($){

 var ponyfaglist=[
 'a1batross',
 'aidan',
 'Akamanah',
 'amomymous',
 'AnimusPEXUS',
 'Anonymous',
 'Antimatter',
 'AptGet',
 'atrus',
 'avertex',
 'Bagrov',
 'bsdfun',
 'Chaser_Andrey',
 'Cooler',
 'com',
 'Copycat',
 'cryptohedge',
 'Dark_SavanT',
 'Darth_Revan',
 'dearboy',
 'Deneb',
 'derlafff',
 'devpony',
 'Dispetcher14',
 'DoctorSinus',
 'drBatty',
 'druganddrop-2',
 'ekzotech',
 'emulek',
 'essir',
 'evilmanul',
 'Extraterrestrial',
 'Falcon-peregrinus',
 'Flyn',
 'fornlr',
 'HiddenComplexity',
 'hizel',
 'Hoodoo',
 'IceAlchemist',
 'Igorrr',
 'Ingvarr',
 'IPR',
 'ishido',
 'ishitori',
 'kasthack',
 'kiverattes',
 'ktk',
 'ktulhu666',
 'Landgraf',
 'Legioner',
 'Le_Raux',
 'Lonli-Lockley',
 'Lorchanin',
 'melkor217',
 'mephistopheles',
 'mopsene',
 'morse',
 'Newlifer',
 'nihil',
 'Old_Hamster',
 'OldWiseCat',
 'olibjerd',
 'PaxthonFettel',
 'pevzi',
 'procoder99',
 'proud_anon',
 'quowah',
 'reliktt',
 'rikardoac',
 'Romaboy',
 'rtvd',
 'StalinEXE',
 'thelonelyisland',
 'Thero',
 'uin',
 'vazgen05',
 'veneperkele',
 'voronin',
 'x0r',
 'Yaourt',
 'yaspol'
 ];
 
 function readSetting(name) {
  return localStorage.getItem(name) == 'true';
 }
 
 function toggleSetting(name) {
  var result = readSetting(name);
  result = !result;
  localStorage.setItem(name, result ? 'true' : 'false');
  return result;
 }
 
 function displaySetting(name, defaultChecked) {
  var result = readSetting(name);
  result = (result && !defaultChecked) || (!result && defaultChecked);
  return result;
 }

 var settingsTab={
  'fill_ponies': 'Заменять аватарки не-понифагов поняшами',
  'hide_ponies': 'Скрывать аватарки понифагов'
 };
 
 var poniAvs=[
  [
   'applejack',
   80
  ],
  [
   'fluttershy',
   72
  ],
  [
   'pinkie_pie',
   127
  ],
  [
   'rainbow_dash',
   176
  ],
  [
   'rarity',
   117
  ],
  [
   'twilight_sparkle',
   117
  ]
 ];
 
 function pad3(number) {
  var s='';
  s+=number/100|0;
  s+=(number/10)%10|0;
  s+=number%10;
  return s;
 }
 
 function randPony(){
  var name=poniAvs[(Math.random()*6)|0];
  var up=name[0].indexOf('_'),s_name;
  if (up>-1){
   s_name=name[0].substring(0,up)+name[0].substring(up+1);
  } else {
   s_name=name[0];
  }
  return 'http://www.bronyland.com/goodies/avatars/'+s_name+'/100/'+name[0]+'_avatar_'+pad3((Math.random()*name[1])|0+1)+'.png';
 }
 
 if (/settings/.test(window.location.href)){
  var baseHr=(($('#profileForm hr:eq(0)').parent()).parent())
  baseHr.after(
   $('<tr><td colspan=2><hr/></td></tr>')
  );
  for (settings in settingsTab){
   (function(s,st){
    baseHr.after(
     $('<tr/>')
      .append(
       $('<td/>').text(st[s])
      )
      .append(
       $('<td/>').append(
        $('<input/>')
        .attr('type','checkbox')
        .click(function(){
         toggleSetting(s)
        })
        .prop('checked',displaySetting(s))
       )
      )
    )
   })(settings,settingsTab);
  }
 };

 var ponycache=localStorage.getItem('ponycache');
 ponycache=ponycache?JSON.parse(ponycache):{};
  
 var checkNick=function(){
  var nick=$(this).text();
  for (var i=0;i<ponyfaglist.length;i++){
   if (nick==ponyfaglist[i]){
    if (readSetting('hide_ponies')){
     (($(this).closest('.msg-container')).find('.userpic')).hide();
    }
    return;
   }
  }
  if (readSetting('fill_ponies')){
   for (pony in ponycache){
    if (pony==nick) {
     var av=ponycache[pony];
     break;
    }
   }
   if (av==undefined){
    var av=randPony();
    ponycache[nick]=av;
   }
   (($(this).closest('.msg-container')).find('.userpic img')).attr('src',av).width(100).height(100);
  }
 };
 $('article.msg a[itemprop=\'creator\']').each(checkNick);
 localStorage.setItem('ponycache',JSON.stringify(ponycache));
})(jQuery);


});
