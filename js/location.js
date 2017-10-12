var oSearch = document.getElementById('search');
oSearch.onchange = function(){
	console.log("文本框的value改变了！");
	window.location.href = "search.html";
}