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
function zipdata(a){AjaxZip3.fsimple?AjaxZip3.createAddrObj(a,AjaxZip3.fcallback):AjaxZip3.callback(a)}AjaxZip3=function(){},AjaxZip3.VERSION="0.5",AjaxZip3.JSONDATA="https://ajaxzip3.github.io/zipdata",AjaxZip3.CACHE=[],AjaxZip3.prev="",AjaxZip3.nzip="",AjaxZip3.fzip1="",AjaxZip3.fzip2="",AjaxZip3.fpref="",AjaxZip3.addr="",AjaxZip3.fstrt="",AjaxZip3.farea="",AjaxZip3.ffocus=!0,AjaxZip3.fsimple=!1,AjaxZip3.fcallback="",AjaxZip3.PREFMAP=[null,"北海道","青森県","岩手県","宮城県","秋田県","山形県","福島県","茨城県","栃木県","群馬県","埼玉県","千葉県","東京都","神奈川県","新潟県","富山県","石川県","福井県","山梨県","長野県","岐阜県","静岡県","愛知県","三重県","滋賀県","京都府","大阪府","兵庫県","奈良県","和歌山県","鳥取県","島根県","岡山県","広島県","山口県","徳島県","香川県","愛媛県","高知県","福岡県","佐賀県","長崎県","熊本県","大分県","宮崎県","鹿児島県","沖縄県"],AjaxZip3.zip2addr=function(a,e,i,p,t,r,A){if(AjaxZip3.fzip1=AjaxZip3.getElementByName(a),AjaxZip3.fzip2=AjaxZip3.getElementByName(e,AjaxZip3.fzip1),AjaxZip3.fpref=AjaxZip3.getElementByName(i,AjaxZip3.fzip1),AjaxZip3.faddr=AjaxZip3.getElementByName(p,AjaxZip3.fzip1),AjaxZip3.fstrt=AjaxZip3.getElementByName(r,AjaxZip3.fzip1),AjaxZip3.farea=AjaxZip3.getElementByName(t,AjaxZip3.fzip1),AjaxZip3.ffocus=void 0===A?!0:A,AjaxZip3.fzip1&&AjaxZip3.fpref&&AjaxZip3.faddr){var f=AjaxZip3.fzip1.value;if(AjaxZip3.fzip2&&AjaxZip3.fzip2.value&&(f+=AjaxZip3.fzip2.value),f){AjaxZip3.nzip="";for(var x=0;x<f.length;x++){var j=f.charCodeAt(x);48>j||j>57||(AjaxZip3.nzip+=f.charAt(x))}if(!(AjaxZip3.nzip.length<7)){var n=AjaxZip3.nzip.substr(0,3),Z=AjaxZip3.CACHE[n];return Z?AjaxZip3.callback(Z):void AjaxZip3.zipjsonpquery()}}}},AjaxZip3.callback=function(a){var e=a[AjaxZip3.nzip],i=AjaxZip3.nzip-0+4278190080+"";if(!e&&a[i]&&(e=a[i]),e){var p=e[0];if(p){var t=AjaxZip3.PREFMAP[p];if(t){var r=e[1];r||(r="");var A=e[2];A||(A="");var f=e[3];f||(f="");var x=AjaxZip3.faddr,j=r;if("select-one"==AjaxZip3.fpref.type||"select-multiple"==AjaxZip3.fpref.type)for(var n=AjaxZip3.fpref.options,Z=0;Z<n.length;Z++){var l=n[Z].value,s=n[Z].text;n[Z].selected=l==p||l==t||s==t}else AjaxZip3.fpref.name==AjaxZip3.faddr.name?j=t+j:AjaxZip3.fpref.value=t;if(AjaxZip3.farea?(x=AjaxZip3.farea,AjaxZip3.farea.value=A):j+=A,AjaxZip3.fstrt&&(x=AjaxZip3.fstrt,AjaxZip3.faddr.name==AjaxZip3.fstrt.name?j+=f:f&&(AjaxZip3.fstrt.value=f)),AjaxZip3.faddr.value=j,AjaxZip3.ffocus&&x&&x.value){var c=x.value.length;if(x.focus(),x.createTextRange){var u=x.createTextRange();u.move("character",c),u.select()}else x.setSelectionRange&&x.setSelectionRange(c,c)}}}}},AjaxZip3.getResponseText=function(a){var e=a.responseText;if(navigator.appVersion.indexOf("KHTML")>-1){var i=escape(e);i.indexOf("%u")<0&&i.indexOf("%")>-1&&(e=decodeURIComponent(i))}return e},AjaxZip3.getElementByName=function(a,e){if("string"==typeof a){var i=document.getElementsByName(a);if(!i)return null;if(!(i.length>1&&e&&e.form))return i[0];for(var p=e.form.elements,t=0;t<p.length;t++)if(p[t].name==a)return p[t]}return a},AjaxZip3.zipjsonpquery=function(){var a=AjaxZip3.JSONDATA+"/zip-"+AjaxZip3.nzip.substr(0,3)+".js",e=document.createElement("script");e.setAttribute("type","text/javascript"),e.setAttribute("charset","UTF-8"),e.setAttribute("src",a),document.getElementsByTagName("head").item(0).appendChild(e)},AjaxZip3.getSimple=function(a,e,i){AjaxZip3.isNumber(a)&&AjaxZip3.isNumber(e)&&"function"==typeof i&&7===(a+e).length||i({pref_id:"",pref_name:"",city:"",area:"",strt:""}),AjaxZip3.fsimple=!0,AjaxZip3.fcallback=i,AjaxZip3.nzip=a+e,AjaxZip3.zipjsonpquery()},AjaxZip3.isNumber=function(a){return"number"!=typeof a&&"string"!=typeof a?!1:isFinite(a)},AjaxZip3.createAddrObj=function(a,e){var i={pref_id:"",pref_name:"",city:"",area:"",strt:""},p=a[AjaxZip3.nzip],t=AjaxZip3.nzip-0+4278190080+"";!p&&a[t]&&(p=a[t]),p||e(i),i.pref_id=p[0],i.pref_id||e(i),i.pref_name=AjaxZip3.PREFMAP[i.pref_id],i.pref_name||e(i),i.city=p[1],i.city||(i.city=""),i.area=p[2],i.area||(i.area=""),i.strt=p[3],i.strt||(i.strt=""),e(i)};