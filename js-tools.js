/*             Menu             */
/* 1. printf ---------- line 08 */
/* 2. loadbootstrap --- line 13 */
/* 3. alertbox -------- line 18 */
/* 4. getURLparameter - line 28 */
/* 5. codespace ------- line 40 */

function printf(string) {
	var inbody = document.body.innerHTML;
	document.body.innerHTML = inbody + string;
}

function loadbootstrap() {
    var inhead = document.head.innerHTML;
    document.head.innerHTML = inhead + '<!-- 最新版本的 Bootstrap 核心 CSS 文件 --><link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css" integrity="sha384-HSMxcRTRxnN+Bdg0JdbxYKrThecOKuH5zCYotlSAcp1+c8xmyTe9GYg1l9a69psu" crossorigin="anonymous"><!-- 可选的 Bootstrap 主题文件（一般不用引入） --><link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap-theme.min.css" integrity="sha384-6pzBo3FDv/PJ8r2KRkGHifhEocL+1X2rVCTTkUfGk7/0pbek5mMa1upzvWbrUbOZ" crossorigin="anonymous"><!-- 最新的 Bootstrap 核心 JavaScript 文件 --><script src="https://stackpath.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js" integrity="sha384-aJ21OjlMXNL5UyIl/XNwTMqvzeRMZH2w8c5cRVpzpU8Y5bApTppSuUkhZXN0VxHd" crossorigin="anonymous"></script>';
}

class alertbox {/* ES2015 or UP */
    constructor(title, word, type) {
        // type: success | danger | info | warning
        loadbootstrap();
        var id = Math.random() * 1000000000;
        var inbody = document.body.innerHTML;
        document.body.innerHTML = '<div class="container"><div class="row clearfix"><div class="col-md-12 column"><div class="alert alert-' + type + ' alert-dismissable" id="' + id + '"><button type="button" class="close" data-dismiss="alert" aria-hidden="true" onclick="document.getElementById(' + id + ').style.display = \'none\';">×</button><h4>' + title + '</h4>' + word + '</div></div></div></div>' + inbody;
    }
}

function getURLparameter(variable){
       var query = window.location.search.substring(1);
       var vars = query.split("&");
       for (var i=0;i<vars.length;i++) {
               var pair = vars[i].split("=");
               if (pair[0] == variable) {
	       		return pair[1];
       	       }
       }
       return(false);
}

class codespace {/* ES2015 or UP */
    constructor(htmldomname) {
        importScripts("lib/codemirror.js");
        CodeMirror.fromTextArea(document.getElementById(htmldomname), {
            lineNumbers: true,
            extraKeys: { "Ctrl-Space": function (cm) { CodeMirror.simpleHint(cm, CodeMirror.javascriptHint); } }
        });
        $(".CodeMirror-scroll").hover(function () {
            $(this).get(0).style.cursor = "text";
        });
    }
}
