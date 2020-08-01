function goToSearch(typeId) {
	window.open("searchList.html?typeId=" + typeId);
}

function searchGoods() {
	var inputkey = $("#searchGoods").val();
	window.open("searchList.html?key=" + inputkey);
}
