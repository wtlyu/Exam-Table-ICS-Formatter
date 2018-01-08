/*
    datepickr 3.0 - pick your date not your nose
    https://github.com/joshsalverda/datepickr
    Copyright © 2014 Josh Salverda <josh.salverda@gmail.com>
    This program is free software. It comes without any warranty, to
    the extent permitted by applicable law. You can redistribute it
    and/or modify it under the terms of the Do What The Fuck You Want
    To Public License, Version 2, as published by Sam Hocevar. See
    http://www.wtfpl.net/ for more details.
*/
var datepickr=function(d,c){var f,h,a=[],k;datepickr.prototype=datepickr.init.prototype;h=function(a){a._datepickr&&a._datepickr.destroy();a._datepickr=new datepickr.init(a,c);return a._datepickr};if(d.nodeName)return h(d);f=datepickr.prototype.querySelectorAll(d);if(1===f.length)return h(f[0]);for(k=0;k<f.length;k++)a.push(h(f[k]));return a};
datepickr.init=function(d,c){var f,h,a=this,k={dateFormat:"F j, Y",altFormat:null,altInput:null,minDate:null,maxDate:null,shorthandCurrentMonth:!1},l=document.createElement("div"),t=document.createElement("span"),u=document.createElement("table"),v=document.createElement("tbody"),g,m=new Date,B,n,p,w,C,r,x,D,E,s,F,G,y,H,z,A,I;l.className="datepickr-calendar";t.className="datepickr-current-month";c=c||{};B=function(){g=document.createElement("div");g.className="datepickr-wrapper";a.element.parentNode.insertBefore(g,
a.element);g.appendChild(a.element)};f={year:function(){return m.getFullYear()},month:{integer:function(){return m.getMonth()},string:function(a){var e=m.getMonth();return p(e,a)}},day:function(){return m.getDate()}};h={string:function(){return p(a.currentMonthView,a.config.shorthandCurrentMonth)},numDays:function(){return 1===a.currentMonthView&&(0===a.currentYearView%4&&0!==a.currentYearView%100||0===a.currentYearView%400)?29:a.l10n.daysInMonth[a.currentMonthView]}};n=function(b,e){var q="",d=new Date(e),
c={d:function(){var a=c.j();return 10>a?"0"+a:a},D:function(){return a.l10n.weekdays.shorthand[c.w()]},j:function(){return d.getDate()},l:function(){return a.l10n.weekdays.longhand[c.w()]},w:function(){return d.getDay()},F:function(){return p(c.n()-1,!1)},m:function(){var a=c.n();return 10>a?"0"+a:a},M:function(){return p(c.n()-1,!0)},n:function(){return d.getMonth()+1},U:function(){return d.getTime()/1E3},y:function(){return String(c.Y()).substring(2)},Y:function(){return d.getFullYear()}},f=b.split("");
a.forEach(f,function(a,b){c[a]&&"\\"!==f[b-1]?q+=c[a]():"\\"!==a&&(q+=a)});return q};p=function(b,e){return!0===e?a.l10n.months.shorthand[b]:a.l10n.months.longhand[b]};w=function(b,e,c,d){return b===d&&a.currentMonthView===e&&a.currentYearView===c};C=function(){var b=document.createElement("thead"),e=a.l10n.firstDayOfWeek,c=a.l10n.weekdays.shorthand;0<e&&e<c.length&&(c=[].concat(c.splice(e,c.length),c.splice(0,e)));b.innerHTML="<tr><th>"+c.join("</th><th>")+"</th></tr>";u.appendChild(b)};r=function(){var b=
(new Date(a.currentYearView,a.currentMonthView,1)).getDay(),c=h.numDays(),d=document.createDocumentFragment(),g=document.createElement("tr"),k,l="",p="",m="",n,b=b-a.l10n.firstDayOfWeek;0>b&&(b+=7);k=b;v.innerHTML="";0<b&&(g.innerHTML+='<td colspan="'+b+'">&nbsp;</td>');for(b=1;b<=c;b++){7===k&&(d.appendChild(g),g=document.createElement("tr"),k=0);l=w(f.day(),f.month.integer(),f.year(),b)?" today":"";a.selectedDate&&(p=w(a.selectedDate.day,a.selectedDate.month,a.selectedDate.year,b)?" selected":"");
if(a.config.minDate||a.config.maxDate)n=(new Date(a.currentYearView,a.currentMonthView,b)).getTime(),m="",a.config.minDate&&n<a.config.minDate&&(m=" disabled"),a.config.maxDate&&n>a.config.maxDate&&(m=" disabled");g.innerHTML+='<td class="'+l+p+m+'"><span class="datepickr-day">'+b+"</span></td>";k++}d.appendChild(g);v.appendChild(d)};x=function(){t.innerHTML=h.string()+" "+a.currentYearView};D=function(){var a=document.createElement("div");a.className="datepickr-months";a.innerHTML='<span class="datepickr-prev-month">&lt;</span><span class="datepickr-next-month">&gt;</span>';
a.appendChild(t);x();l.appendChild(a)};E=function(){0>a.currentMonthView&&(a.currentYearView--,a.currentMonthView=11);11<a.currentMonthView&&(a.currentYearView++,a.currentMonthView=0)};s=function(b){if(b.target!==a.element&&b.target!==g&&(b=b.target.parentNode,b!==g))for(;b!==g;)if(b=b.parentNode,null===b){A();break}};F=function(b){b=b.target;var c=b.className;c&&("datepickr-prev-month"===c||"datepickr-next-month"===c?("datepickr-prev-month"===c?a.currentMonthView--:a.currentMonthView++,E(),x(),r()):
"datepickr-day"!==c||a.hasClass(b.parentNode,"disabled")||(a.selectedDate={day:parseInt(b.innerHTML,10),month:a.currentMonthView,year:a.currentYearView},b=(new Date(a.currentYearView,a.currentMonthView,a.selectedDate.day)).getTime(),a.config.altInput&&(a.config.altInput.value=a.config.altFormat?n(a.config.altFormat,b):n(a.config.dateFormat,b)),a.element.value=n(a.config.dateFormat,b),A(),r()))};G=function(){D();C();r();u.appendChild(v);l.appendChild(u);g.appendChild(l)};y=function(){return"INPUT"===
a.element.nodeName?"focus":"click"};H=function(){a.addEventListener(a.element,y(),z);a.addEventListener(l,"click",F)};z=function(){a.addEventListener(document,"click",s);a.addClass(g,"open")};A=function(){a.removeEventListener(document,"click",s);a.removeClass(g,"open")};I=function(){var b,c;a.removeEventListener(document,"click",s);a.removeEventListener(a.element,y(),z);b=a.element.parentNode;b.removeChild(l);c=b.removeChild(a.element);b.parentNode.replaceChild(c,b)};(function(){var b,e;a.config=
{};a.destroy=I;for(b in k)a.config[b]=c[b]||k[b];a.element=d;a.element.value&&(e=Date.parse(a.element.value));e&&!isNaN(e)?(e=new Date(e),a.selectedDate={day:e.getDate(),month:e.getMonth(),year:e.getFullYear()},a.currentYearView=a.selectedDate.year,a.currentMonthView=a.selectedDate.month,a.currentDayView=a.selectedDate.day):(a.selectedDate=null,a.currentYearView=f.year(),a.currentMonthView=f.month.integer(),a.currentDayView=f.day());B();G();H()})();return a};
datepickr.init.prototype={hasClass:function(d,c){return d.classList.contains(c)},addClass:function(d,c){d.classList.add(c)},removeClass:function(d,c){d.classList.remove(c)},forEach:function(d,c){[].forEach.call(d,c)},querySelectorAll:document.querySelectorAll.bind(document),isArray:Array.isArray,addEventListener:function(d,c,f,h){d.addEventListener(c,f,h)},removeEventListener:function(d,c,f,h){d.removeEventListener(c,f,h)},l10n:{weekdays:{shorthand:"Sun Mon Tue Wed Thu Fri Sat".split(" "),longhand:"Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" ")},
months:{shorthand:"Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),longhand:"January February March April May June July August September October November December".split(" ")},daysInMonth:[31,28,31,30,31,30,31,31,30,31,30,31],firstDayOfWeek:0}};

/* Blob.js
 * A Blob implementation.
 * 2014-07-24
 *
 * By Eli Grey, http://eligrey.com
 * By Devin Samarin, https://github.com/dsamarin
 * License: MIT
 *   See https://github.com/eligrey/Blob.js/blob/master/LICENSE.md
 */
 /*! @source http://purl.eligrey.com/github/Blob.js/blob/master/Blob.js */
(function(a){a.URL=a.URL||a.webkitURL;if(a.Blob&&a.URL){try{new Blob;return}catch(d){}}var c=a.BlobBuilder||a.WebKitBlobBuilder||a.MozBlobBuilder||(function(p){var g=function(z){return Object.prototype.toString.call(z).match(/^\[object\s(.*)\]$/)[1]},y=function m(){this.data=[]},w=function i(B,z,A){this.data=B;this.size=B.length;this.type=z;this.encoding=A},q=y.prototype,v=w.prototype,s=p.FileReaderSync,e=function(z){this.code=this[this.name=z]},r=("NOT_FOUND_ERR SECURITY_ERR ABORT_ERR NOT_READABLE_ERR ENCODING_ERR "+"NO_MODIFICATION_ALLOWED_ERR INVALID_STATE_ERR SYNTAX_ERR").split(" "),u=r.length,l=p.URL||p.webkitURL||p,t=l.createObjectURL,f=l.revokeObjectURL,k=l,o=p.btoa,j=p.atob,h=p.ArrayBuffer,n=p.Uint8Array,x=/^[\w-]+:\/*\[?[\w\.:-]+\]?(?::[0-9]+)?/;w.fake=v.fake=true;while(u--){e.prototype[r[u]]=u+1}if(!l.createObjectURL){k=p.URL=function(A){var z=document.createElementNS("http://www.w3.org/1999/xhtml","a"),B;z.href=A;if(!("origin" in z)){if(z.protocol.toLowerCase()==="data:"){z.origin=null}else{B=A.match(x);z.origin=B&&B[1]}}return z}}k.createObjectURL=function(A){var B=A.type,z;if(B===null){B="application/octet-stream"}if(A instanceof w){z="data:"+B;if(A.encoding==="base64"){return z+";base64,"+A.data}else{if(A.encoding==="URI"){return z+","+decodeURIComponent(A.data)}}if(o){return z+";base64,"+o(A.data)}else{return z+","+encodeURIComponent(A.data)}}else{if(t){return t.call(l,A)}}};k.revokeObjectURL=function(z){if(z.substring(0,5)!=="data:"&&f){f.call(l,z)}};q.append=function(D){var F=this.data;if(n&&(D instanceof h||D instanceof n)){var E="",A=new n(D),B=0,C=A.length;for(;B<C;B++){E+=String.fromCharCode(A[B])}F.push(E)}else{if(g(D)==="Blob"||g(D)==="File"){if(s){var z=new s;F.push(z.readAsBinaryString(D))}else{throw new e("NOT_READABLE_ERR")}}else{if(D instanceof w){if(D.encoding==="base64"&&j){F.push(j(D.data))}else{if(D.encoding==="URI"){F.push(decodeURIComponent(D.data))}else{if(D.encoding==="raw"){F.push(D.data)}}}}else{if(typeof D!=="string"){D+=""}F.push(unescape(encodeURIComponent(D)))}}}};q.getBlob=function(z){if(!arguments.length){z=null}return new w(this.data.join(""),z,"raw")};q.toString=function(){return"[object BlobBuilder]"};v.slice=function(C,z,B){var A=arguments.length;if(A<3){B=null}return new w(this.data.slice(C,A>1?z:this.data.length),B,this.encoding)};v.toString=function(){return"[object Blob]"};v.close=function(){this.size=0;delete this.data};return y}(a));a.Blob=function(j,h){var l=h?(h.type||""):"";var g=new c();if(j){for(var k=0,e=j.length;k<e;k++){if(Uint8Array&&j[k] instanceof Uint8Array){g.append(j[k].buffer)}else{g.append(j[k])}}}var f=g.getBlob(l);if(!f.slice&&f.webkitSlice){f.slice=f.webkitSlice}return f};var b=Object.getPrototypeOf||function(e){return e.__proto__};a.Blob.prototype=b(new a.Blob())}(typeof self!=="undefined"&&self||typeof window!=="undefined"&&window||this.content||this));

/* FileSaver
 * A saveAs() FileSaver implementation.
 * 1.3.2
 * 2016-06-16 18:25:19
 *
 * By Eli Grey, http://eligrey.com
 * License: MIT
 *   See https://github.com/eligrey/FileSaver.js/blob/master/LICENSE.md
 */
var saveAs=saveAs||function(e){"use strict";if(typeof e==="undefined"||typeof navigator!=="undefined"&&/MSIE [1-9]\./.test(navigator.userAgent)){return}var t=e.document,n=function(){return e.URL||e.webkitURL||e},r=t.createElementNS("http://www.w3.org/1999/xhtml","a"),o="download"in r,a=function(e){var t=new MouseEvent("click");e.dispatchEvent(t)},i=/constructor/i.test(e.HTMLElement)||e.safari,f=/CriOS\/[\d]+/.test(navigator.userAgent),u=function(t){(e.setImmediate||e.setTimeout)(function(){throw t},0)},s="application/octet-stream",d=1e3*40,c=function(e){var t=function(){if(typeof e==="string"){n().revokeObjectURL(e)}else{e.remove()}};setTimeout(t,d)},l=function(e,t,n){t=[].concat(t);var r=t.length;while(r--){var o=e["on"+t[r]];if(typeof o==="function"){try{o.call(e,n||e)}catch(a){u(a)}}}},p=function(e){if(/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e.type)){return new Blob([String.fromCharCode(65279),e],{type:e.type})}return e},v=function(t,u,d){if(!d){t=p(t)}var v=this,w=t.type,m=w===s,y,h=function(){l(v,"writestart progress write writeend".split(" "))},S=function(){if((f||m&&i)&&e.FileReader){var r=new FileReader;r.onloadend=function(){var t=f?r.result:r.result.replace(/^data:[^;]*;/,"data:attachment/file;");var n=e.open(t,"_blank");if(!n)e.location.href=t;t=undefined;v.readyState=v.DONE;h()};r.readAsDataURL(t);v.readyState=v.INIT;return}if(!y){y=n().createObjectURL(t)}if(m){e.location.href=y}else{var o=e.open(y,"_blank");if(!o){e.location.href=y}}v.readyState=v.DONE;h();c(y)};v.readyState=v.INIT;if(o){y=n().createObjectURL(t);setTimeout(function(){r.href=y;r.download=u;a(r);h();c(y);v.readyState=v.DONE});return}S()},w=v.prototype,m=function(e,t,n){return new v(e,t||e.name||"download",n)};if(typeof navigator!=="undefined"&&navigator.msSaveOrOpenBlob){return function(e,t,n){t=t||e.name||"download";if(!n){e=p(e)}return navigator.msSaveOrOpenBlob(e,t)}}w.abort=function(){};w.readyState=w.INIT=0;w.WRITING=1;w.DONE=2;w.error=w.onwritestart=w.onprogress=w.onwrite=w.onabort=w.onerror=w.onwriteend=null;return m}(typeof self!=="undefined"&&self||typeof window!=="undefined"&&window||this.content);if(typeof module!=="undefined"&&module.exports){module.exports.saveAs=saveAs}else if(typeof define!=="undefined"&&define!==null&&define.amd!==null){define("FileSaver.js",function(){return saveAs})}

/* icsFormatter
 * A ics file format generator
 * By eastpiger
 */
var icsFormatter = function() {
	'use strict';

	if (navigator.userAgent.indexOf('MSIE') > -1 && navigator.userAgent.indexOf('MSIE 10') == -1) {
		console.log('Unsupported Browser');
		return;
	}

	var SEPARATOR = (navigator.appVersion.indexOf('Win') !== -1) ? '\r\n' : '\n';
	var calendarEvents = [];
	var calendarName = 'Calendar';
	var prodName = '-//eastpiger//eastpiger.com//ICS: iCalendar Generator';

	return {
		/**
		 * Returns events array
		 * @return {array} Events
		 */
		'events': function() {
			return calendarEvents;
		},

		'setCalendarName': function(name) {
			calendarName = name;
		},

		'buildCalendarStart': function() {
			var calendarStart = [
				'BEGIN:VCALENDAR',
				'VERSION:2.0',
				'CALSCALE:GREGORIAN',
			];

			calendarStart.push('PRODID:' + prodName);

			calendarStart.push('X-WR-CALNAME:' + calendarName);

			var ret = calendarStart.join(SEPARATOR);

			return ret;
		},

		'buildCalendarEnd': function() {
			var ret = 'END:VCALENDAR';

			return ret;
		},

		'addEvent': function(subject, description, location, begin, end, rrul, url, categories, alarms) {
			calendarEvents.push({
				subject: subject,
				description: description,
				location: location,
				begin: begin,
				end: end,
				rrul: rrul,
				url: url,
				categories: categories,
				alarms: alarms
			 });
		},

		'formatEvent': function(subject, description, location, begin, end, rrul, url, categories, alarms) {
			function time_convert(t) {
				var time_convert_year = ("0000" + (t.getUTCFullYear().toString())).slice(-4);
				var time_convert_month = ("00" + ((t.getUTCMonth() + 1).toString())).slice(-2);
				var time_convert_day = ("00" + ((t.getUTCDate()).toString())).slice(-2);
				var time_convert_hours = ("00" + (t.getUTCHours().toString())).slice(-2);
				var time_convert_minutes = ("00" + (t.getUTCMinutes().toString())).slice(-2);
				var time_convert_seconds = ("00" + (t.getUTCSeconds().toString())).slice(-2);
				var time_convert_time = 'T' + time_convert_hours + time_convert_minutes + time_convert_seconds + 'Z';
				var ret = time_convert_year + time_convert_month + time_convert_day + time_convert_time;
				return ret;
			}

			var calendarEventArray = [];

			calendarEventArray.push('BEGIN:VEVENT', 'CLASS:PUBLIC', 'X-MICROSOFT-CDO-BUSYSTATUS:BUSY', 'X-MICROSOFT-CDO-IMPORTANCE:1');

			if (!(typeof begin === 'undefined'))
				calendarEventArray.push('DTSTART:' + time_convert(begin));

			if (!(typeof end === 'undefined'))
				calendarEventArray.push('DTEND:' + time_convert(end));

			if (!(typeof rrul === 'undefined')) {
				var rrul_str = '';

				if (!(typeof rrul.FREQ === 'undefined'))
					rrul_str += 'FREQ=' + rrul.FREQ + ';';

				if (!(typeof rrul.COUNT === 'undefined'))
					rrul_str += 'COUNT=' + rrul.COUNT + ';';

				if (!(typeof rrul.INTERVAL === 'undefined'))
					rrul_str += 'INTERVAL=' + rrul.INTERVAL + ';';

				calendarEventArray.push('RRULE:' + rrul_str);
			}

			if (!(typeof subject === 'undefined'))
				calendarEventArray.push('SUMMARY:' + subject);

			if (!(typeof description === 'undefined'))
				calendarEventArray.push('DESCRIPTION:' + description);

			if (!(typeof location === 'undefined'))
				calendarEventArray.push('LOCATION:' + location);

			if (!(typeof categories === 'undefined')) {
				calendarEventArray.push('CATEGORIES:' + categories.toString());
			}

			if (!(typeof alarms === 'undefined')) {
				for (var i in alarms) {
					calendarEventArray.push('BEGIN:VALARM');

					if (!(typeof alarms[i].ACTION === 'undefined'))
						calendarEventArray.push('ACTION:' + alarms[i].ACTION);

					if (!(typeof alarms[i].TRIGGER === 'undefined'))
						calendarEventArray.push('TRIGGER:' + alarms[i].TRIGGER);

					if (!(typeof alarms[i].DESCRIPTION === 'undefined'))
						calendarEventArray.push('DESCRIPTION:' + alarms[i].DESCRIPTION);

					if (!(typeof alarms[i].REPEAT === 'undefined'))
						calendarEventArray.push('REPEAT:' + (alarms[i].REPEAT?1:0));

					if (!(typeof alarms[i].DURATION === 'undefined'))
						calendarEventArray.push('DURATION:' + alarms[i].DURATION);

					calendarEventArray.push('END:VALARM');
				}
				calendarEventArray.push('CATEGORIES:' + categories.toString());
			}

			calendarEventArray.push('TRANSP:TRANSPARENT', 'END:VEVENT');

			var ret = calendarEventArray.join(SEPARATOR);

			return ret;
		},

		'formatAllEvents': function() {
			var formatedEvents = [];
			for (var i in calendarEvents) {
				var t = this.formatEvent(
					calendarEvents[i].subject,
					calendarEvents[i].description,
					calendarEvents[i].location,
					calendarEvents[i].begin,
					calendarEvents[i].end,
					calendarEvents[i].rrul,
					calendarEvents[i].url,
					calendarEvents[i].categories,
					calendarEvents[i].alarms
				);
				if (t)
					formatedEvents.push(t);
			}

			var ret =  this.buildCalendarStart() + SEPARATOR + formatedEvents.join(SEPARATOR) + SEPARATOR + this.buildCalendarEnd();

			return ret;
		},

		/**
		 * Download calendar using the saveAs function from filesave.js
		 * @param  {string} filename Filename
		 * @param  {string} ext      Extention
		 */
		'download': function(filename, ext) {
			var formatedEvents = this.formatAllEvents();
			if (formatedEvents) {

				ext = (typeof ext !== 'undefined') ? ext : '.ics';
				filename = (typeof filename !== 'undefined') ? filename : 'calendar';

				var blob = new Blob([formatedEvents], {type: 'attachment/csv;charset=utf-8'});
				saveAs(blob, filename + ext);

				// var supportsDownloadAttribute = 'download' in document.createElement('a');

				// if(supportsDownloadAttribute) {
				// 	var link = document.createElement('a');
				// 	link.setAttribute('target', '_blank');
				// 	link.setAttribute('href', 'data:attachment/csv;charset=utf-8,' + encodeURI(formatedEvents));
				// 	link.setAttribute('download', filename + ext);
				// 	link.click();
				// } else if(typeof safari !== 'undefined') {
				// 	window.open('data:attachment/csv;charset=utf-8,' + encodeURI(formatedEvents));
				// } else {
				// 	var blob = new Blob([formatedEvents], {type: 'attachment/csv;charset=utf-8'});
				// 	saveAs(blob, filename + ext);
				// }

				//window.open("data:text/calendar;charset=UTF-8," + encodeURI(formatedEvents));
			} else return false;
		}
	};
};

if (Boolean(window.$) && Boolean(document.getElementById("stdExamForm"))) {
	var exams = [];

	function clear() {
		var styleElement = document.getElementById('styles_js');
		if (styleElement) styleElement.parentElement.removeChild(styleElement);

		var containerElement = document.getElementById('icsFormatterbg');
		if (containerElement) containerElement.parentElement.removeChild(containerElement);
	}

	function init() {
		function loadCSS() {
			var styleElement = document.createElement('style');
			styleElement.type = 'text/css';
			styleElement.id = 'styles_js';
			document.getElementsByTagName('head')[0].appendChild(styleElement);
			styleElement.appendChild(document.createTextNode('#icsFormatterbg{display:none;position:fixed;top:0px;left:0px;bottom:0px;right:0px;z-index:90001;background:rgba(0, 0, 0, 0.7);}\
				#icsFormatterContainer{position:relative;background:#E3E3E3;border-radius:3px;box-shadow: 0 1px 2px #aaa;margin:100px auto;width:600px;max-width:80%;height:300px;max-height:60%;padding: 20px;}\
				#icsFormatterClose{position:absolute;right:20px;top:20px;padding:5px;}\
				#icsFormatterDownload{padding:10px;}'));
		}

		function loadHTML() {
			$('body').append('<div id="icsFormatterbg" class="icsFormatterbg">\
				<div id="icsFormatterContainer">\
					<h3>Exam Table ICS Formatter <small>ver. 0.1 <a href="http://www.eastpiger.com">eastpiger</a> <a href="https://www.geekpie.org">GeekPie</a></small></h3><br/><br/>\
					<button id="icsFormatterClose" class="ui-button">X</button>\
					<h3 style="text-align:center;"><strong><span id="icsFormatterExams"></span></strong></h3>\
					<h3 style="text-align:center;"><strong><span id="icsFormatterSemester"></span></strong></h3>\
					<p style="text-align:center;"><span id="icsFormatterTasks"></span> exams found.</p><br/>\
					<p style="text-align:center;"><button id="icsFormatterDownload" class="ui-button ui-widget">Download</button></p>\
					</div>\
				</div>');
			$('#icsFormatterbg').fadeIn(500);
		}

		loadCSS();
		loadHTML();
	}

	function addClass(data) {
		var title = "[" + data.type + "]" + data.name;
		var place = data.location;
		var categories = ["ShanghaiTech", "exam", data.type, "Course Table ICS Formatter"];
		var alarms = [
			{ ACTION: 'AUDIO', TRIGGER: '-PT10M' }
		];
		var url = '';

		var description =  "[" + data.type + "]" + data.name + " " + data.location + " " + data.describe; //'A very long and boring description of what is the agenda of this super exclusiv pow-wow';


		var begin = new Date(data.date + " " + data.time.split("~")[0]);
		var end = new Date(data.date + " " + data.time.split("~")[1]);
		var rrul = {FREQ: 'WEEKLY', COUNT: 1, INTERVAL: 1};

		icsObj.addEvent(title, description, place, begin, end, rrul, url, categories, alarms);
	}

	function process() {
		$('#icsFormatterExams').html($("#examBatchId").find("option:selected").text());
		$('#icsFormatterSemester').html($("#stdExamForm input.calendar-text")[0].value);
		window.icsObj = icsFormatter();

		icsObj.setCalendarName($("#examBatchId").find("option:selected").text());

		data = $(".grid:first tbody:first")[0];

		for (var i = 0; i < data.children.length; i++) {
			var exam = {
				courseID: data.children[i].children[0].innerText,
				name: data.children[i].children[1].innerText,
				type: data.children[i].children[2].innerText,
				date: data.children[i].children[3].innerText,
				time: data.children[i].children[4].innerText,
				location: data.children[i].children[5].innerText,
				status: data.children[i].children[6].innerText,
				describe: data.children[i].children[7].innerText
			};
			exams.push(exam);
		}

		$('#icsFormatterTasks').html(exams.length);
	}

	function download() {
		for (var i in exams)
			addClass(exams[i]);

		window.icsObj.download($("#examBatchId").find("option:selected").text());
	}

	function closeWindow() {
		$('#icsFormatterbg').fadeOut(500);
	}

	clear();
	init();

	process();

	$('#icsFormatterDownload').click(download);
	$('#icsFormatterClose').click(closeWindow);

} else {
	alert('加载失败，请确认是否进入正确页面！');
}
