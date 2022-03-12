/*               Menu            */
/* 1. printf ----------- line 08 */
/* 2. importScripts ---- line 13 */
/* 3. importCss -------- line 47 */
/* 4. replaceAll ------- line 52 */
/* 5. $() -------------- line 59 */
/* 6. new DocumentElement - line */

function printf(string) {
	var inbody = document.body.innerHTML;
	document.body.innerHTML = inbody + string;
}

if (!importScripts) {
	var importScripts = (function (globalEval) {
		var xhr = new XMLHttpRequest;
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

function DocumentElement(tagname) {
return document.createElement(tagname);
}
