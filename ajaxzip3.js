/*! ================================================================ *
    ajaxzip3.js ---- AjaxZip3 郵便番号→住所変換ライブラリ

    Copyright (c) 2008-2015 Ninkigumi Co.,Ltd.
    http://ajaxzip3.github.io/

    Copyright (c) 2006-2007 Kawasaki Yusuke <u-suke [at] kawa.net>
    http://www.kawa.net/works/ajax/AjaxZip2/AjaxZip2.html

    Permission is hereby granted, free of charge, to any person
    obtaining a copy of this software and associated documentation
    files (the "Software"), to deal in the Software without
    restriction, including without limitation the rights to use,
    copy, modify, merge, publish, distribute, sublicense, and/or sell
    copies of the Software, and to permit persons to whom the
    Software is furnished to do so, subject to the following
    conditions:

    The above copyright notice and this permission notice shall be
    included in all copies or substantial portions of the Software.

    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
    EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
    OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
    NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
    HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
    WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
    FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
    OTHER DEALINGS IN THE SOFTWARE.
* ================================================================ */
function zipdata(a){AjaxZip3.fsimple?AjaxZip3.createAddrObj(a,AjaxZip3.fcallback):AjaxZip3.callback(a)}AjaxZip3=function(){},AjaxZip3.VERSION="0.5",AjaxZip3.JSONDATA="https://ajaxzip3.github.io/zipdata",AjaxZip3.CACHE=[],AjaxZip3.prev="",AjaxZip3.nzip="",AjaxZip3.fzip1="",AjaxZip3.fzip2="",AjaxZip3.fpref="",AjaxZip3.addr="",AjaxZip3.fstrt="",AjaxZip3.farea="",AjaxZip3.ffocus=!0,AjaxZip3.fsimple=!1,AjaxZip3.fcallback="",AjaxZip3.addr_obj={pref_id:"",pref_name:"",city:"",area:"",strt:""},AjaxZip3.PREFMAP=[null,"北海道","青森県","岩手県","宮城県","秋田県","山形県","福島県","茨城県","栃木県","群馬県","埼玉県","千葉県","東京都","神奈川県","新潟県","富山県","石川県","福井県","山梨県","長野県","岐阜県","静岡県","愛知県","三重県","滋賀県","京都府","大阪府","兵庫県","奈良県","和歌山県","鳥取県","島根県","岡山県","広島県","山口県","徳島県","香川県","愛媛県","高知県","福岡県","佐賀県","長崎県","熊本県","大分県","宮崎県","鹿児島県","沖縄県"],AjaxZip3.zip2addr=function(a,i,e,p,j,r,t){if(AjaxZip3.fzip1=AjaxZip3.getElementByName(a),AjaxZip3.fzip2=AjaxZip3.getElementByName(i,AjaxZip3.fzip1),AjaxZip3.fpref=AjaxZip3.getElementByName(e,AjaxZip3.fzip1),AjaxZip3.faddr=AjaxZip3.getElementByName(p,AjaxZip3.fzip1),AjaxZip3.fstrt=AjaxZip3.getElementByName(r,AjaxZip3.fzip1),AjaxZip3.farea=AjaxZip3.getElementByName(j,AjaxZip3.fzip1),AjaxZip3.ffocus=void 0===t?!0:t,AjaxZip3.fzip1&&AjaxZip3.fpref&&AjaxZip3.faddr){var A=AjaxZip3.fzip1.value;if(AjaxZip3.fzip2&&AjaxZip3.fzip2.value&&(A+=AjaxZip3.fzip2.value),A){AjaxZip3.nzip="";for(var x=0;x<A.length;x++){var Z=A.charCodeAt(x);48>Z||Z>57||(AjaxZip3.nzip+=A.charAt(x))}if(!(AjaxZip3.nzip.length<7)){var f=AjaxZip3.nzip.substr(0,3),n=AjaxZip3.CACHE[f];return n?AjaxZip3.callback(n):void AjaxZip3.zipjsonpquery()}}}},AjaxZip3.callback=function(a){var i=a[AjaxZip3.nzip],e=AjaxZip3.nzip-0+4278190080+"";if(!i&&a[e]&&(i=a[e]),i){var p=i[0];if(p){var j=AjaxZip3.PREFMAP[p];if(j){var r=i[1];r||(r="");var t=i[2];t||(t="");var A=i[3];A||(A="");var x=AjaxZip3.faddr,Z=r;if("select-one"==AjaxZip3.fpref.type||"select-multiple"==AjaxZip3.fpref.type)for(var f=AjaxZip3.fpref.options,n=0;n<f.length;n++){var d=f[n].value,o=f[n].text;f[n].selected=d==p||d==j||o==j}else AjaxZip3.fpref.name==AjaxZip3.faddr.name?Z=j+Z:AjaxZip3.fpref.value=j;if(AjaxZip3.farea?(x=AjaxZip3.farea,AjaxZip3.farea.value=t):Z+=t,AjaxZip3.fstrt&&(x=AjaxZip3.fstrt,AjaxZip3.faddr.name==AjaxZip3.fstrt.name?Z+=A:A&&(AjaxZip3.fstrt.value=A)),AjaxZip3.faddr.value=Z,AjaxZip3.ffocus&&x&&x.value){var l=x.value.length;if(x.focus(),x.createTextRange){var s=x.createTextRange();s.move("character",l),s.select()}else x.setSelectionRange&&x.setSelectionRange(l,l)}}}}},AjaxZip3.getResponseText=function(a){var i=a.responseText;if(navigator.appVersion.indexOf("KHTML")>-1){var e=escape(i);e.indexOf("%u")<0&&e.indexOf("%")>-1&&(i=decodeURIComponent(e))}return i},AjaxZip3.getElementByName=function(a,i){if("string"==typeof a){var e=document.getElementsByName(a);if(!e)return null;if(!(e.length>1&&i&&i.form))return e[0];for(var p=i.form.elements,j=0;j<p.length;j++)if(p[j].name==a)return p[j]}return a},AjaxZip3.zipjsonpquery=function(){var a=AjaxZip3.JSONDATA+"/zip-"+AjaxZip3.nzip.substr(0,3)+".js",i=document.createElement("script");i.setAttribute("type","text/javascript"),i.setAttribute("charset","UTF-8"),i.setAttribute("src",a),document.getElementsByTagName("head").item(0).appendChild(i)},AjaxZip3.getSimple=function(a,i,e){AjaxZip3.isNumber(a)&&AjaxZip3.isNumber(i)&&"function"==typeof e||e(AjaxZip3.addr_obj),7!==(a+i).length&&e(AjaxZip3.addr_obj),AjaxZip3.fsimple=!0,AjaxZip3.fcallback=e,AjaxZip3.nzip=a+i,AjaxZip3.zipjsonpquery()},AjaxZip3.isNumber=function(a){return"number"!=typeof a&&"string"!=typeof a?!1:isFinite(a)},AjaxZip3.createAddrObj=function(a,i){var e=a[AjaxZip3.nzip],p=AjaxZip3.nzip-0+4278190080+"";!e&&a[p]&&(e=a[p]),e||i(AjaxZip3.addr_obj),AjaxZip3.addr_obj.pref_id=e[0],AjaxZip3.addr_obj.pref_id||i(AjaxZip3.addr_obj),AjaxZip3.addr_obj.pref_name=AjaxZip3.PREFMAP[AjaxZip3.addr_obj.pref_id],AjaxZip3.addr_obj.pref_name||i(AjaxZip3.addr_obj),AjaxZip3.addr_obj.city=e[1],AjaxZip3.addr_obj.city||(AjaxZip3.addr_obj.city=""),AjaxZip3.addr_obj.area=e[2],AjaxZip3.addr_obj.area||(AjaxZip3.addr_obj.area=""),AjaxZip3.addr_obj.strt=e[3],AjaxZip3.addr_obj.strt||(AjaxZip3.addr_obj.strt=""),i(AjaxZip3.addr_obj)};