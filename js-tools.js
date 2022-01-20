/*          Menu           */
/* 1.printf ------- line 3 */
function printf(string) {
	var inbody = document.body.innerHTML;
	document.body.innerHTML = inbody + string;
}
