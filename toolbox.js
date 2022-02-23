/*             Menu             */
/* 1. printf ---------- line 10 */
/* 2. loadbootstrap --- line 15 */
/* 3. getURLparameter - line 20 */
/* 4. importScripts --- line 32 */
/* 5. importCss ------- line 66 */
/* 6. replaceAll ------ line 71 */
/* 7. HyperMD --------- line 78 */

function printf(string) {
	var inbody = document.body.innerHTML;
	document.body.innerHTML = inbody + string;
}

function loadbootstrap() {
	var inhead = document.head.innerHTML;
	document.head.innerHTML = inhead + '<!-- 最新版本的 Bootstrap 核心 CSS 文件 --><link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css" integrity="sha384-HSMxcRTRxnN+Bdg0JdbxYKrThecOKuH5zCYotlSAcp1+c8xmyTe9GYg1l9a69psu" crossorigin="anonymous"><!-- 可选的 Bootstrap 主题文件（一般不用引入） --><link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap-theme.min.css" integrity="sha384-6pzBo3FDv/PJ8r2KRkGHifhEocL+1X2rVCTTkUfGk7/0pbek5mMa1upzvWbrUbOZ" crossorigin="anonymous"><!-- 最新的 Bootstrap 核心 JavaScript 文件 --><script src="https://stackpath.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js" integrity="sha384-aJ21OjlMXNL5UyIl/XNwTMqvzeRMZH2w8c5cRVpzpU8Y5bApTppSuUkhZXN0VxHd" crossorigin="anonymous"></script>';
}

function getURLparameter(variable) {
	var query = window.location.search.substring(1);
	var vars = query.split("&");
	for (var i = 0; i < vars.length; i++) {
		var pair = vars[i].split("=");
		if (pair[0] == variable) {
			return pair[1];
		}
	}
	return (false);
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

importScripts('https://cdn.jsdelivr.net/npm/marked/marked.min.js');
for (var mdes = document.getElementByTagName("markdown");1=1;;)
{
    mdes[i].innerHTML = marked.parse(mdes[i].innerHTML);
}
