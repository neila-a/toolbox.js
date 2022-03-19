function printf(string) {				/*                Menu              */
	var inbody = document.body.innerHTML;		/* 1. printf -------------- line 001 */
	document.body.innerHTML = inbody + string;	/* 2. importScripts ------- line 006 */
}							/* 3. importCss ----------- line 040 */
							/* 4. replaceAll ---------- line 045 */
if (!importScripts) {					/* 5. $() ----------------- line 052 */
	var importScripts = (function (globalEval) {	/* 6. Function.bind ------- line 056 */
		var xhr = new XMLHttpRequest;		/* 7. vis(原vis.js) ------- line 074 */
		return function importScripts() {       /* 8. new DocumentElement - line 121 */
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

const vis = {
    init: function () {
        String.prototype.delete = function (deletestring) {
            var r = this.replace(deletestring, "");
            return r;
        }
        var dbh_vis = document.head.innerHTML;
        var dbi_vis = document.body.innerHTML;
        if (vis.data.map == "") {   
            vis.data.map = document.documentElement.outerHTML;
            if (document.compatMode == "CSS1Compat") {
            	vis.data.map = `<!DOCTYPE html>` + document.documentElement.outerHTML;
            }
            var parser_vis = new DOMParser();
            window.vdom = parser_vis.parseFromString(vis.data.map, "text/html");
            vdom.render = function () {
                document.open();
                document.write(vdom.documentElement.outerHTML);
            };
        }
        var regin_vis = /{{.*}}/g;
        function rep_vis(varname_vis) {
            /* a表示正则匹配到的内容  b表示大括号里的内容  c表示匹配到的内容出现的位置 */
            var ro_vis = varname_vis.delete("{{").delete("}}").delete(/ /g);
            try {
                var r_vis = eval(ro_vis);
                return r_vis;
            } catch (err) {
                console.error(`Vis Error: ${err}`);
                return varname_vis;
            }
        }
        document.body.innerHTML = dbi_vis.replace(regin_vis, rep_vis);
        document.head.innerHTML = dbh_vis.replace(regin_vis, rep_vis);
        var ifels_vis = document.getElementsByTagName("if");
        for (var i = 0;i<ifels_vis.length;i++) {
            try {
                eval(`if (${ifels_vis[i].getAttribute("cond")}) {ifels_vis[i].innerHTML = ifels_vis[i].innerHTML.delete("<!--").delete("-->");} else {ifels_vis[i].innerHTML = "<!--${ifels_vis[i].innerHTML.replace(/<!--.*-->/g, '')}-->";}`);
            } catch {}
        }
    },
    data: {
        map: ""
    }
}
vis.init();

function DocumentElement(tagname) {
return document.createElement(tagname);
}
