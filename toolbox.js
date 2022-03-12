function printf(string) {				/*                Menu              */
	var inbody = document.body.innerHTML;		/* 1. printf -------------- line 01 */
	document.body.innerHTML = inbody + string;	/* 2. importScripts ------- line 06 */
}							/* 3. importCss ----------- line 40 */
							/* 4. replaceAll ---------- line 45 */
if (!importScripts) {					/* 5. $() ----------------- line 52 */
	var importScripts = (function (globalEval) {	/* 6. Function.bind ------- line 56 */
		var xhr = new XMLHttpRequest;		/* 7. new DocumentElement - line 74 */
		return function importScripts() {
			var
				args = Array.prototype.slice.call(arguments),
				len = args.length,
				i = 0,
				meta, data, content;
			for (; i < len; i++) {
				if (args[i].substr(0, 5)
					.toLowerCase() === "data:") {
					data = args[i];
					content = data.indexOf(",");
					meta = data.substr(5, content)
						.toLowerCase();
					data = decodeURIComponent(data.substr(content + 1));
					if (/;\s*base64\s*[;,]/.test(meta)) {
						data = atob(data);
					}
					if (/;\s*charset=[uU][tT][fF]-?8\s*[;,]/.test(meta)) {
						data = decodeURIComponent(escape(data));
					}
				} else {
					xhr.open("GET", args[i], false);
					xhr.send(null);
					data = xhr.responseText;
				}
				globalEval(data);
			}
		};
	}(eval));
}

function importCss(filesource) {
	var inhead = document.head.innerHTML;
	document.head.innerHTML = inhead + '<link rel="stylesheet" href="' +  filesource + '">';
}

RegExp.quote = function (str) {
    return str.replace(/([.?*+^$[\]\\(){}|-])/g, "\\$1");
};
String.prototype.replaceAll = function (s1, s2) {
    return this.replace(new RegExp(RegExp.quote(s1), "gm"), s2);
}

function $(query) {
return document.querySelector(query);
}

Function.prototype.bind = Function.prototype.bind || function(context){
	//确保调用bind方法的一定要是一个函数
	if(typeof this !== "function"){
		throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");
	}
	var args = Array.prototype.slice.call(arguments, 1);
	var self = this;
	var F = function(){};
	F.prototype = this.prototype;
	var bound = function(){
		var innerArgs = Array.prototype.slice.call(arguments);
		var finalArgs = args.concat(innerArgs);
		return self.apply(this instanceof F ? this : context || this, finalArgs);
	}
	bound.prototype = new F();
	return bound;
}

function DocumentElement(tagname) {
return document.createElement(tagname);
}
