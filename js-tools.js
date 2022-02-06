/*             Menu             */
/* 1. printf ---------- line 07 */
/* 2. loadbootstrap --- line 12 */
/* 3. alertbox -------- line 17 */
/* 4. getURLparameter - line 25 */

function printf(string) {
	var inbody = document.body.innerHTML;
	document.body.innerHTML = inbody + string;
}

function loadbootstrap() {
    var inhead = document.head.innerHTML;
    document.head.innerHTML = inhead + '<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous"><script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script><script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.10.2/dist/umd/popper.min.js" integrity="sha384-7+zCNj/IqJ95wo16oMtfsKbZ9ccEh31eOz1HGyDuCQ6wgnyJNSYdrPa03rtR1zdB" crossorigin="anonymous"></script><script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.min.js" integrity="sha384-QJHtvGhmr9XOIpI6YVutG+2QOK9T+ZnN4kzFN1RtK3zEFEIsxhlmWl5/YESvpZ13" crossorigin="anonymous"></script>;
}

function alertbox(title,word,type) {
    // type: success | danger | info | warning
    loadbootstrap();
    var id = Math.random()*1000000000;
    var inbody = document.body.innerHTML;
    document.body.innerHTML = '<div class="container"><div class="row clearfix"><div class="col-md-12 column"><div class="alert alert-' + type + ' alert-dismissable" id="' + id + '"><button type="button" class="close" data-dismiss="alert" aria-hidden="true" onclick="document.getElementById(' + id + ').style.display = \'none\';">×</button><h4>' + title + '</h4>' + word + '</div></div></div></div>' + inbody;
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
