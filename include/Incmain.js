function IncludeFile(file) {
	let filename =  "include\\"+file
	var archive = document.createElement("script");archive.type = "text/javascript";archive.src = filename;
	$("head").append(scpt);
	IncludeStep2();
}
function IncludeStep2() {
	
}