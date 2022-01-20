function printf(string) {
	var inbody = document.body.innerHTML;
	document.body.innerHTML = inbody + string;
}
