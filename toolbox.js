function printf(string) {				        /*                 Menu               */
    var inbody = document.body.innerHTML;		        /* GitHub: Ctrl+L     VS Code: Ctrl+G */
    document.body.innerHTML = inbody + string;	                /* 01. printf -------------- line 001 */
}							        /* 02. importScripts ------- line 006 */
/* 03. importCss ----------- line 040 */
if (!importScripts) {					        /* 04. replaceAll ---------- line 045 */
    var importScripts = (function (globalEval) {	        /* 05. $() ----------------- line 052 */
        var xhr = new XMLHttpRequest;		                /* 06. String.delete ------- line 056 */
        return function importScripts() {                       /* 07. Function.bind ------- line 061 */
            var                                                 /* 08. VDom ---------------- line 079 */
                args = Array.prototype.slice.call(arguments),	/* 09. AjaxRequire --------- line 091 */
                len = args.length,				/* 10. vis(原vis.js) ------- line 128 */
                i = 0,						/* 11. new DocumentElement - line 183 */
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
    document.head.innerHTML = `${inhead}<link rel="stylesheet" href="${filesource}">`;
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

String.prototype.delete = function (deletestring) {
    var r = this.replace(deletestring, "");
    return r;
}

Function.prototype.bind = Function.prototype.bind || function (context) {
    /* 确保调用bind方法的一定要是一个函数 */
    if (typeof this !== "function") {
        console.error("ToolBox.JS Error: Function.prototype.bind Error: what is trying to be bound is not callable");
    }
    var args = Array.prototype.slice.call(arguments, 1);
    var self = this;
    var F = function () { };
    F.prototype = this.prototype;
    var bound = function () {
        var innerArgs = Array.prototype.slice.call(arguments);
        var finalArgs = args.concat(innerArgs);
        return self.apply(this instanceof F ? this : context || this, finalArgs);
    }
    bound.prototype = new F();
    return bound;
}

{
    let readytoparser = document.documentElement.outerHTML;
    if (document.compatMode == "CSS1Compat") {
        readytoparser = `<!DOCTYPE html>${document.documentElement.outerHTML}`;
    }
    window.vdom = new DOMParser().parseFromString(readytoparser, "text/html");
    vdom.render = function () {
        document.open();
        document.write(vdom.documentElement.outerHTML);
    };
}

class AjaxRequire {
    constructor() {
        this.sys = {
            core: new XMLHttpRequest() || new ActiveXObject("Microsoft.XMLHTTP") || new ActiveXObject("Msxml3.XMLHTTP") || new ActiveXObject("Msxml2.XMLHTTP"),
            basicdoing: function (reqtype, address, header = []) {
                this.core.open(reqtype, address);
                console.log(header);
                header.forEach(
                    function (item1) {
                        console.log(this);
                    }
                );
            },
            point: function (type, args) {
                var option = "";
                args.forEach(function (item) {
                    option = `${option}${item},`;
                });
                option = option.substring(0, option.length - 1);
                eval(`this.basicdoing("${type}", "${option}")`);
            }
        };
        this.POST = this.POST();
        this.GET = this.GET();
    }
    POST() {
        return function () {
            this.sys.point("POST", Array.prototype.slice.call(arguments));
        };
    }
    GET() {
        return function () {
            this.sys.point("GET", Array.prototype.slice.call(arguments));
        };
    }
}

const vis = {
    reinit: function () {
        var dbh_vis = document.head.innerHTML;
        var dbi_vis = document.body.innerHTML;
        var regin1_vis = /{{.*}}/gs;
        function rep1_vis(varname_vis) {
            /* a表示正则匹配到的内容  b表示大括号里的内容  c表示匹配到的内容出现的位置 */
            var ro_vis = varname_vis.delete("{{").delete("}}").delete(/ /g);
            if (ro_vis.indexOf("}}") != -1 && ro_vis.indexOf("{{") != -1) {
                return ro_vis;
            }
            try {
                var r_vis = eval(ro_vis);
                return r_vis;
            } catch (error) {
                console.error(`ToolBox.JS Error: Vis Error: ${error}`);
                return varname_vis;
            }
        }
        var ifels_vis = document.getElementsByTagName("if");
        for (var i = 0; i < ifels_vis.length; i++) {
            try {
                eval(`
                    if (${ifels_vis[i].getAttribute("cond")}) {
                        ifels_vis[i].innerHTML = ifels_vis[i].innerHTML.delete("<!--").delete("-->").delete("nouse");
                    } else {
                        ifels_vis[i].innerHTML = "<!--${ifels_vis[i].innerHTML.replace(/\({.*}\)/gs, function (s) {
                    return s.replace("({", "(nouse{")
                })
                    }-->";
                    }
                `);
            } catch { }
        }
        var regin2_vis = /\({.*}\)/gs;
        function rep2_vis(replacereturn) {
            var r = eval(`
                (function () {
                    try {
                        ${replacereturn.delete("({").delete("})")}
                    } catch (error) {
                        console.error("ToolBox.JS Error: Vis Error: " + error);
                        return "visctr";
                    }
                })()
            `);
            if (r == "visctr") {
                return replacereturn;
            } else {
                return r;
            }
        }
        document.body.innerHTML = dbi_vis.replaceAll(regin1_vis, rep1_vis).replaceAll(regin2_vis, rep2_vis);
        document.head.innerHTML = dbh_vis.replaceAll(regin1_vis, rep1_vis).replaceAll(regin2_vis, rep2_vis);
    }
}
vis.reinit();

class DocumentElement {
    constructor(tagname) {
        return document.createElement(tagname);
    }
}
